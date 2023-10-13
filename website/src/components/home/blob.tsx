"use client"

import Image from "next/image"
import frontPic from "../../../public/img/blob-front.png"

const shapes = [
    "M 60 120" +
        "C 80 90 140 80 220 100" +
        "C 280 120 330 180 340 200" +
        "C 420 320 400 340 360 380" +
        "C 330 400 320 420 240 420" +
        "C 120 400 100 380 80 350" +
        "C 70 320 20 200 60 120" +
        "Z;",
    "M 220 130 " +
        "C 240 130 280 130 300 135" +
        "C 320 140 360 160 380 180" +
        "C 420 240 400 360 380 390" +
        "C 360 410 330 420 240 410" +
        "C 120 400 100 380 60 350" +
        "C 0 320 0 120 220 130" +
        "Z;",
    "M 100 200 " +
        "C 120 180 200 180 220 180" +
        "C 270 190 300 200 340 220" +
        "C 410 260 420 320 410 370" +
        "C 380 410 330 420 240 420" +
        "C 120 420 100 420 60 390" +
        "C 0 320 20 240 100 200" +
        "Z;",
    "M 160 120" +
        "C 180 110 200 105 220 110" +
        "C 280 114 330 160 340 180" +
        "C 390 260 370 280 350 330" +
        "C 340 360 320 380 190 390" +
        "C 90 380 90 360 80 350" +
        "C 70 320 20 200 160 120" +
        "Z;",
    "M 60 240" +
        "C 60 160 140 140 180 140" +
        "C 210 140 255 160 275 180" +
        "C 300 200 320 240 340 280" +
        "C 360 300 380 420 240 420" +
        "C 120 400 100 380 80 350" +
        "C 70 320 60 280 60 240" +
        "Z;",
]

function Animation({ fill, duration }) {
    return (
        <path fill={fill}>
            <animate
                attributeName="d"
                dur={duration + "s"}
                repeatCount="indefinite"
                values={shapes.join("") + shapes[0]}
            />
        </path>
    )
}

export default function Blob() {
    return (
        <div className="relative h-[600px] w-[600px] max-w-none">
            <svg className="absolute top-2 left-0 opacity-30" viewBox="0 0 420 420">
                <defs>
                    <pattern id="bgImg" patternUnits="userSpaceOnUse" width="420" height="420">
                        <image href="/img/blob-bg.jpg" x="0" y="0" width="420" height="420" />
                    </pattern>
                </defs>

                <Animation fill="red" duration="6" />
            </svg>

            <svg className="absolute top-0 left-2 opacity-30" viewBox="0 0 420 420">
                <defs>
                    <pattern id="bgImg" patternUnits="userSpaceOnUse" width="420" height="420">
                        <image href="/img/blob-bg.jpg" x="0" y="0" width="420" height="420" />
                    </pattern>
                </defs>

                <Animation fill="blue" duration="7" />
            </svg>

            <svg className="absolute top-0 left-0" viewBox="0 0 420 420">
                <defs>
                    <pattern id="bgImg" patternUnits="userSpaceOnUse" width="420" height="420">
                        <image href="/img/blob-bg.jpg" x="0" y="0" width="420" height="420" />
                    </pattern>
                </defs>

                <Animation fill="url(#bgImg)" duration="8" />
            </svg>

            <Image className="absolute top-0 left-0" src={frontPic} alt="Portrait background" />
        </div>
    )
}
