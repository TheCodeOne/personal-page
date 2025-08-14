// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  printWidth: 500,
  proseWrap: "never",
  singleQuote: false,
  trailingComma: "es5",
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: "*.ts",
      options: {
        printWidth: 500,
        proseWrap: "never",
      },
    },
  ],
};
