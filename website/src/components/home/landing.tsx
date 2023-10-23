"use client"

import { useCallback, useEffect, useState } from "react"

export default function Landing() {
    const [scrollY, setScrollY] = useState(0),
        [namePos, setNamePos] = useState(0),
        deviceHeight = typeof window !== "undefined" ? window.innerHeight : 700,
        deviceWidth = typeof window !== "undefined" ? window.innerWidth : 1024,
        distanceToLeft = deviceWidth / 2 - 580 / 2,
        passedLanding = scrollY > deviceHeight - 70,
        passedScreen = scrollY > deviceHeight,
        smallDevice = typeof window !== "undefined" && window?.innerWidth < 640

    const onScroll = useCallback(() => {
        if (typeof window !== "undefined") {
            const { pageYOffset } = window
            setScrollY(pageYOffset)
            if (pageYOffset > deviceHeight - 70) setNamePos(0)
            else if (pageYOffset > deviceHeight - 275) setNamePos(pageYOffset - (deviceHeight - 275))
            else setNamePos(0)
        }
    }, [])

    useEffect(() => {
        if (typeof window !== "undefined") window.addEventListener("scroll", onScroll, { passive: true })
        return () => {
            if (typeof window !== "undefined") window.removeEventListener("scroll", onScroll)
        }
    }, [])

    return (
        <div id="landing" className="h-screen justify-between items-end relative">
            <div
                className={`hidden md:block fixed p-12 top-0 w-full text-right z-20 ${
                    passedLanding ? "text-zinc-700" : "text-white"
                }`}
            >
                <a
                    href="#curriculum"
                    className={`mr-8 cursor-pointer ${
                        passedLanding ? (passedScreen ? "bg-white" : "") : "bg-zinc-900"
                    }`}
                >
                    Curriculum
                </a>
                <a
                    href="#contact"
                    className={`mr-8 cursor-pointer ${
                        passedLanding ? (passedScreen ? "bg-white" : "") : "bg-zinc-900"
                    }`}
                >
                    Contact
                </a>
                <a
                    href="/qa"
                    className={`cursor-pointer ${passedLanding ? (passedScreen ? "bg-white" : "") : "bg-zinc-900"}`}
                >
                    QA for recruiters
                </a>
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-zinc-900 z-0 opacity-0 animate-curtain-disappear" />
            <div className="">
                <div className="relative m-auto overflow-hidden h-[50vh] md:h-[600px] min-h-[200px] max-h-[400px] md:max-h-full w-full">
                    <div className="bg-[url('/img/bg.jpg')] bg-cover md:bg-[length:100vw_auto] bg-no-repeat bg-[center_bottom_35vh] md:bg-[center_bottom_25vh] bg-fixed w-full h-[600px]" />
                    <div className="absolute bottom-0 z-10 w-full h-1/2 bg-gradient-to-t from-zinc-900 to-transparent" />
                    {/* <div className="absolute bottom-0 left-2/3 z-10 w-0 h-full bg-zinc-900 animate-side-shorten" />
                    <div className="absolute bottom-0 right-2/3 z-10 w-0 h-full bg-zinc-900 animate-side-shorten" />
                    <div className="absolute bottom-0 left-3/4 z-10 w-0 h-full bg-zinc-900 animate-side-shorten" />
                    <div className="absolute bottom-0 right-3/4 z-10 w-0 h-full bg-zinc-900 animate-side-shorten" />
                    <div className="absolute bottom-0 left-[82%] z-10 w-0 h-full bg-zinc-900 animate-side-shorten" />
                    <div className="absolute bottom-0 right-[82%] z-10 w-0 h-full bg-zinc-900 animate-side-shorten" />
                    <div className="absolute bottom-0 left-[87%] z-10 w-0 h-full bg-zinc-900 animate-side-shorten" />
                    <div className="absolute bottom-0 right-[87%] z-10 w-0 h-full bg-zinc-900 animate-side-shorten" />
                    <div className="absolute bottom-0 left-[90%] z-10 w-[10%] h-full bg-zinc-900" />
                    <div className="absolute bottom-0 right-[90%] z-10 w-[10%] h-full bg-zinc-900" /> */}
                </div>
            </div>
            <div className="absolute w-full h-full">
                <div className="m-auto w-fit relative p-8 md:p-0">
                    <div
                        className={`flex items-center md:min-w-[640px]`}
                        style={{
                            top: passedLanding ? 0 : namePos,
                            left: passedLanding ? 20 : (namePos * distanceToLeft) / -222,
                            position: passedLanding && !smallDevice ? "fixed" : "relative",
                        }}
                    >
                        {/* <Image
                            src={triangle}
                            alt="Triangle"
                            className="hidden md:inline-block mb-4 relative z-50 animate-triangle-appear"
                            height={70}
                        /> */}

                        <svg
                            className={`inline-block mb-[0.9rem] relative z-[100] animate-triangle-appear`}
                            style={{
                                height: passedLanding ? 50 : 70,
                                width: passedLanding ? 32 : 52,
                            }}
                            viewBox="0 0 173.92 233.73"
                        >
                            <path
                                fill={passedLanding ? "rgb(24 24 27)" : "white"}
                                d="m110.58,67.31h-.01L86.97,0l-23.6,67.31h-.03L0,233.73h173.92l-63.34-166.41Zm-23.62,49.21l19.43,55.4h-38.85l19.43-55.4Z"
                            />
                        </svg>

                        <div
                            className={`overflow-hidden inline-block relative ${
                                passedLanding ? "md:-left-27px" : "md:-left-51px"
                            }`}
                        >
                            {
                                <div
                                    className={`hidden md:block bg-${
                                        passedLanding ? "white" : "zinc-900"
                                    } w-[40px] h-[80px] absolute left-0 z-30 opacity-0 animate-hide-blocker`}
                                />
                            }
                            <div className="relative animate-text-appear overflow-hidden z-20 ml-6 md:ml-0 mb-4 md:mb-0">
                                <h1
                                    className={`font-bold text-5xl md:text-right md:whitespace-nowrap ${
                                        passedLanding ? "text-zinc-900 md:text-4xl" : "text-white md:text-7xl"
                                    } ${passedScreen ? "bg-white" : ""}`}
                                >
                                    Andrés Sanhueza
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-xl">
                        <p className="text-lg">
                            I&apos;m a FrontEnd Developer with a Designer background. I majored in design, taught myself
                            how to code in Javascript, and I’ve being working as a FrontEnd dev for the past 6 years.
                        </p>
                    </div>
                </div>
            </div>
            <div className="md:hidden absolute bottom-[80px] w-full text-center bg-zinc-900">
                <a href="#curriculum" className="mr-8 cursor-pointer">
                    Curriculum
                </a>
                <a href="#contact" className="mr-8 cursor-pointer">
                    Contact
                </a>
                <a href="/qa" className="cursor-pointer">
                    QA for recruiters
                </a>
            </div>
        </div>
    )
}
