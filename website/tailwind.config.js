/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                "passive-glitch": "passive-distort 10s linear infinite",
                "hover-glitch": "hover-distort 2s linear infinite",
                "aurora-borealis": "aurora-borealis 20s ease infinite",
            },
            keyframes: {
                "passive-distort": {
                    "0%": { "text-shadow": "-2px 3px 0 red, 3px -4px 0 blue" },
                    "2%, 30%": { "text-shadow": "none" },
                    "32%": { "text-shadow": "3px -4px 0 blue, -2px 5px 0 red" },
                    "34%, 50%": { "text-shadow": "none" },
                    "51%": { "text-shadow": "0 -4px 2px green, 0 3px 2px blue", transform: "translateX(1px)" },
                    "52%": {
                        "text-shadow": "-3px 4px 2px blue, 2px -3px 2px red",
                        transform: "translateY(1px), translateX(-1px)",
                    },
                    "53%": { "text-shadow": "-2px 3px 2px red, 2px -3px 2px green", transform: "translateY(-1px)" },
                    "54%, 100%": { "text-shadow": "none", transform: "none" },
                },
                "hover-distort": {
                    "0%": {
                        "text-shadow": "0 -4px 0 green, 0 3px -4px blue",
                        transform: "translateX(1px)",
                    },
                    "5%": {
                        "text-shadow": "-10px 8px 0 blue, 2px -3px 0 red",
                        transform: "translateX(-1px)",
                    },
                    "10%, 15%": { "text-shadow": "none", transform: "none" },
                    "20%": { "text-shadow": "-2px 4px 0 red, 8px 6px 0 green" },
                    "30%": {
                        "text-shadow": "10px -4px 0 green, 0 3px -4px blue",
                        transform: "translateX(-1px)",
                    },
                    "35%": {
                        "text-shadow": "-3px 4px 0 blue, -2px -6px 0 red",
                        transform: "translateY(2px)",
                    },
                    "40%, 45%": { "text-shadow": "none", transform: "none" },
                    "50%": { "text-shadow": "-4px 7px 0 red, 4px -6px 0 green" },
                    "55%": {
                        "text-shadow": "4px -8px 4px blue, 3px 3px 4px red",
                        transform: "translateY(-1px)",
                    },
                    "60%": {
                        "text-shadow": "6px -4px 4px green, 4px -3px 4px blue",
                        transform: "translateX(1px)",
                    },
                    "65%, 70%": { "text-shadow": "none", transform: "none" },
                    "75%": { "text-shadow": "-8px 4px 8px red, -12px -12px 8px blue" },
                    "80%": {
                        "text-shadow": "-16px 8px 8px green, 6px 10px 8px red",
                        transform: "translateX(1px)",
                    },
                    "85%": {
                        "text-shadow": "3px -4px 4px blue, 8px 6px 4px green",
                        transform: "translateY(-2px)",
                    },
                    "90%, 95%": { "text-shadow": "none", transform: "none" },
                    "100%": { "text-shadow": "6px 6px 4px red, -8px -6px 4px red" },
                },
                "aurora-borealis": {
                    "0%": { "background-position": "90% 100%", opacity: 0 },
                    "10%": { "background-position": "90% 100%", opacity: 0 },
                    "45%": { "background-position": "10% 0%", opacity: 0.6 },
                    "50%": { "background-position": "10% 0%", opacity: 0.8 },
                    "55%": { "background-position": "10% 0%", opacity: 0.6 },
                    "90%": { "background-position": "90% 100%", opacity: 0 },
                    "100%": { "background-position": "90% 100%", opacity: 0 },
                },
            },
        },
    },
    plugins: [],
}
