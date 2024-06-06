/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/no-array-index-key': ['error'], // 禁止在数组中遍历中使用数组key做索引
    'react-hooks/exhaustive-deps': ['error'], // 检查 effect 的依赖
  },
};
