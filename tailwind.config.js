/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-bright": "#fbf9f4",
        "primary": "#173124",
        "surface-container": "#f0eee9",
        "primary-fixed": "#ccead6",
        "surface-dim": "#dbdad5",
        "inverse-on-surface": "#f2f1ec",
        "on-error-container": "#93000a",
        "surface-container-lowest": "#ffffff",
        "surface-container-high": "#eae8e3",
        "secondary": "#675d4d",
        "surface-container-low": "#f5f3ee",
        "on-background": "#1b1c19",
        "error": "#ba1a1a",
        "surface-variant": "#e4e2dd",
        "on-primary-container": "#98b5a3",
        "on-primary": "#ffffff",
        "tertiary-fixed-dim": "#ffb598",
        "surface-tint": "#496455",
        "secondary-fixed": "#f0e0cc",
        "inverse-primary": "#b0cdbb",
        "on-tertiary-container": "#e99b7b",
        "primary-fixed-dim": "#b0cdbb",
        "surface-container-highest": "#e4e2dd",
        "secondary-fixed-dim": "#d3c4b1",
        "tertiary": "#4d1d06",
        "primary-container": "#2d4739",
        "on-secondary-fixed": "#221a0e",
        "on-surface": "#1b1c19",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#693219",
        "on-secondary-fixed-variant": "#4f4537",
        "on-error": "#ffffff",
        "outline": "#727973",
        "secondary-container": "#f0e0cc",
        "inverse-surface": "#30312e",
        "outline-variant": "#c2c8c2",
        "on-surface-variant": "#424844",
        "on-primary-fixed-variant": "#324c3e",
        "on-tertiary-fixed-variant": "#6f371e",
        "on-secondary-container": "#6e6353",
        "on-primary-fixed": "#062014",
        "tertiary-fixed": "#ffdbce",
        "on-tertiary-fixed": "#370e00",
        "surface": "#fbf9f4",
        "background": "#fbf9f4",
        "on-secondary": "#ffffff",
        "error-container": "#ffdad6"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "xl": "80px",
        "container-max": "1200px",
        "base": "8px",
        "gutter": "24px",
        "sm": "12px",
        "lg": "40px",
        "md": "24px",
        "xs": "4px"
      },
      fontFamily: {
        "headline-md": ["Noto Serif", "serif"],
        "body-lg": ["Inter", "sans-serif"],
        "display-lg": ["Noto Serif", "serif"],
        "headline-sm": ["Noto Serif", "serif"],
        "headline-lg": ["Noto Serif", "serif"],
        "body-md": ["Inter", "sans-serif"],
        "headline-lg-mobile": ["Noto Serif", "serif"],
        "label-lg": ["Inter", "sans-serif"]
      },
      fontSize: {
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-sm": ["20px", { lineHeight: "1.4", fontWeight: "500" }],
        "headline-lg": ["32px", { lineHeight: "1.2", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        "headline-lg-mobile": ["28px", { lineHeight: "1.2", fontWeight: "600" }],
        "label-lg": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "600" }]
      }
    }
  }
}
