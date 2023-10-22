"use client"

import Footer from "@/components/common/footer"
import Blob from "@/components/home/blob"
import Resume from "@/components/home/resume"

export default function Home() {
    return (
        <div>
            <main>
                <div className="bg-zinc-900 text-white md:flex md:h-screen justify-between items-end">
                    <div className="pt-20 md:pt-0 md:my-auto px-12 md:px-0 md:ml-20">
                        <h1 className="font-bold text-5xl md:text-7xl mb-3 animate-passive-glitch hover:animate-hover-glitch">
                            Andrés Sanhueza
                        </h1>
                        <div className="max-w-xl">
                            <p className="text-lg">
                                I&apos;m a FrontEnd Developer with a Designer background. I majored in design, taught
                                myself how to code in Javascript, and I’ve being working as a FrontEnd dev for the past
                                5 years. I like to build beautiful and functional digital products.
                            </p>
                        </div>
                    </div>
                    <div className="h-full flex w-1/2">
                        <div className="m-auto">
                            <div className="md:h-1/4">
                                <Blob />
                            </div>
                            <div className="text-xl border-r-2 px-4 mt-8 mb-8 text-right">
                                <a
                                    href="#curriculum"
                                    className="mr-8 md:mr-0 md:block mb-4 hover:animate-hover-glitch cursor-pointer"
                                >
                                    Curriculum
                                </a>
                                <a
                                    href="#contact"
                                    className="mr-8 md:mr-0 md:block mb-4 hover:animate-hover-glitch cursor-pointer"
                                >
                                    Contact
                                </a>
                                <a href="/qa" className="md:block hover:animate-hover-glitch cursor-pointer">
                                    QA for recruiters
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Resume />
            </main>

            <Footer />
        </div>
    )
}
