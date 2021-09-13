module.exports = {
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  env: {
    jest: true,
    'react-native/react-native': true,
  },
  plugins: ['simple-import-sort', 'jest'],
  ignorePatterns: ['**/lib/*', '**/coverage/*'],
  root: true,
  rules: {
    'import/order': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-imports': 'off',
    'no-duplicate-imports': 'error',
  },
}
