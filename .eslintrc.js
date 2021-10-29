module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
  ],
  plugins: [
    'vue',
  ],
  settings: {
    'import/resolver': {
      nuxt: {
        extensions: ['.js', '.vue'],
      },
    },
  },
  // add your custom rules here
  rules: {
    'vue/order-in-components': 0,
    'no-param-reassign': 0,
    'object-curly-newline': 0,
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-restricted-syntax': [0, 'ForOfStatement'],
    'vue/component-tags-order': 0,
    'max-len': 0,
  },
};
