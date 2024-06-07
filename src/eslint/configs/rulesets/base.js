/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: ['eslint:recommended', 'plugin:import/recommended'],
  plugins: ['import'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      babelrc: false,
      configFile: false,
      browserslistConfigFile: false,
      caller: {
        supportsTopLevelAwait: true,
      },
    },
  },
  env: {
    browser: true,
    node: true,
    es2022: true,
    jest: true,
  },
};
