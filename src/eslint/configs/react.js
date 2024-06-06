/* eslint-disable @typescript-eslint/no-var-requires */
const { mergeConfig } = require('./utils');
const react = require('./rulesets/react');
const reactQuery = require('./rulesets/react-query');
const prettier = require('./rulesets/prettier');
const recommendedBase = require('./rulesets/recommended-base');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = mergeConfig(recommendedBase, react, reactQuery, prettier);
