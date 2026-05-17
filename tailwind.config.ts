import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sangue: "#B30000",
        sangueDark: "#7A0000",
        brasa: "#FF1F1F",
        carvao: "#0A0A0A",
        fumaca: "#1A1A1A",
        dourado: "#F5C518",
        ouro: "#FFD700",
      },
      fontFamily: {
        display: ["var(--font-anton)", "Impact", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-strong": "pulseStrong 1.4s ease-in-out infinite",
        "shake": "shake 0.5s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out",
        "blink": "blink 1s step-start infinite",
      },
      keyframes: {
        pulseStrong: {
          "0%, 100%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(255,31,31,0.7)" },
          "50%": { transform: "scale(1.03)", boxShadow: "0 0 0 18px rgba(255,31,31,0)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-2px)" },
          "75%": { transform: "translateX(2px)" },
        },
        glow: {
          "0%, 100%": { textShadow: "0 0 10px rgba(255,31,31,0.6)" },
          "50%": { textShadow: "0 0 25px rgba(255,31,31,1), 0 0 40px rgba(255,31,31,0.5)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
