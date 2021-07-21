const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Slab", ...fontFamily.sans],
        typography: (theme) => ({
          DEFAULT: {
            css: {
              color: theme("colors.gray.700"),
              a: {
                color: theme("colors.blue.500"),
                "&:hover": {
                  color: theme("colors.blue.700"),
                },
              },
              "blockquote p:first-of-type::before": false,
              "blockquote p:last-of-type::after": false,
            },
          },
        }),
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
