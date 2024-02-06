"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import Navbar from "./Navbar"
import Footer from "./Footer"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>
    <Navbar />
    {children}
    <Footer />
    </NextThemesProvider>
}
