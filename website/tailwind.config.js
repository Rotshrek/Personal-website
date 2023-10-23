/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            inset: {
                "51px": "51px",
                "27px": "27.5px",
            },
            animation: {
                "text-appear": "text-appear 4s ease-in-out",
                "curtain-disappear": "curtain-disappear 3s ease-in-out",
                "triangle-appear": "triangle-appear 3s ease-in-out",
                "hide-blocker": "hide-blocker 5s",
                "side-shorten": "side-shorten 6s ease-in-out",
            },
            keyframes: {
                "text-appear": {
                    "0%": {
                        transform: "translateX(-620px)",
                        // width: "10px",
                    },
                    "60%": {
                        transform: "translateX(-620px)",
                        // width: "10px",
                    },
                    "100%": {
                        transform: "translateX(0px)",
                        // width: "580px",
                    },
                },
                "curtain-disappear": {
                    "0%": { opacity: 1, zIndex: 40 },
                    "40%": { opacity: 1, zIndex: 40 },
                    "95%": { opacity: 0, zIndex: 40 },
                    "100%": { opacity: 0, zIndex: 0 },
                },
                "triangle-appear": {
                    "0%": {
                        transform: "translateX(50vw) scale(10) rotate(270deg)",
                        opacity: 1,
                    },
                    "80%": {
                        transform: "translateX(0) scale(1) rotate(0deg)",
                        opacity: 1,
                    },
                    "100%": {
                        transform: "translateX(0) scale(1) rotate(0deg)",
                        opacity: 1,
                    },
                },
                "hide-blocker": {
                    "0%": { opacity: 1 },
                    "80%": { opacity: 1 },
                    "100%": { opacity: 0 },
                },
                "side-shorten": {
                    "0%": { width: "34%" },
                    "20%": { width: "34%" },
                    "100%": { width: "0" },
                },
            },
        },
    },
    plugins: [],
}
