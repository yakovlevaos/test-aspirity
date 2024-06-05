/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,cjs,mjs}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,,cjs,mjs}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,,cjs,mjs}",
  ],
  theme: {
    colors: {
      bgBlack: "#141414",
      bgGray: "#232324",
      gray: "#363738",
      primary: "#E1E3E6",
      secondary: "#B0B1B6",
      tetriary: "#76787A",
      blue: "#0047BB",
      green: "#25824F",
      red: "#DB4546",
      yellow: "#FFB649",
      popover: "#303030",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1494px",
    },
  },
  plugins: [],
};
