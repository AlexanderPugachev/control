module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
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
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    // React
    'react/prop-types': [0],
    // JSX
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': [0],
    // 'react/jsx-boolean-value': 1,
    // 'react/jsx-sort-props': [1],
    // 'react/jsx-max-props-per-line': [1, { maximum: 2 }],
    // 'react/jsx-no-duplicate-props': 1,
    // 'react/jsx-no-literals': 0,
    // 'react/jsx-indent-props': [2, 2],
    // 'react/jsx-no-undef': 1,
    // 'react/jsx-uses-react': 1,
    // 'react/jsx-uses-vars': 1
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
