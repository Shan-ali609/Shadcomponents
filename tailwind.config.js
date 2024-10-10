/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  darkMode: "class",
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
		  raleway: ['var(--font-raleway)', 'sans-serif'], 
		  roboto: ['var(--font-roboto)', 'sans-serif'],   
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  


  