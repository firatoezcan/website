module.exports = {
  purge: false,
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        black: {
          100: "#2E2E38",
          200: "#272730",
          300: "#202027",
          400: "#19191F",
          500: "#121216",
          600: "#0E0E11",
          700: "#09090B",
          800: "#050506",
          900: "#000000",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.green.500"),
              textDecoration: "none",
              "&:hover": {
                color: theme("colors.green.500"),
              },
            },

            h1: {
              color: theme("colors.gray.300"),
            },
            h2: {
              color: theme("colors.gray.300"),
            },
            h3: {
              color: theme("colors.gray.300"),
            },
            h4: {
              color: theme("colors.gray.300"),
            },
            h5: {
              color: theme("colors.gray.300"),
            },
            h6: {
              color: theme("colors.gray.300"),
            },

            strong: {
              color: theme("colors.gray.300"),
            },

            code: {
              color: theme("colors.gray.300"),
            },

            figcaption: {
              color: theme("colors.gray.500"),
            },
          },
        },
      }),
    },
  },
  variants: {},
  corePlugins: {},
  plugins: [require("@tailwindcss/typography")],
};
