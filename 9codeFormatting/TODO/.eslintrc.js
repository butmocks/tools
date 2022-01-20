module.exports = {
  extends: 'eslint-config-airbnb-base',
  rules: {
    'no-console': 2,
    'import/prefer-default-export': off,
  },
  env: {
    browser: true,
  },
};
