import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // 浅色主题配色
        ink: "#f5f8ff", // 主背景 - 浅蓝色
        panel: "#ffffff", // 卡片背景 - 白色
        line: "rgba(139, 92, 246, 0.15)", // 边框 - 淡紫色
        accent: "#8b5cf6", // 强调色 - 紫色
        "accent-hover": "#7c3aed", // 强调色悬停
        soft: "#64748b", // 柔和文字 - 深灰
        "text-primary": "#1e293b", // 主文字 - 深色
        "text-secondary": "#475569", // 次要文字
        "text-muted": "#94a3b8", // 弱化文字
      },
      boxShadow: {
        panel: "0 4px 24px rgba(139, 92, 246, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)",
        "panel-hover": "0 8px 32px rgba(139, 92, 246, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08)",
        card: "0 2px 12px rgba(139, 92, 246, 0.06)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
        "gradient-blob": "radial-gradient(circle at 30% 20%, rgba(167, 139, 250, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(96, 165, 250, 0.1) 0%, transparent 50%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: []
};

export default config;
