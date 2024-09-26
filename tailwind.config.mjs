/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      surreal: ["Surreal", "sans-serif"],
    },
    fontSize: {
      hero: "16vw",
    },
    colors: {
      primary: {
        peach: "#FFBFC3",
        blue: "#4CFFF4",
        white: "#FFFFFF",
        purple: "#5B16FF",
      },
    },
    extend: {
      backgroundImage: {
        hero: "url('/images/backgrounds/rose-bowen-blue.png')",
      },

      transitionDuration: {
        primary: "750ms",
        secondary: "1000ms",
      },
      transitionTimingFunction: {
        primary: "cubic-bezier(.16,1,.3,1)",
      },
    },
  },
  plugins: [],
};
