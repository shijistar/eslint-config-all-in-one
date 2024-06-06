/* eslint-disable @typescript-eslint/no-var-requires */
const { mergeConfig } = require('./utils');
const recommendedBase = require('./rulesets/recommended-base');
const typescript = require('./rulesets/typescript');
const prettier = require('./rulesets/prettier');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = mergeConfig(recommendedBase, typescript, prettier);
