/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./index.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        week: "repeat(7, min-content)",
        "month-grid-1": "repeat(1, min-content)",
        "month-grid-2": "repeat(2, min-content)",
        "month-grid-3": "repeat(3, min-content)",
        "month-grid-4": "repeat(4, min-content)",
      },
    },
  },
  plugins: [],
};
