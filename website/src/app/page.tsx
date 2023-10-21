"use client"

import Footer from "@/components/common/footer"
import Blob from "@/components/home/blob"
import Resume from "@/components/home/resume"

export default function Home() {
    return (
        <div>
            <main>
                <div className="bg-zinc-900 text-white flex h-screen justify-between items-end">
                    <div className="my-auto ml-20">
                        <h1 className="font-bold text-7xl mb-3 animate-passive-glitch hover:animate-hover-glitch">
                            Andrés Sanhueza
                        </h1>
                        <div className="max-w-xl">
                            <p className="text-lg">
                                &quot;I&apos;m a FrontEnd Developer with a Designer background. I majored in design,
                                taught myself how to code in Javascript, and I’ve being working as a FrontEnd dev for
                                the past 5 years. I like to build beautiful and functional digital products.&quot;
                            </p>
                        </div>
                    </div>
                    <div className="h-full flex w-1/2">
                        <div className="m-auto">
                            <div className="h-1/4">
                                <Blob />
                            </div>
                            <div className="text-xl border-r-2 px-4 mt-8 text-right">
                                <a
                                    href="#curriculum"
                                    className="block w-full mb-4 hover:animate-hover-glitch cursor-pointer"
                                >
                                    Curriculum
                                </a>
                                <a
                                    href="#contact"
                                    className="block w-full mb-4 hover:animate-hover-glitch cursor-pointer"
                                >
                                    Contact
                                </a>
                                <a href="/qa" className="block w-full hover:animate-hover-glitch cursor-pointer">
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
