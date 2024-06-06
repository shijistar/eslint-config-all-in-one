/* eslint-disable @typescript-eslint/no-var-requires */
const { mergeConfig } = require('./utils');
const vueTS = require('./vue-typescript');
const others = require('./rulesets/others');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = mergeConfig(vueTS, others);
