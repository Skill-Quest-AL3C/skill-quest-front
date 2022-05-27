module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      display: ["Jolly Lodger"],
      title_section: ["VT323"],
    },
    extend: {
      gridTemplateRows: {
        'layout' : 'auto 1fr auto'
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
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
