module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  ignorePatterns: [
    'android',
    'ios',
    '__tests__',
    'node_modules',
    'app.json',
    'package.json',
    '.eslintrc.js',
    'tsconfig.json',
  ],
  rules: {
    'react/display-name': 'off',
    'comma-dangle': 'off',
  },
};
