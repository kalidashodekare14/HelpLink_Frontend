"use client"


import { ThemeProvider, } from "@emotion/react"
import { createTheme } from "@mui/material"
import { Rubik } from "next/font/google"


const rubik = Rubik({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"]
})

const theme = createTheme({
    typography: {
        fontFamily: rubik.style.fontFamily
    }
})


export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}