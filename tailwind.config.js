/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                berling: ["Berling"],
                SFPro: ["SFPro"],
                Playfair: ["Playfair"],
            },
        },
    },
    plugins: [],
};
