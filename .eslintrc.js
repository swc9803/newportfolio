/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");
module.exports = {
    root: true,
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-prettier",
    ],
    parserOptions: {
        sourceType: "module",
    },
    rules: {
        "prettier/prettier": ["error", { tabWidth: 4 }],
        "vue/multi-word-component-names": 0,
    },
};
