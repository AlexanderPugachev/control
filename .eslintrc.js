module.exports = {
  'env': {
    'browser': true,
    'es2020': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 11,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
    // Common
    'semi': [1, 'always'],
    'quotes': [1, 'single'],
    'linebreak-style': [1, 'unix'], // LF
    'indent': [2, 2],
    // React
    'react/prop-types': [0],
    // JSX
    'react/jsx-filename-extension': [1, { 'extensions': ['.tsx'] }],
    'react/jsx-boolean-value': 1,
    'react/jsx-sort-props': [1],
    'react/jsx-max-props-per-line': [1, { maximum: 2 }],
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-literals': 0,
    'react/jsx-indent-props': [2, 2],
    'react/jsx-no-undef': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
  }
};
