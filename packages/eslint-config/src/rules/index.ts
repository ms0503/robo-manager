import { importRules } from './import';
import { perfectionistRules } from './perfectionist';
import { stylisticRules } from './stylistic';
import { typescriptRules } from './typescript';
import { vueRules } from './vue';
import type { ConfigWithExtendsArray } from '@eslint/config-helpers';

export const rules: ConfigWithExtendsArray = [
    ...importRules,
    ...perfectionistRules,
    ...stylisticRules,
    ...typescriptRules,
    ...vueRules
];
