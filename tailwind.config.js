/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html", "./src/**/*.{html,js}"],
    theme: {
        extend: {
            screens: {
                "1xl": "1426px",
            },
            fontFamily: {
                berling: ["Berling"],
                SFPro: ["SFPro"],
                Playfair: ["Playfair"],
            },
            fontSize: {
                "10xl": "14rem",
            },
        },
    },
    plugins: [],
};
