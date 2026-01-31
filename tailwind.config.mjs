import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        dark: {
          base: "rgb(14, 26, 53)",    // main page background
          surface: "rgb(23, 38, 73)", // header / footer / cards
        },
      },
    },
  },
  plugins: [typography],
};
