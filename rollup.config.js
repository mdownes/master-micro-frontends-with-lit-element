import resolve from '@rollup/plugin-node-resolve';          // resolve node_modules
import terser from '@rollup/plugin-terser';                 // minify generated bundles
import typescript from 'rollup-plugin-typescript2';         // transpile typescript
import commonjs from '@rollup/plugin-commonjs';             // convert CommonJS modules to ES6
import copy from 'rollup-plugin-copy';                      // copy files

export default [
    {
        input: `./src/index_am.ts`,
        output: {
            file: `dist/address-manager.js`,
            format: 'esm',
            sourcemap: true,
        },
        plugins: [
            resolve(),
            typescript({ tsconfig: './tsconfig.json' }),
            terser({ module: true, warnings: true, output: { comments: false } }),
            copy({
                targets: [
                    { src: 'index.html', dest: 'dist/demo/index.html' }
                ]
            })
        ],
    },
    {
        input: `./src/index_am.ts`,
        output: {
            file: `dist/address-manager.legacy.js`,
            format: 'iife',
            sourcemap: true,
        },
        plugins: [
            resolve(),
            commonjs({ include: 'node_modules/**' }),
            typescript({ tsconfig: './tsconfig.es5.json' }),
            terser({ module: false, warnings: true, output: { comments: false } }),
            copy({
                targets: [
                    { src: 'index.html', dest: 'dist/demo/index.html' }
                ]
            })
        ],
    },
    {
        input: `./src/index_ps.ts`,
        output: {
            file: `dist/payment-summary.js`,
            format: 'esm',
            sourcemap: true,
        },
        plugins: [
            resolve(),
            typescript({ tsconfig: './tsconfig.json' }),
            terser({ module: true, warnings: true, output: { comments: false } }),
        ],
    },
    {
        input: `./src/app/index.ts`,
        output: {
            file: `dist/app.js`,
            format: 'esm',
            sourcemap: true,
        },
        plugins: [
            resolve(),
            typescript({ tsconfig: './tsconfig.json' }),
            terser({ module: true, warnings: true, output: { comments: false } }),
        ],
    }
];