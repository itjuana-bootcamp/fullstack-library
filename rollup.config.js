import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default [
	{
		input: 'src/index.js',
		output: [
			{
				file: 'lib/index.js',
				format: 'cjs',
				sourcemap: true,
			},
		],
		plugins: [
			babel({
				exclude: 'node_modules/**',
				babelHelpers: 'bundled',
			}),
			nodeResolve({
				extensions: ['.js', '.jsx'],
				customResolveOptions: {
					moduleDirectories: ['node_modules'],
				},
			}),
			commonjs( {include: 'node_modules/**'} ),
		],
	},
]