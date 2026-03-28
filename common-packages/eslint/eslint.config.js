const config = require("./main/index.js");
module.exports = [
  ...config,
  {
    files: ["**/*.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];
