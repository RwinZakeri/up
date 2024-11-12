import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGreen: "#00CA99",
        mainWhite: "#ffffff",
        mainGray: "#BDBDBD",
        lightGreenXs: "#D8F9ED",
        lightGreenXXs: "#e5faf5",
        lightGreenXXXs: "#f5fbf6",
        highGreen: "#59cb99",
        lightGray: "#f2f2f2",
        lightRed: "#fdefed",
        lightOrange: "#f26e8a",
        lightPink: "#fcedf6",
        pink: "#f05ba1",
        gold: "#faa02f",
        lightGreenXXXXs: "#F2F6F0",
        grayXlight: "#F8F8F8",
      },
    },
  },
  plugins: [],
};

export default config;
