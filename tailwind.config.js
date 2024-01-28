/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "deep-brown": "#241818",
        "warm-brown": "#452710",
        "light-brown": "#654321",
        "neon-red": "#FF073A",
        "gradient-start": "#FFC0CB", // pink
        "gradient-end": "#FFA500", // orange
      },
      backgroundImage: (theme) => ({
        "gradient-color":
          "linear-gradient(to right, var(--color-gradient-start), var(--color-gradient-end))",
      }),
    },
  },
  variants: {
    extend: {
      backdropFilter: ["responsive"], // or other variants you want to enable
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/forms"),
    require("tailwindcss-filters"),
  ],
};
