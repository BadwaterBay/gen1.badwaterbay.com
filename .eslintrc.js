module.exports = {
  env: {
    browser: true,
    es2020: true,
    jquery: true,
  },
  extends: ['google', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'new-cap': 'warn',
    'prettier/prettier': 'error',
    'require-jsdoc': 'off',
  },
  plugins: ['prettier', 'html', 'jquery'],
};
