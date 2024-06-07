# @tiny-codes/eslint-config

todo: 添加umi的配置
todo: 添加stylelint的配置

Provides most common `ESLint`, `Prettier`, `Stylelint` configurations, and a guide to set up `Husky` and `Commitlint` for a project. It is recommended to use this configuration for all projects to maintain a consistent code style.

It's assumed that your project is enabled with typescript by default, if not, you can build your own configuration by combining some presets. For example, `['@tiny-codes/recommended', '@tiny-codes/typescript', @tiny-codes/prettier]`, please node that `@tiny-codes/prettier` should be the last one.

## Installation

```bash
npm install -D @tiny-codes/eslint-config
```

## Usage

### Eslint configuration

Create a `.eslintrc.js` file in the project root directory with the following configuration:

_.eslintrc.js_

```js
module.exports = {
  extends: ['@tiny-codes/recommended'],
};
```

### Recommended configuration

- For `React` projects, it is recommended to use the `@tiny-codes/react-recommended` or `@tiny-codes/react-all` preset
- For `Vue` projects, it is recommended to use the `@tiny-codes/vue-recommended`, `@tiny-codes/vue-typescript` or `@tiny-codes/vue-all` preset
- For `Next.js` projects, it is recommended to use the `@tiny-codes/next-recommended` or `@tiny-codes/next-all` preset
- Here are some basic presets that you can also combine the presets to create your own configuration, please note again that `@tiny-codes/prettier` should be the last one
  - `@tiny-codes/base`: base configuration
  - `@tiny-codes/recommended`: recommended configuration
  - `@tiny-codes/typescript`: typescript configuration
  - `@tiny-codes/prettier`: prettier configuration

### Prettier configuration

Create a `.prettierrc.js` file in the project root directory with the following configuration:

_.prettierrc.js_

```js
module.exports = require('@tiny-codes/eslint-config/src/prettier/config.json');
```

### Husky configuration

Initialize the `husky` configuration:

```bash
npx husky init
```

Add `husky` related configuration in `package.json`:

```diff
"scripts": {
+  "prepare": "husky"
},
+"lint-staged": {
+  "*.{js,jsx,ts,tsx,vue}": "eslint --fix",
+  "*.{css,less,scss}": "stylelint --fix",
+  "*.{js,jsx,ts,tsx,vue,md,json,css,less,scss}": "prettier --write"
+},
```

Add the following two files to the `.husky` directory:

_.husky/pre-commit_

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "\x1B[35m Performing code linting and formatting. \x1B[39m"
echo "\x1B[35m It may take some time, please be patient... \x1B[39m"

npx --no-install lint-staged

sleep 0.3
echo "\033[32m Lint completed! \033[0m"
echo

sleep 1
```

_.husky/commit-msg_

```bash
#!/usr/bin/env sh

. "$(dirname "$0")/_/husky.sh"

echo "\x1B[35m Checking commit messages... \x1B[39m"
sleep 0.5

npx commitlint --edit $1
```

### Commitlint configuration

Create a `.commitlintrc.js` file in the project root directory with the following configuration:

_.commitlintrc.js_

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'conventional-changelog-angular',
};
```
