import type { Metadata } from "next"
import { Manrope } from "next/font/google"

import "./globals.css"

const manrope = Manrope({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "Cloudtify | Hear the world's sounds",
   description: "Cloudtify is a podcast platform that lets you listen to the world's sounds.",
   icons: { icon: "/icons/ic_logo.svg" },
}

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
   return (
      // ConvexClerkProvider Here
      <html lang="en">
         {/* AudioProvider Here */}
         <body className={manrope.className}>{children}</body>
      </html>
   )
}
