import "./globals.css"
// import { Open_Sans, Scope_One, Bevan } from "next/font/google"
// import Navbar from "@/components/navbar"

// const open_sans = Open_Sans({ subsets: ["latin"], variable: "--font-open_sans" })
// const scope_one = Scope_One({ subsets: ["latin"], variable: "--font-scope_one", weight: "400" })
// const bevan = Bevan({ subsets: ["latin"], variable: "--font-bevan", weight: "400" })

export const metadata = {
    title: "Andrés Sanhueza",
    description: "FrontEnd Developer",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
