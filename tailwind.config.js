
module.exports = {
    darkMode: 'class',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS/JSX/TS/TSX files in src/
    ],
    theme: {
      extend: {
        backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      }, // Customize Tailwind theme here (optional)
    },
    plugins: [], // Add Tailwind plugins here (optional)
  };