/* eslint-disable @typescript-eslint/no-var-requires */
const typescript = require('./typescript');
/* eslint-enable @typescript-eslint/no-var-requires */

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: ['plugin:vue/vue3-recommended'],
  parserOptions: {
    ...typescript.overrides[0].parserOptions,
    parser: '@typescript-eslint/parser',
  },
};
