/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#f1f1f1",
          200: "#10B598",
          300: "#F3F3FF",
          400: "#f9f9f8",
        },
      },
      fontSize: {
        "5xl": "65px",
      },
      lineHeight: {
        20: "80px",
      },
      height: {
        80: "calc(100vh - 95px)",
      },
      backgroundImage: {
        "hero-bg":
          'url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
      },
    },
  },
  plugins: [],
};
