/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      primary: {
        peach: "#FFBFC3",
        purple: "#5B16FF",
      },
    },
    extend: {
      transitionTimingFunction: {
        primary: "cubic-bezier(.16,1,.3,1)",
      },
			transitionDuration: {
				primary: '750ms'
			}
    },
  },
  plugins: [],
};
