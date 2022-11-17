/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                "passive-glitch": "passive-distort 10s linear infinite",
                "hover-glitch": "hover-distort 1s linear infinite",
            },
            keyframes: {
                "passive-distort": {
                    "0%": { "text-shadow": "-1px 2px 0 red, 2px -3px 0 blue" },
                    "2%, 30%": { "text-shadow": "none" },
                    "32%": { "text-shadow": "2px -2px 0 red, -2px 3px 0 blue" },
                    "34%, 50%": { "text-shadow": "none" },
                    "51%": { "text-shadow": "0 -4px -4px green, 0 3px -4px blue" },
                    "52%": { "text-shadow": "-3px 4px 0 blue, 2px -3px 0 red" },
                    "53%": { "text-shadow": "-2px 3px 0 red, 2px -3px 0 green" },
                    "54%, 100%": { "text-shadow": "none" },
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
            },
        },
    },
    plugins: [],
}
