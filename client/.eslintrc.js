module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': 0,
    'no-unused-vars': 0,
    'no-console': 0,
    'func-names': 0,
    'no-process-exit': 0,
    'object-shorthand': 0,
    'class-methods-use-this': 0
  }
};
