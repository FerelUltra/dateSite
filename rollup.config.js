import {babel} from '@rollup/plugin-babel'

const config = {
    input: 'src/main.tsx',
    output: {
        dir: 'dist/index.esm.js',
        format: 'esm'
    },
    external: [/@babel\/runtime/],
    plugins: [
        babel({babelHelpers: 'runtime', plugins: ['@babel/plugin-transform-runtime'] })
    ]
}
export default config;