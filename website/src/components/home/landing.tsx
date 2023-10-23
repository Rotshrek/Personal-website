"use client"

import Blob from "./blob"
import Image from "next/image"

export default function Landing() {
    return (
        <div className="md:flex h-screen justify-between items-end relative">
            <div className="pt-16 md:pt-0 md:my-auto px-12 md:px-0 md:ml-20">
                <h1 className="font-bold text-5xl md:text-7xl mb-3 animate-passive-glitch hover:animate-hover-glitch">
                    Andrés Sanhueza
                </h1>
                <div className="max-w-xl">
                    <p className="text-lg">
                        I&apos;m a FrontEnd Developer with a Designer background. I majored in design, taught myself how
                        to code in Javascript, and I’ve being working as a FrontEnd dev for the past 5 years. I like to
                        build beautiful and functional digital products.
                    </p>
                </div>
            </div>
            <div className="md:h-full flex w-1/2">
                <div className="m-auto">
                    <div className="md:h-1/4">
                        <Blob />
                    </div>
                </div>
            </div>
            <div className="md:hidden absolute bottom-[72px] w-full text-center bg-zinc-900">
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
            <div className="absolute bottom-[-10px] w-screen h-[60px] md:h-[180px] overflow-hidden">
                <div className="absolute left-1/2 w-[120%] h-full transform -translate-x-1/2 ">
                    <Image src="/img/white_trees.svg" alt="White trees" fill />
                </div>
            </div>
        </div>
    )
}
