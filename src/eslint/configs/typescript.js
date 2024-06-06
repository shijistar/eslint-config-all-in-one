/* eslint-disable @typescript-eslint/no-var-requires */
const { mergeConfig } = require('./utils');
const base = require('./rulesets/base');
const typescript = require('./rulesets/typescript');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = mergeConfig(base, typescript);
