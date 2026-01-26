import type { ConfigWithExtendsArray } from '@eslint/config-helpers';

export const stylisticRules: ConfigWithExtendsArray = [
    {
        name: 'robo-manager/rules/stylistic',
        rules: {
            '@stylistic/array-bracket-newline': [
                'error',
                'consistent'
            ],
            '@stylistic/array-element-newline': [
                'error',
                {
                    ArrayExpression: 'always',
                    ArrayPattern: 'never'
                }
            ],
            '@stylistic/arrow-parens': [
                'error',
                'as-needed'
            ],
            '@stylistic/brace-style': [
                'error',
                '1tbs'
            ],
            '@stylistic/comma-dangle': [
                'error',
                'never'
            ],
            '@stylistic/dot-location': [
                'error',
                'property'
            ],
            '@stylistic/generator-star-spacing': [
                'error',
                'after'
            ],
            '@stylistic/indent': [
                'error',
                4
            ],
            '@stylistic/keyword-spacing': [
                'error',
                {
                    after: true,
                    before: true,
                    overrides: {
                        catch: {
                            after: false
                        },
                        for: {
                            after: false
                        },
                        if: {
                            after: false
                        },
                        switch: {
                            after: false
                        }
                    }
                }
            ],
            '@stylistic/lines-between-class-members': 'error',
            '@stylistic/max-statements-per-line': 'error',
            '@stylistic/member-delimiter-style': [
                'error',
                {
                    multiline: {
                        delimiter: 'semi',
                        requireLast: true
                    },
                    overrides: {
                        typeLiteral: {
                            multiline: {
                                delimiter: 'comma',
                                requireLast: false
                            },
                            singleline: {
                                delimiter: 'comma',
                                requireLast: false
                            }
                        }
                    },
                    singleline: {
                        delimiter: 'semi',
                        requireLast: true
                    }
                }
            ],
            '@stylistic/multiline-comment-style': [
                'error',
                'separate-lines'
            ],
            '@stylistic/multiline-ternary': [
                'error',
                'never'
            ],
            '@stylistic/no-extra-parens': 'error',
            '@stylistic/no-extra-semi': 'error',
            '@stylistic/no-floating-decimal': 'error',
            '@stylistic/no-mixed-spaces-and-tabs': 'error',
            '@stylistic/no-multi-spaces': 'error',
            '@stylistic/no-multiple-empty-lines': [
                'error',
                {
                    max: 1,
                    maxBOF: 0,
                    maxEOF: 1
                }
            ],
            '@stylistic/no-tabs': 'error',
            '@stylistic/no-trailing-spaces': 'error',
            '@stylistic/no-whitespace-before-property': 'error',
            '@stylistic/object-curly-newline': [
                'error',
                {
                    ExportDeclaration: {
                        minProperties: 2
                    },
                    ImportDeclaration: {
                        minProperties: 2
                    },
                    ObjectExpression: {
                        minProperties: 1
                    },
                    ObjectPattern: {
                        minProperties: 2
                    }
                }
            ],
            '@stylistic/object-curly-spacing': [
                'error',
                'always',
                {
                    arraysInObjects: true,
                    objectsInObjects: true
                }
            ],
            '@stylistic/object-property-newline': 'error',
            '@stylistic/padded-blocks': [
                'error',
                'never'
            ],
            '@stylistic/quote-props': [
                'error',
                'as-needed'
            ],
            '@stylistic/quotes': [
                'error',
                'single',
                {
                    avoidEscape: true
                }
            ],
            '@stylistic/semi': [
                'error',
                'always'
            ],
            '@stylistic/space-before-function-paren': [
                'error',
                {
                    anonymous: 'never',
                    asyncArrow: 'always',
                    catch: 'never',
                    named: 'never'
                }
            ],
            '@stylistic/wrap-iife': [
                'error',
                'inside'
            ]
        }
    },
    {
        files: [
            '**/*.vue'
        ],
        name: 'ms0503/rules/stylistic/vue',
        rules: {
            '@stylistic/indent': 'off'
        }
    }
];
