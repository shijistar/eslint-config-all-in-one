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
        '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'none' }], // 禁止出现未使用过的变量
        '@typescript-eslint/consistent-type-imports': ['error'], // 确保使用一致的导入风格
        '@typescript-eslint/consistent-type-exports': [
          // 确保使用一致的导出风格
          'error',
          {
            fixMixedExportsWithInlineTypeSpecifier: false,
          },
        ],
        '@typescript-eslint/no-explicit-any': [
          'error',
          { ignoreRestArgs: true, fixToUnknown: true },
        ], // 禁止显式使用any类型
        '@typescript-eslint/no-non-null-assertion': 'off', // 关闭【禁止使用非空断言】的规则
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
        ], // 禁止在变量定义之前使用它们
        '@typescript-eslint/ban-ts-comment': [
          // 禁止通过 //@ts-*** 指令来关闭TS检查，除非提供了合理的解释原因
          'error',
          {
            'ts-nocheck': true,
            'ts-check': false,
            'ts-ignore': true,
            // 例如：//@ts-expect-error: TS1234 因为这里是一个错误示例
            'ts-expect-error': {
              descriptionFormat: '^: (因为|because\\s).+$',
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
