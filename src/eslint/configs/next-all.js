/* eslint-disable @typescript-eslint/no-var-requires */
const { mergeConfig } = require('./utils');
const next = require('./next-recommended');
const others = require('./rulesets/others');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = mergeConfig(next, others);
