/* eslint-disable @typescript-eslint/no-var-requires */
const { mergeConfig } = require('./utils');
const next = require('./rulesets/next');
const reactQuery = require('./rulesets/react-query');
const prettier = require('./rulesets/prettier');
const recommendedBase = require('./rulesets/recommended-base');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = mergeConfig(recommendedBase, next, reactQuery, prettier);
