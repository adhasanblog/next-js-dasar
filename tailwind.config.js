/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{jsx,tsx}",
        "./components/**/*.{jsx,tsx}",

        // Or if using `src` directory:
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}

