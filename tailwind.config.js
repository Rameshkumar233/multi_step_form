/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            xs: "476px",
            ...defaultTheme.screens,
        },
        extend: {
            colors: {
                "marine-blue": "hsl(213,96%,18%)",
                "purplish-blue": "hsl(243,100%,62%)",
                "pastel-blue": "hsl(228,100%,84%)",
                "light-blue": "hsl(206,94%,87%)",
                "strawberry-red": "hsl(354,84%,57%)",
                "cool-gray": "hsl(231,30%,63%)",
                "light-gray": "hsl(229,60%,87%)",
                magnolia: "hsl(217,100%,97%)",
                alabaster: "hsl(231,100%,99%)",
            },
        },
    },
    plugins: [],
};
