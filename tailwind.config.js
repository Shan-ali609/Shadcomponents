/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        raleway: ["var(--font-raleway)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      screens: {
        1285: "1285px",
        768: "768px",
      },
      // Add keyframes and animations
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInOut: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "10%": { opacity: "1", transform: "translateY(0)" },
          "90%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s forwards",
        fadeInOut: "fadeInOut 0.5s forwards",
      },
      colors: {
        fontcolor: "hsl(240, 10%, 3.9%)",
      },
    },
  },
  variants: {
    scrollbar: ["dark", "hover"], // Define variants here, outside the theme
  },
  plugins: [
    require("tailwind-scrollbar"), // Add the scrollbar plugin here
    require("tailwindcss-animate"),
  ],
};
