/**@type {import ('tailwindcss').config}*/

export default {
    content: ["./index.html","./src/**/*.{.js,ts,jsx,tsx}"],
    theme:{
        extends:{},
        fontFamily:{
            display:["syne"],
        },
    },
    plugins: [require("tailwindcss-motion")],     
};