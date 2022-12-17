module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    },
    parser: '@babel/eslint-parser',
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
    'class-methods-use-this': 0,
    'vue/multi-word-component-names': 'off',
    "vue/no-mutating-props":'off',
    "vue/no-reserved-component-name":'off',
    "no-dupe-else-if":'off'
  }
};
