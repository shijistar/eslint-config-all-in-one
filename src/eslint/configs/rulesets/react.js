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
    'react/no-array-index-key': ['error'], // Prevent using array index in keys
    'react-hooks/exhaustive-deps': ['error'], // Checks effect dependencies
  },
};
