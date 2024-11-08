import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGreen: "#00CA99",
        mainWhite: "#ffffff",
        mainGray: "#BDBDBD",
        lightGreenXs: "#D8F9ED",
        lightGreenXXs: "#e5faf5",
        highGreen: "#59cb99",
        lightGray: "#f2f2f2",
        lightRed : "#fdefed" , 
        lightOrange : "#f26e8a" , 
        lightPink : "#fcedf6" ,
        pink: "#f05ba1" ,
      },
    },
  },
  plugins: [],
};
export default config;
