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
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "guard-for-in": "off",
    "react-hooks/exhaustive-deps": "warn",
    "no-continue": "off",
  },
};
