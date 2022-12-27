/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#3075FF",
          secondary: "#D2E3FF",
          accent: "#ADB5BD",
          neutral: "#F5F5F5",
          warning: "#FE9431",
          "base-100": "#FBFCFE",
          "base-200": "#ffffff",
          "base-900": "#212529",
        },
        dark: {
          neutral: "#1A2236",
          "base-100": "#1A2236",
          "base-200": "#293145",
          "base-900": "#DCDDE0",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
