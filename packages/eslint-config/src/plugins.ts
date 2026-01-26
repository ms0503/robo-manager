import stylistic from '@stylistic/eslint-plugin';
import { importX } from 'eslint-plugin-import-x';
import perfectionist from 'eslint-plugin-perfectionist';
import vue from 'eslint-plugin-vue';
import type { FlatCompat } from '@eslint/eslintrc';
import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint';

export function plugins(compat: FlatCompat): InfiniteDepthConfigWithExtends {
    return [
        {
            name: 'ms0503/plugins',
            plugins: {
                '@stylistic': stylistic,
                'import-x': importX,
                perfectionist,
                vue
            }
        },
        {
            ...compat.plugins('named-import-spacing')[0],
            name: 'ms0503/plugins/compat/named-import-spacing'
        }
    ];
}
