/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: ['eslint:recommended', 'plugin:import/recommended'],
  plugins: ['import'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    sourceType: 'module',
    allowImportExportEverywhere: true,
    babelOptions: {
      caller: {
        supportsTopLevelAwait: true,
      },
    },
  },
  env: {
    browser: true,
    node: true,
  },
};
