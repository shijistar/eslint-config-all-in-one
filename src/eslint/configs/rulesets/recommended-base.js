/* eslint-disable @typescript-eslint/no-var-requires */
const { mergeConfig } = require('../utils');
const baseTypescript = require('../typescript');
const eslintComments = require('./eslint-comments');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = mergeConfig(baseTypescript, eslintComments);
