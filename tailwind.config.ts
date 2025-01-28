import type { Config } from "tailwindcss";

const config: Config = {
  important: true, // Add `!important` to all utilities

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
        lightGreen: "var(--light-green)",
        lightGreenLowOpacity: "var(--light-green-light)",
        mainWhite: "var(--main-white)",
        mainGray: "var(--main-gray)",
        lightGreenXs: "var(--light-green-xs)",
        lightGreenXXs: "var(--light-green-xxs)",
        lightGreenXXXs: "var(--light-green-xxxs)",
        lightTextGray: "var(--light-text-gray)",
        highGreen: "var(--high-green)",
        lightGray: "var(--light-gray)",
        lightRed: "var(--light-red)",
        lightOrange: "var(--light-orange)",
        lightPink: "var(--light-pink)",
        pink: "var(--pink)",
        gold: "var(--gold)",
        lightGreenXXXXs: "var(--light-green-xxxxs)",
        grayXlight: "var(--gray-xlight)",
        mainRed: "var(--main-red)",
        lightXRed: "var(--light-xred)",
        DarkGray: "var(--light-dark-gray)",
        whiteSmoke: "var(--white-smoke)",
      },
    },
  },
  plugins: [],
};

export default config;
