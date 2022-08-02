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
      padding: {
        DEFAULT: "1rem",
      },
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: ["1rem", "24px"],
      lg: ["18px", "27px"],
      xl: ["20px", "30px"],
      "2xl": ["24px", "36px"],
      "3xl": ["32px", "48px"],
      "4xl": ["36px", "54px"],
      "5xl": ["48px", "72px"],
      "6xl": ["64px", "96px"],
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
