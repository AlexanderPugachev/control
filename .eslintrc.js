module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        // Common
        "semi": [1, "always"],
        "quotes": [1, "single"],
        "indent": [2, 2],
        // React
        "react/prop-types": [0],
        // JSX
        "react/jsx-sort-props": [1],
        "react/jsx-max-props-per-line": [1, { maximum: 2 }]
    }
};
