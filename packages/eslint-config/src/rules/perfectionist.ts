import type { ConfigWithExtendsArray } from '@eslint/config-helpers';

const asciiPrintable
    = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
const perfectionistRuleOption = {
    alphabet: asciiPrintable,
    ignoreCase: false,
    order: 'asc',
    type: 'custom'
};

export const perfectionistRules: ConfigWithExtendsArray = [
    {
        name: 'robo-manager/rules/perfectionist',
        rules: {
            'perfectionist/sort-array-includes': [
                'error',
                perfectionistRuleOption
            ],
            'perfectionist/sort-classes': [
                'error',
                perfectionistRuleOption
            ],
            'perfectionist/sort-decorators': [
                'error',
                perfectionistRuleOption
            ],
            'perfectionist/sort-enums': [
                'error',
                perfectionistRuleOption
            ],
            'perfectionist/sort-exports': [
                'error',
                perfectionistRuleOption
            ],
            'perfectionist/sort-heritage-clauses': [
                'error',
                perfectionistRuleOption
            ],
            'perfectionist/sort-imports': 'off',
            'perfectionist/sort-interfaces': [
                'error',
                perfectionistRuleOption
            ],
            'perfectionist/sort-intersection-types': [
                'error',
                perfectionistRuleOption
            ],
            'perfectionist/sort-maps': [
                'error',
                perfectionistRuleOption
            ],
            'perfectionist/sort-modules': 'off',
            'perfectionist/sort-named-exports': [
                'error',
                perfectionistRuleOption
            ],
            'perfectionist/sort-named-imports': [
                'error',
                perfectionistRuleOption
            ],
            'perfectionist/sort-object-types': [
                'error',
                perfectionistRuleOption
            ],
            'perfectionist/sort-objects': [
                'error',
                perfectionistRuleOption
            ],
            'perfectionist/sort-sets': [
                'error',
                perfectionistRuleOption
            ],
            'perfectionist/sort-switch-case': [
                'error',
                perfectionistRuleOption
            ],
            'perfectionist/sort-union-types': [
                'error',
                perfectionistRuleOption
            ],
            'perfectionist/sort-variable-declarations': 'off'
        }
    }
];
