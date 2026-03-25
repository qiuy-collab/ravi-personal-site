import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // 主色调
        bg: "var(--bg)",
        card: "var(--card)",
        line: "var(--line)",

        // 文字色
        text: {
          DEFAULT: "var(--text)",
          muted: "var(--muted)"
        },

        // 强调色
        accent: {
          DEFAULT: "var(--accent)",
          secondary: "var(--accent2)"
        }
      },

      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ],
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "Consolas",
          "Monaco",
          "monospace"
        ]
      },

      spacing: {
        // 侧边栏宽度
        "sidebar": "260px",
        "sidebar-collapsed": "72px"
      },

      maxWidth: {
        // 内容区最大宽度
        "content": "800px"
      },

      borderRadius: {
        "card": "16px",
        "badge": "6px"
      },

      boxShadow: {
        "card": "0 2px 8px rgba(30, 60, 120, 0.04)",
        "card-hover": "0 8px 24px rgba(30, 60, 120, 0.12)",
        "panel": "0 4px 16px rgba(30, 60, 120, 0.08)"
      },

      backdropBlur: {
        "card": "12px"
      },

      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "slide-in": "slideIn 0.3s ease-out",
        "hover-lift": "hoverLift 0.2s ease-out"
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideIn: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        hoverLift: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-4px)" }
        }
      },

      transitionDuration: {
        "250": "250ms"
      }
    }
  },
  plugins: []
};

export default config;
