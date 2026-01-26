import { base } from './base';
import { plugins } from './plugins';
import { rules } from './rules';
import { defineConfig } from 'eslint/config';
import type { ConfigWithExtendsArray } from '@eslint/config-helpers';
import type { FlatCompat } from '@eslint/eslintrc';
import type { Linter } from 'eslint';

export function config(compat: FlatCompat, extraConfigs: ConfigWithExtendsArray = []): Linter.Config[] {
    return defineConfig(
        base,
        plugins(compat) as ConfigWithExtendsArray,
        rules,
        extraConfigs
    );
}
