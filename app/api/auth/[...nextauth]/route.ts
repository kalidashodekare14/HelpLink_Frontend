import axios from "axios"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


export const authOptions = {
    secret: process.env.NEXT_JWT_SECRET,
    session: {
        strategy: "jwt" as const
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                try {
                    if (!credentials) return null;
                    const { email, password } = credentials;

                    if (!email || !password) return null;

                    const res = await axios.post(
                        "http://localhost:5000/api/v1/auth/login",
                        {
                            email: email,
                            password: password
                        },
                        { withCredentials: true }
                    );
                    const data = res.data.data;
                    if (data && data.user) {
                        return {
                            id: data.user._id,
                            name: data.user.name,
                            email: data.user.email,
                            token: data.token
                        }
                    }
                    return null;
                } catch (error) {
                    console.error(error);
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }: { token: any, user: any }) {
            if (user) {
                token.accessToken = user.token;

            }
            return token;
        },
        async session({ session, token }: { session: any; token: any }) {
            if (token) session.user.accessToken = token.accessToken;
            return session;
        }
    }

};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }