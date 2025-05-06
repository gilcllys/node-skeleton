import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.node },
    rules: {
      "prettier/prettier": "error",
      "no-param-reassign": "off",
      camelcase: "off",
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
    },
  },
  pluginJs.configs.recommended,
  pluginJs.configs.recommendedWithTypescript,
  pluginJs.configs.recommendedWithTypescriptESLint,
  pluginJs.configs.recommendedWithTypescriptESLintTypeChecking,
];
