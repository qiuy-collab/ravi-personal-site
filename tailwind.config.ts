import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // 浅色主题配色 - 参考 zhimin-z.github.io
        bg: "#f5f8ff",
        card: "rgba(255, 255, 255, 0.92)",
        line: "rgba(78, 110, 199, 0.22)",
        text: "#1c2746",
        muted: "#5f6f97",
        accent: "#5f8cff",
        accent2: "#8c6bff",
        ink: "#f5f8ff",
        panel: "rgba(255, 255, 255, 0.92)",
        soft: "#5f6f97"
      },
      boxShadow: {
        card: "0 10px 24px rgba(52, 79, 154, 0.08)",
        hover: "0 12px 24px rgba(68, 94, 164, 0.14)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(78, 110, 199, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(78, 110, 199, 0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
