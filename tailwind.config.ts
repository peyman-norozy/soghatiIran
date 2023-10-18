import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        3: "3px",
        4: "4px",
        8: "8px",
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        20: "20px",
        24: "24px",
        25: "25px",
        32: "32px",
        40: "40px",
        56: "56px",
      },
      colors: {
        primary: {
          white: "#F7F6F6",
          red: "#A60000",
          pink: "#FFDADA",
          black: "#0D0C0C",
          gary: "#5A4F57",
          shadow: "rgba(0, 0, 0, 0.75)",
          yellow: "#FBC63F",
          transparent: "rgba(247, 246, 246, 0.60)",
        },
      },
      secondary: {
        white: "#FFEEEE",
        pink: "#FFEEEE",
      },
    },
  },
  plugins: [],
} satisfies Config;
