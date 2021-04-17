module.exports = {
  plugins: ["@typescript-eslint", "prettier"],
  extends: ["plugin:@typescript-eslint/recommended", "airbnb-base", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-undef": "off",
  },
  ignorePatterns: [
    "node_modules",
    "dist",
    "*.config.js",
    "*.config.cjs",
    "setup.js",
  ],
};
