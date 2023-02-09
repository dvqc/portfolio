/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      minWidth: {
        72: "20rem",
      },
      scale: {
        102: "102%",
      },
    },
  },
  plugins: [],
};
