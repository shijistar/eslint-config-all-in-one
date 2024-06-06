/* eslint-disable @typescript-eslint/no-var-requires */
const { mergeConfig } = require('./utils');
const base = require('./rulesets/base');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = mergeConfig(base);
