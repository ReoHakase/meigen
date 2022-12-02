// ESLintのコンフィグファイルの探索アルゴリズムは、みつかるまで上の階層を辿っていく。
// だから、`apps/*` `packages/*`のワークスペースでこの設定をそのまま使用したい場合は、おのおのの`.eslintrc.js`を作成しなくてもよい。
// 参照: https://turbo.build/repo/docs/getting-started/create-new

module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["custom"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
