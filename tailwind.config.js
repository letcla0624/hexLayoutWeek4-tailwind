module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1296px",
      "2xl": "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.75rem",
      },
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.6875rem"],
      xl: ["1.25rem", "1.875rem"],
      "2xl": ["1.5rem", "2.25rem"],
      "3xl": ["2rem", "3rem"],
      "4xl": ["2.25rem", "3.375rem"],
      "5xl": ["3rem", "4.5rem"],
      "6xl": ["4rem", "6rem"],
      "7xl": "5rem",
    },
    extend: {
      colors: {
        red: {
          light: "#FBF2F2",
          DEFAULT: "#AA0601",
          dark: "#650300",
        },
        brown: {
          light: "#B75929",
          DEFAULT: "#5F3E2D",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("@tailwindcss/typography"),
  ],
};
