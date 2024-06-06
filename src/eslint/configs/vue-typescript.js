/* eslint-disable @typescript-eslint/no-var-requires */
const { mergeConfig } = require('./utils');
const vueTS = require('./rulesets/vue-ts');
const prettier = require('./rulesets/prettier');
const recommendedBase = require('./rulesets/recommended-base');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = mergeConfig(recommendedBase, vueTS, prettier);
