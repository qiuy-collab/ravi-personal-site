import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050816",
        panel: "#0b1225",
        line: "#1e293b",
        accent: "#38bdf8",
        soft: "#94a3b8"
      },
      boxShadow: {
        panel: "0 20px 60px rgba(2, 8, 23, 0.35)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
