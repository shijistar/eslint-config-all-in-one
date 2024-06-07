'use strict';

/* eslint-disable @typescript-eslint/no-var-requires */
const base = require('./src/eslint/configs/base');
const typescript = require('./src/eslint/configs/typescript');
const recommended = require('./src/eslint/configs/recommended');
const reactRecommended = require('./src/eslint/configs/react-recommended');
const reactAll = require('./src/eslint/configs/react-all');
const vueRecommended = require('./src/eslint/configs/vue-recommended');
const vueTypescript = require('./src/eslint/configs/vue-typescript');
const vueAll = require('./src/eslint/configs/vue-all');
const nextRecommended = require('./src/eslint/configs/next-recommended');
const nextAll = require('./src/eslint/configs/next-all');
const prettier = require('./src/eslint/configs/prettier');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = {
  configs: {
    base,
    typescript,
    recommended,
    'react-recommended': reactRecommended,
    'react-all': reactAll,
    'vue-recommended': vueRecommended,
    'vue-typescript': vueTypescript,
    'vue-all': vueAll,
    'next-recommended': nextRecommended,
    'next-all': nextAll,
    prettier,
  },
};
