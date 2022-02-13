module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            principal: '#1CB5E0',
            secondary: '#6a67ce',
            terciary: '#3c3e41',
            boldblack: '#1e2125'
        },
        letterSpacing: {
            iswider: '.2em',
        }
    },
    plugins: [
        require('flowbite/plugin')
    ],
}