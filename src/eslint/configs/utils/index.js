/**
 * 合并 ESLint 配置对象，支持多个配置对象，后面的配置对象会覆盖前面的配置对象
 *
 * @param {...import('eslint').ESLint.ConfigData} configs -
 *   ESLint 配置对象
 *
 * @returns {import('eslint').ESLint.ConfigData} - 合并后的
 *   ESLint 配置对象
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
