module.exports = {
  extends: ["./base.eslintrc.cjs", "airbnb", "airbnb-typescript", "airbnb/hooks", "prettier"],
  rules: {
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": "warn",
    "no-restricted-syntax": "off",
    "no-plusplus": "off",
    "guard-for-in": "off",
    "no-continue": "off",
  },
};
