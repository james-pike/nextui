import { nextui } from "@nextui-org/theme";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

// Animation and Keyframes
const animations = {
  first: "moveVertical 30s ease infinite",
  second: "moveInCircle 20s reverse infinite",
  third: "moveInCircle 40s linear infinite",
  fourth: "moveHorizontal 40s ease infinite",
  fifth: "moveInCircle 20s ease infinite",
};

const keyframes = {
  moveHorizontal: {
    "0%": {
      transform: "translateX(-50%) translateY(-10%)",
    },
    "50%": {
      transform: "translateX(50%) translateY(10%)",
    },
    "100%": {
      transform: "translateX(-50%) translateY(-10%)",
    },
  },
  moveInCircle: {
    "0%": {
      transform: "rotate(0deg)",
    },
    "50%": {
      transform: "rotate(180deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
  moveVertical: {
    "0%": {
      transform: "translateY(-50%)",
    },
    "50%": {
      transform: "translateY(50%)",
    },
    "100%": {
      transform: "translateY(-50%)",
    },
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      "purple-dark": {
        extend: "dark", // <- inherit default values from dark theme

        colors: {
          background: "#0D001A",
          foreground: "#ffffff",
          primary: {
            50: "#3B096C",
            100: "#520F83",
            200: "#7318A2",
            300: "#9823C2",
            400: "#c031e2",
            500: "#DD62ED",
            600: "#F182F6",
            700: "#FCADF9",
            800: "#FDD5F9",
            900: "#FEECFE",
            DEFAULT: "#DD62ED",
            foreground: "#ffffff",
          },
          focus: "#F182F6",
        },

        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },

        animation: animations,
        keyframes: keyframes,
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), addVariablesForColors],
};

/**
 * @param {import('tailwindcss').AddBaseUtilitiesHandler} addBase
 * @param {import('tailwindcss').Theme} theme
 */
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
