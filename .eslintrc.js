module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier', // esling-config-prettier
    'prettier/react'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'simple-import-sort', 'jest', 'prettier'],
  rules: {
    'no-debugger': 'off',
    'no-console': 0,
    'no-param-reassign': 'off'
  }
};
