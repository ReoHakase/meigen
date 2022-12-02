// このパッケージ`eslint-config-custom`を`custom`としてインポートする、`.eslintrc.js`に継承されるESLintの設定

module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
};
