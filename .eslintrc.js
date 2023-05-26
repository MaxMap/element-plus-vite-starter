module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended",
    ],
    "overrides": [
    ],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "parser": "@typescript-eslint/parser"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "no-unused-vars": "off",//未使用的变量
        "@typescript-eslint/no-unused-vars": ["off"],//未使用的变量
        "@typescript-eslint/no-explicit-any": ["off"],
        'prefer-const': 'off',
        "vue/multi-word-component-names": "off"//禁用组件名检查
    }
}
