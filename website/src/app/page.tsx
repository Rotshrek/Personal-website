"use client"

import Footer from "@/components/common/footer"
import Landing from "@/components/home/landing"
import Resume from "@/components/home/resume"

export default function Home() {
    return (
        <div>
            <main>
                <div className="relative bg-zinc-900 text-white h-screen">
                    <Landing />
                </div>
                <Resume />
            </main>

            <Footer />
        </div>
    )
}
