module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      display: ["Jolly Lodger"],
      normal: ["Encode Sans"],

    },
    extend: {
      spacing: {
        '128': '32rem',
      },
      backgroundImage: {
        background: "url('/assets/background.jpg')",
        foret: "url('/assets/foret.jpg')",
        parchemin: "url('/assets/parchemin.png')",
        piece: "url('/assets/piece.png')",
        potion: "url('/assets/potion.png')",
        xp: "url('/assets/xp.png')"
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      colors: {
        transparent: "transparent",
        "orange-1": "#fa6d16",
        "orange-2": "#243c5a",
        "bleu-1": "#5670C8",
        "bleu-2": "#a7bcff",
        "violet-1": "#F57CFF",
        "vert-1": "#82D299",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F57CFF",

          secondary: "#82D299",

          accent: "#5670C8",

          neutral: "#000000",

          "base-100": "#2A303C",

          info: "#A7BCFF",

          success: "#36D399",

          warning: "#FA6D16",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("tailwind-scrollbar"), require("daisyui")],
  variants: {
    scrollbar: ["rounded"],
  },
};
