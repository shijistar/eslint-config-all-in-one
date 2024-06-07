# @tiny-codes/eslint-config-all-in-one

todo: 添加umi的配置
todo: 添加stylelint的配置，拆分成scss和css两个配置

Provides most common `ESLint`, `Prettier`, `Stylelint` configurations, and a guide to set up `Husky` and `Commitlint` for a project. It is recommended to use this configuration for all projects to maintain a consistent code style.

It's assumed that your project is enabled with typescript by default, if not, you can build your own configuration by combining some presets. For example, `['@tiny-codes/recommended', '@tiny-codes/typescript', @tiny-codes/prettier]`, please node that `@tiny-codes/prettier` should be the last one.

## Installation

```bash
npm install -D @tiny-codes/eslint-config-all-in-one
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

#### Presets

- For `React` projects, it is recommended to use the `@tiny-codes/react-recommended` or `@tiny-codes/react-all` preset
- For `Vue` projects, it is recommended to use the `@tiny-codes/vue-recommended`, `@tiny-codes/vue-typescript` or `@tiny-codes/vue-all` preset
- For `Next.js` projects, it is recommended to use the `@tiny-codes/next-recommended` or `@tiny-codes/next-all` preset
- Here are some basic presets that you can also combine the presets to create your own configuration, please note again that `@tiny-codes/prettier` should be the last one
  - `@tiny-codes/base`: base configuration
  - `@tiny-codes/recommended`: recommended configuration
  - `@tiny-codes/typescript`: typescript configuration
  - `@tiny-codes/prettier`: prettier configuration

### Stylelint configuration

Create a `.stylelintrc.js` file in the project root directory.

_.stylelintrc.js_

```js
module.exports = require('@tiny-codes/eslint-config-all-in-one/src/stylelint/config');
```

If you are using `SCSS`, you should use another configuration.

_.stylelintrc.js_

```js
module.exports = require('@tiny-codes/eslint-config-all-in-one/src/stylelint/config/scss');
```

Note that `stylelint-scss` is shipped as optionalDependencies, so if you are NOT using `SCSS`, and want to strip it from your node_modules, please go back to [Installallation](#installation) and add `--no-optional` to the command.

```bash
npm install -D @tiny-codes/eslint-config-all-in-one --no-optional
```

### Prettier configuration

Create a `.prettierrc.js` file in the project root directory.

_.prettierrc.js_

```js
module.exports = require('@tiny-codes/eslint-config-all-in-one/src/prettier/config');
```

### Husky configuration

Initialize the `husky`:

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
. "node_modules/@tiny-codes/eslint-config-all-in-one/src/husky/hooks/pre-commit.sh"
```

_.husky/commit-msg_

```bash
#!/usr/bin/env sh
. "node_modules/@tiny-codes/eslint-config-all-in-one/src/husky/hooks/commit-msg.sh"
```

### Commitlint configuration

Create a `.commitlintrc.js` file in the project root directory with the following configuration:

_.commitlintrc.js_

```js
const config = require('@tiny-codes/eslint-config-all-in-one/src/commitlint/config');
module.exports = config;
```
