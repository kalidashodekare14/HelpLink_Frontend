import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/layout/Navbar";
import AuthProvider from "@/auth/AuthProvider";
import { ReduxtProviderWrapper } from "@/components/ReduxProviderWrapper";
import { createTheme, ThemeProvider } from "@mui/material";
import { Rubik } from "next/font/google";
import ThemeRegistry from "@/utils/ThemeRegistry";
import Footer from "@/layout/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
})

const theme = createTheme({
  typography: {
    fontFamily: rubik.style.fontFamily
  }
})

export const metadata: Metadata = {
  title: "HelpLink",
  description: "Donation Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubik.className} antialiased`}
      >
        <AuthProvider>
          <ReduxtProviderWrapper>
            <ThemeRegistry>
              <Navbar />
              {children}
              <Footer />
            </ThemeRegistry>
          </ReduxtProviderWrapper>
        </AuthProvider>

      </body>
    </html>
  );
}
