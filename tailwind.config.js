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
        screens: {
            'xsm':'300px',
            'sm':'640px',
            'md':'768px',
            'lg':'1024px',
            'xl':'1280px',
            '2xl':'1536px',
            '3xl':'1920px',
        },
    },
    plugins: [],
}


