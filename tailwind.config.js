/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        234: "234px",
        268: "268px",
        338: "338px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        source: ["Source Serif Pro", "serif"],
      },
      colors: {
        primary: {
          100: "#7B7B7B",
          200: "#10B598",
          300: "#F3F3FF",
          400: "#f9f9f8",
          500: "#D9D9D9",
        },
      },
      fontSize: {
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        32: "32px",
        38: "38px",
        40: "40px",
        48: "48px",
        56: "56px",
        64: "64px",
        72: "72px",
      },
      lineHeight: {
        19: "19px",
        22: "22px",
        26: "26px",
        27: "27px",
        32: "32px",
        38: "38px",
        40: "40px",
        48: "48px",
        58: "58px",
        68: "68px",
        78: "78px",
        108: "108px",
      },
      letterSpacing: {
        19: "6px",
      },
      borderWidth: {
        1: "1px",
      },
      gap: {
        52: "52px",
      },
      height: {
        80: "calc(100vh - 95px)",
      },
      borderRadius: {
        10: "10px",
      },
      backgroundImage: {
        "hero-bg": 'url("/bg-hero.png")',
        register: 'url("/bg-register.png")',
      },
      transition: {
        fade: "all 0.2s ease",
      },
    },
  },
  plugins: [],
};
