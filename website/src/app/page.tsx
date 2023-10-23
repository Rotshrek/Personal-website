"use client"

import Footer from "@/components/common/footer"
import Aurora from "@/components/home/aurora"
import Landing from "@/components/home/landing"
import Resume from "@/components/home/resume"

export default function Home() {
    return (
        <div>
            <main>
                <div className="relative bg-zinc-900 text-white md:h-screen">
                    <div className="absolute p-12 top-0 w-full text-right z-20">
                        <a href="#curriculum" className="mr-8 hover:text-green-600 cursor-pointer">
                            Curriculum
                        </a>
                        <a href="#contact" className="mr-8 hover:text-green-600 cursor-pointer">
                            Contact
                        </a>
                        <a href="/qa" className="hover:text-green-600 cursor-pointer">
                            QA for recruiters
                        </a>
                    </div>
                    <Aurora />
                    <Landing />
                </div>
                <Resume />
            </main>

            <Footer />
        </div>
    )
}
