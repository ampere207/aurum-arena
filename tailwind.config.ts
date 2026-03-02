import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          beige: "#C4B5B0",
          burgundy: "#72383D",
          gold: "#D4AF37",
          ivory: "#F7F3F1",
          soft: "#EFE7E4"
        }
      },
      boxShadow: {
        premium: "0 12px 30px rgba(114, 56, 61, 0.15)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
