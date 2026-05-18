import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#f5f5f5",
        muted: "#a1a1aa",
        border: "rgba(255,255,255,0.12)",
        panel: "rgba(255,255,255,0.04)",
        accent: "#f4efe7"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        serif: ["var(--font-cormorant)", "serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 28%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.06), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.04), transparent)"
      }
    }
  },
  plugins: []
};

export default config;
