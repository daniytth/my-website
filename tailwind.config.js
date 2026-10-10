/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        bgAlt: "var(--bg-alt)",
        surface: "var(--surface)",
        surface2: "var(--surface-2)",
        line: "var(--line)",

        crimson: "var(--crimson)",
        crimsonDeep: "var(--crimson-deep)",
        crimsonBright: "var(--crimson-bright)",

        gold: "var(--gold)",
        goldDim: "var(--gold-dim)",

        flame: "var(--flame)",

        text: "var(--text)",
        textMuted: "var(--text-muted)",
        textDim: "var(--text-dim)",
      },

      borderRadius: {
        main: "var(--radius)",
      },
    }

  },
  plugins: [],
};
