const { existsSync } = require('fs');
const { join } = require('path');

try {
  require('@rushstack/eslint-patch/modern-module-resolution');
} catch {
  /* silent failure */
}

let tsConfigFiles = [
  './tsconfig.eslint.json',
  './tsconfig.json',
  join(__dirname, 'tsconfig.eslint.json'),
];
tsConfigFiles = tsConfigFiles
  .filter((tsConfigFile) => (existsSync(tsConfigFile) ? tsConfigFile : false))
  .filter(Boolean);

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: ['plugin:import/typescript'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.d.ts', '**/*.mts', '**/*.cts'],
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/strict',
        'plugin:@typescript-eslint/stylistic',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: tsConfigFiles[0],
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },

      rules: {
        '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'none' }], // Disallow unused variables
        '@typescript-eslint/consistent-type-imports': ['error'], // Enforce consistent imports
        '@typescript-eslint/consistent-type-exports': [
          // Enforce consistent exports
          'error',
          {
            fixMixedExportsWithInlineTypeSpecifier: false,
          },
        ],
        '@typescript-eslint/no-explicit-any': [
          'error',
          { ignoreRestArgs: true, fixToUnknown: true },
        ], // Disallow usage of the any type
        '@typescript-eslint/no-non-null-assertion': 'off', // Disallow non-null assertion
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            functions: false,
            classes: true,
            variables: true,
            allowNamedExports: false,
            enums: true,
            typedefs: false,
            // ignoreTypeReferences: true,
          },
        ], // Disallow using variables before they are defined
        '@typescript-eslint/ban-ts-comment': [
          // Bans `@ts-***` comments from being used or requires descriptions after directive
          'error',
          {
            'ts-nocheck': true,
            'ts-check': false,
            'ts-ignore': true,
            // For example: //@ts-expect-error: TS1234 because this is an error example
            'ts-expect-error': {
              descriptionFormat: '^:\\s(因为|because( of)?|since).+$',
            },
            minimumDescriptionLength: 4,
          },
        ],
      },
    },
  ],
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.mts', '.cts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      [require.resolve('eslint-import-resolver-node')]: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      [require.resolve('eslint-import-resolver-typescript')]: {
        alwaysTryTypes: true,
      },
    },
  },
};
