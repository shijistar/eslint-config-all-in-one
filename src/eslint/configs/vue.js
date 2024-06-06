/* eslint-disable @typescript-eslint/no-var-requires */
const { mergeConfig } = require('./utils');
const vue = require('./rulesets/vue');
const prettier = require('./rulesets/prettier');
const recommendedBase = require('./rulesets/recommended-base');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = mergeConfig(recommendedBase, vue, prettier);
