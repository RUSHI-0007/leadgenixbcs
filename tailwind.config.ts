import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#3F3F3F",
          deep: "#2E2E2E",
          soft: "#5A5A5A",
          muted: "#787878",
        },
        tomato: {
          DEFAULT: "#FE5E56",
          hover: "#F04A42",
          ink: "#CF362D",
          tint: "#FFE6E3",
        },
        paper: {
          DEFAULT: "#F6F2EC",
          deep: "#ECE6DC",
        },
        card: "#FFFFFF",
        line: {
          DEFAULT: "#DDD6CA",
          dark: "#575757",
        },
        error: "#B3261E",
      },
      fontFamily: {
        sans: ["var(--font-hanken)", "sans-serif"],
        heading: ["var(--font-hanken)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        tomatoCta: "0 10px 24px -10px rgba(254, 94, 86, 0.55)",
        card: "0 12px 32px -14px rgba(63, 63, 63, 0.20)",
        cardDark: "0 16px 36px -12px rgba(0, 0, 0, 0.45)",
        window: "0 18px 40px -18px rgba(63, 63, 63, 0.35)",
        windowDark: "0 24px 48px -20px rgba(0, 0, 0, 0.50)",
      },
      borderRadius: {
        button: "10px",
        card: "16px",
        window: "18px",
      },
    },
  },
  plugins: [],
};
export default config;
