/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#3075FF", //primary color
          secondary: "#D2E3FF", //secondary color
          accent: "#888888", // inactive icon or text color
          neutral: "#adb5bd", // inactive icon background or secondary text color
          warning: "#FE9431", // badge color
          "base-100": "#FBFCFE", // body color
          "base-200": "#ffffff", // white color
          "base-900": "#212529", // dark text
        },
        dark: {
          accent: "#dddddd", // inactive icon or text color
          // neutral: "#1A2236", // inactive icon background or secondary text color
          "base-100": "#1A2236", // body color
          "base-200": "#293145", // white color
          "base-900": "#ffffff", // light text
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
