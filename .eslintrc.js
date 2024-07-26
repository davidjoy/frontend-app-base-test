const path = require('path');

const { createConfig } = require('@openedx/frontend-base/config');

module.exports = createConfig('eslint', {
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
  },
});
