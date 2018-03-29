import typescript from 'rollup-plugin-typescript';

export default {
    input: 'src/index.ts',
    output: {
        format: 'umd',
        file: 'lib/index.js',
        name: 'mpreact',
    },
    plugins: [
        typescript()
    ]
}