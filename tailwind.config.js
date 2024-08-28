/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // container para madali
    container: {
      center: true,
      padding: "15px",
    },

    // Nag search ko sakto2 nga sizes sa screens in case mag mobile responsive
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },

    // custom font
    fontFamily: {
      primary: "var(--font-Montserrat)",
    },

    extend: {
      // CUSTOM COLORS
      colors: {
        dmaroon: "#521018",
        maroon: "#A41C30",
        white2: "#FFFEFC",
        itom: "#28282B",
      },

      backgroundImage: {
        'header-bg': "url('/headerbackground.png')",
      },
    },
  },
  plugins: [],
};
