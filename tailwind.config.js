/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: [
        "./views/**/*.{html,js,twig}",
    ],
    theme: {
        extend: {
            fontFamily: {
                jost: ['Jost', 'sans-serif'],
            }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                magna: {
                    "primary": "#0588da",
                    "primary-content": "#ffffff",
                    "secondary": "#1d4ed8",
                    "secondary-content": "#ffffff",
                    "accent": "#7dd3fc",
                    "accent-content": "#292524",
                    "neutral": "#292524",
                    "base-100": "#172d33",
                    "info": "#008dff",
                    "info-content": "#ffffff",
                    "success": "#00f5c8",
                    "warning": "#ffa700",
                    "warning-content": "#ffffff",
                    "error": "#dc2626",
                    "error-content": "#ffffff",
                },
            },
        ],
        'darkTheme': false,
    },
}