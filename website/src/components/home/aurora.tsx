"use client"

// const fill = "rgb(24 24 27)"

// const shapes1 = [
//     "M 0 40 C 40 35, 65 35, 95 40 S 150 60, 180 80 S 200 200, 0 200 Z;",
//     "M 10 40 C 40 0, 45 0, 125 40 S 150 60, 180 40 S 200 200, 0 200 Z;",
// ]

// const shapes2 = [
//     "M 10 40 C 40 30, 65 30, 95 40 S 150 60, 180 40 S 200 200, 0 200 Z;",
//     "M 10 40 C 40 10, 65 10, 95 40 S 150 60, 180 40 S 200 200, 0 200 Z;",
// ]

export default function Aurora() {
    return (
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute w-full h-full bg-gradient-to-tr from-zinc-700 via-zinc-700 to-[magenta] animate-[aurora-borealis_30s_ease_infinite] bg-[length:200%_200%]" />
            <div className="absolute w-full h-full bg-gradient-to-t from-zinc-700 via-zinc-700 to-[green] animate-[aurora-borealis_10s_ease_infinite] bg-[length:200%_200%]" />
            <div className="absolute w-full h-full bg-gradient-to-tl from-zinc-700 via-zinc-700 to-[#40E0D0] animate-aurora-borealis bg-[length:200%_200%]" />

            <div className="absolute w-full h-full bg-gradient-to-t from-zinc-900 to-90% to-transparent" />
            {/* <div className="absolute w-full h-full opacity-40 bg-wave-pattern animate-aurora-borealis" />

            <svg className="absolute w-full h-full" viewBox="10 20 180 40">
                <path fill={fill}>
                    <animate
                        attributeName="d"
                        dur={"20s"}
                        repeatCount="indefinite"
                        values={shapes1.join("") + shapes1[0]}
                    />
                </path>
            </svg>

            <svg className="absolute w-full h-full rotate-180" viewBox="10 20 180 40">
                <path fill={fill}>
                    <animate
                        attributeName="d"
                        dur={"20s"}
                        repeatCount="indefinite"
                        values={shapes2.join("") + shapes2[0]}
                    />
                </path>
            </svg> */}

            {/* <svg className="absolute w-full h-full" viewBox="10 20 180 40">
            <path d="M 10 40 C 40 30, 65 30, 95 40 S 150 60, 180 40 S 200 200, 0 200 Z" stroke={fill} fill={fill}/>
        </svg> */}

            {/* <svg className="absolute w-full h-full rotate-180" viewBox="10 18 180 40">
            <path d="M 10 40 C 40 10, 65 10, 95 40 S 150 60, 180 40 S 200 200, 0 200 Z" stroke={fill} fill={fill}/>
        </svg> */}
        </div>
    )
}
