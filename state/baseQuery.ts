import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { getSession } from "next-auth/react";


const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,

    prepareHeaders: async (headers) => {
        const session = await getSession();
        console.log("Session in baseQuery:", session?.accessToken);
        if (session?.accessToken) {
            headers.set("Authorization", `Bearer ${session?.accessToken}`);
        }
    }

})

export default baseQuery;