/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'baijamjuree': ['Bai Jamjuree', 'sans-serif'],
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(calc(-41%))' },
                }
            },
            animation: {
                scroll: 'scroll 80s linear infinite',
            },
        },
    },
    plugins: [],
}


