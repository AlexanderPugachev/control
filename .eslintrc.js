module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    // common
    'import/prefer-default-export': [0],
    'import/extensions': [0],
    // JS
    'no-param-reassign': [
      2,
      { props: true, ignorePropertyModificationsFor: ['s'] },
    ],
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'no-plusplus': [0],
    // React
    'react/prop-types': [0],
    'react/require-default-props': [0],
    "react/jsx-sort-props": [1],
    // JSX
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': [0],
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars-experimental": "error",
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
