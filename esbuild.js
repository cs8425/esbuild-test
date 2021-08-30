const fs = require('fs');
const esbuild = require('esbuild');
const comm = require('./esbuild-comm.js');

console.log('start build...');
esbuild.build({
	entryPoints: ['src/main.js'],
	bundle: true,
	minify: true,
	pure: ['console.log'], // remove debug log
	sourcemap: false,
	sourcesContent: false,
	target: [
		'es2015',
	],
	// outfile: './dist/main.js',
	// publicPath: 'res/',
	outdir: './dist',
	loader: {
		'.js': 'jsx',
		'.png': 'file',
		'.jpg': 'file',
		'.gif': 'file',
		'.svg': 'file',
		'.woff': 'file',
		'.woff2': 'file',
		'.ttf': 'file',
	},
	jsxFactory: 'h',
	jsxFragment: 'Fragment',
	plugins: [
		comm.reactOnResolvePlugin,
		comm.copyPlugin,
	],
}).then(() => {
	console.log('build end!');
}).catch(() => process.exit(1));


