import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy'

export default {
  input: 'src/index.ts',
  output: [
    { file: 'dist/index.cjs.js', format: 'cjs', sourcemap: true },
    { file: 'dist/index.esm.js', format: 'esm', sourcemap: true },
    { file: 'dist/index.umd.js', format: 'umd', name: 'MyLibrary', sourcemap: true, plugins: [terser()] }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    json(),
    copy({
      targets: [
        { src: 'src/render/template/*', dest: 'dist/template' }
      ]
    })
  ]
};