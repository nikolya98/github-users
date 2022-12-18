module.exports = {
  root: true,
  extends: ['eslint:recommended', 'prettier'],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['public/*'],
  rules: {
    'no-console': 'error',
  },
  overrides: [
    {
      files: '*.{ts,tsx}',
      plugins: ['react'],
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'prettier'],
      env: {
        node: false,
        browser: true,
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ],
};
