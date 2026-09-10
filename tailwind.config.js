/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-green": "#04342C",
        "mid-green": "#1D9E75",
        "light-green": "#2B8A6C",
        "teal-light": "#5DCAA5",
        "off-white": "#E1F5EE",
        "pale-green": "#E0F0EA",
        "deep-teal": "#085041",
        navy: "#1A3A2E",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(4, 52, 44, 0.12)",
        "card-hover": "0 12px 32px -8px rgba(4, 52, 44, 0.22)",
      },
    },
  },
  plugins: [],
};
