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
          DEFAULT: "#16231D",
          soft: "#4A5851",
          muted: "#718077",
        },
        green: {
          DEFAULT: "#1E9E62",
          tint: "#E6F6EE",
          dark: "#16804F",
        },
        indigo: {
          DEFAULT: "#4B55D8",
          tint: "#EEF0FF",
          dark: "#3B44B5",
        },
        highlight: "#FFE770",
        paper: "#FFFFFF",
        mist: "#F6F7FC",
        mint: "#F4FAF7",
        line: "#E4E7EF",
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
        green: "0 10px 24px -8px rgba(30, 158, 98, 0.45)",
        indigo: "0 10px 24px -8px rgba(75, 85, 216, 0.45)",
        card: "0 12px 32px -14px rgba(75, 85, 216, 0.22)",
        cardGreen: "0 12px 32px -14px rgba(30, 158, 98, 0.20)",
        window: "0 20px 48px -12px rgba(22, 35, 29, 0.12), 0 1px 3px rgba(22, 35, 29, 0.05)",
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

