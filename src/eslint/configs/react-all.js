/* eslint-disable @typescript-eslint/no-var-requires */
const { mergeConfig } = require('./utils');
const react = require('./react-recommended');
const others = require('./rulesets/others');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = mergeConfig(react, others);
