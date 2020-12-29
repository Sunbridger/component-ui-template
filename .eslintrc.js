module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@souche-f2e/eslint-config-frontend',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'template-curly-spacing' : 'off',
        'indent': [
            'error',
            4,
            {
                'ignoredNodes': [
                    'TemplateLiteral'
                ],
                'SwitchCase': 1
            }
        ]
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    plugins: [
        "markdown"
    ]
}
