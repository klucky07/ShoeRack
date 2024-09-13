const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: { fontFamily: {
      sans: ['SUSE', 'sans-serif'], // Make SUSE the default sans-serif font
    }, 
      animation: {
      text: 'text 5s ease infinite',
    },
    keyframes: {
      text: {
        '0%, 100%': {
          'background-size': '200% 200%',
          'background-position': 'left center',
        },
        '50%': {
          'background-size': '200% 200%',
          'background-position': 'right center',
        },
      },
    },},
  },
  plugins: [addVariablesForColors,
    function({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-dot-thick": function(value) {
            return {
              backgroundImage: `url("${svgToDataUri(
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="' +
                  value +
                  '" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>'
              )}")`,
            };
          },
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
    
  ],
  
};


function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}