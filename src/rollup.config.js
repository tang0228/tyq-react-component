import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            exports: 'named',
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
        },
    ],
    external: ['react', 'react-dom', 'styled-components'],
    plugins: [
        resolve(),
        commonjs(),
        typescript(),
        babel({
            presets: ['@babel/preset-react'],
            babelHelpers: 'bundled',
        }),
    ],
};