/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        myShadow1: "4.1px -5px 0 0  rgb(241 245 249)",
        myShadow2: "-4.1px -5px 0 0  rgb(241 245 249)",
      },

      colors: {
        "custom-1": "#060047",
        "custom-2": "#c32c7f",
        "custom-3": "#E90064",
        "custom-4": "#FF5F9E",
        "custom-5": "#c32c7f",
        "custom-6": "#ffad1c",

        cus1: "#FF78C4",
        cus2: "#E1AEFF",
        cus3: "#FFBDF7",
        cus4: "#FFECEC",
      },
      fontFamily: {
        inter: ["Vazir", "sans-serif"],
      },
    },
  },
  plugins: [],
};
