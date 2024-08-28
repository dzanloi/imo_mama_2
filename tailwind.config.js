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
        dmaroon: "",
        maroon: "",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
