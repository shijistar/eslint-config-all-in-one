/**
 * Merge ESLint configuration objects, support multiple
 * configuration objects, the latter configuration object
 * will override the former configuration object
 *
 * @param {...import('eslint').ESLint.ConfigData} configs -
 *   ESLint configuration objects to merge, the latter
 *   configuration object will override the former
 *   configuration object. None of the configuration objects
 *   will be modified, and a new configuration object will
 *   be returned.
 *
 * @returns {import('eslint').ESLint.ConfigData} - The
 *   merged ESLint configuration object.
 */
function mergeConfig(...configs) {
  return configs.reduce(
    (acc, config) => {
      return {
        extends: [...(acc.extends ?? []), ...(config.extends ?? [])],
        plugins: [...(acc.plugins ?? []), ...(config.plugins ?? [])],
        settings: { ...acc.settings, ...config.settings },
        rules: { ...acc.rules, ...config.rules },
        parser: config.parser ?? acc.parser,
        parserOptions: { ...acc.parserOptions, ...config.parserOptions },
        overrides: [...(acc.overrides ?? []), ...(config.overrides ?? [])],
        env: { ...acc.env, ...config.env },
      };
    },
    { extends: [], plugins: [], settings: {}, rules: {} }
  );
}

exports.mergeConfig = mergeConfig;
