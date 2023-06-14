import { Inter as FontSans } from "next/font/google"

import "@/styles/globals.css"

import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import ThemeProvider from "@/components/ThemeProvider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-slate-900 antialiased dark:text-gray-200",
          fontSans.variable
        )}
      >
        <ThemeProvider enableSystem attribute="class" defaultTheme="system">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
