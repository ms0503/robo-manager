import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import { importX } from 'eslint-plugin-import-x';
import vue from 'eslint-plugin-vue';
import globals from 'globals';
import { configs as tsConfigs } from 'typescript-eslint';
import vueESLintParser from 'vue-eslint-parser';
import type { ConfigWithExtendsArray } from '@eslint/config-helpers';

export const base: ConfigWithExtendsArray = [
    {
        ignores: [
            'worker-configuration.d.ts'
        ],
        name: 'robo-manager/base/ignores'
    },
    js.configs.recommended,
    ...tsConfigs.strict,
    ...tsConfigs.strictTypeChecked,
    ...tsConfigs.stylisticTypeChecked,
    stylistic.configs.recommended,
    importX.flatConfigs.recommended,
    importX.flatConfigs.typescript,
    ...vue.configs['flat/strongly-recommended-error'],
    {
        languageOptions: {
            ecmaVersion: 'latest',
            globals: {
                ...globals.browser,
                ...globals.commonjs,
                ...globals.es2026,
                ...globals.node,
                ...globals.vue,
                ...globals.worker
            },
            parser: vueESLintParser,
            parserOptions: {
                extraFileExtensions: [
                    '.vue'
                ],
                parser: '@typescript-eslint/parser',
                projectService: {
                    defaultProject: './tsconfig.json'
                }
            },
            sourceType: 'module'
        },
        name: 'robo-manager/base/language-options'
    }
];
