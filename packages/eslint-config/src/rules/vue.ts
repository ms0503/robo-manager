import type { ConfigWithExtendsArray } from '@eslint/config-helpers';

export const vueRules: ConfigWithExtendsArray = [
    {
        name: 'robo-manager/rules/vue',
        rules: {
            'vue/html-indent': [
                'error',
                4,
                {
                    baseIndent: 1
                }
            ],
            'vue/html-self-closing': [
                'error',
                {
                    html: {
                        component: 'always',
                        normal: 'always',
                        void: 'always'
                    },
                    math: 'always',
                    svg: 'always'
                }
            ],
            'vue/no-multiple-template-root': 'off',
            'vue/script-indent': [
                'error',
                4,
                {
                    baseIndent: 1
                }
            ]
        }
    },
    {
        files: [
            'src/pages/**/*.vue'
        ],
        name: 'robo-manager/rules/vue/pages',
        rules: {
            'vue/multi-word-component-names': 'off'
        }
    }
];
