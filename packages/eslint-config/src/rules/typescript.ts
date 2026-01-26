import type { ConfigWithExtendsArray } from '@eslint/config-helpers';

export const typescriptRules: ConfigWithExtendsArray = [
    {
        name: 'robo-manager/rules/typescript',
        rules: {
            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    disallowTypeAnnotations: true,
                    fixStyle: 'separate-type-imports',
                    prefer: 'type-imports'
                }
            ],
            '@typescript-eslint/no-confusing-void-expression': 'off',
            '@typescript-eslint/no-namespace': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                    varsIgnorePattern: '^_'
                }
            ],
            '@typescript-eslint/only-throw-error': 'off'
        }
    }
];
