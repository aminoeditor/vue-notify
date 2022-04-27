import vue from 'rollup-plugin-vue';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-scss';
const packageName = 'vue-notify';
export default [{
	input: 'src/index.js',
	output: [{
		format: 'esm',
		file: `dist/${packageName}.mjs`
	},{
		format: 'cjs',
		file: `dist/${packageName}.js`
	}],
	plugins: [
		vue(),
		peerDepsExternal(),
		scss()
	]
}]
