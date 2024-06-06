'use strict';

/* eslint-disable @typescript-eslint/no-var-requires */
const base = require('./src/eslint/configs/base');
const typescript = require('./src/eslint/configs/typescript');
const recommended = require('./src/eslint/configs/recommended');
const react = require('./src/eslint/configs/react');
const reactAll = require('./src/eslint/configs/react-all');
const vue = require('./src/eslint/configs/vue');
const vueTypescript = require('./src/eslint/configs/vue-typescript');
const vueAll = require('./src/eslint/configs/vue-all');
const next = require('./src/eslint/configs/next');
const nextAll = require('./src/eslint/configs/next-all');
const prettier = require('./src/eslint/configs/prettier');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = {
  configs: {
    base,
    typescript,
    recommended,
    react,
    'react-all': reactAll,
    vue,
    'vue-typescript': vueTypescript,
    'vue-all': vueAll,
    next,
    'next-all': nextAll,
    prettier,
  },
};
