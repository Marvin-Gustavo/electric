/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          white: "#FFFFFF",
          bg: "#F5F5F7",
          subtle: "#FAFAFC",
          card: "rgba(255, 255, 255, 0.85)",
          dark: "#1D1D1F",
          secondary: "#86868B",
          border: "rgba(0, 0, 0, 0.08)",
          blue: "#0071E3",
          blueHover: "#0077ED",
          darkCard: "#121214",
        },
        azari: {
          primary: "#0066CC",
          navy: "#0A2540",
          gold: "#D97706",
          badgeBg: "#EFF6FF",
          badgeBorder: "#BFDBFE",
          accent: "#2563EB",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "San Francisco",
          "SF Pro Text",
          "SF Pro Display",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      boxShadow: {
        'apple-sm': '0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.03)',
        'apple-md': '0 12px 32px -4px rgba(0, 0, 0, 0.06), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        'apple-lg': '0 24px 48px -12px rgba(0, 0, 0, 0.09), 0 8px 24px -4px rgba(0, 0, 0, 0.04)',
        'apple-glow': '0 0 25px rgba(0, 113, 227, 0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
};

