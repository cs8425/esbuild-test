const esbuild = require('esbuild');
const comm = require('./esbuild-comm.js');

const config = {
	devPort: 8000,
};

esbuild.serve({
	servedir: 'public',
	port: config.devPort,
}, {
	entryPoints: ['src/main.js'],
	bundle: true,
	// minify: true,
	// pure: ['console.log'],
	sourcemap: true,
	sourcesContent: true,
	target: [
		// 'es2015',
		'es2020',
	],
	// outfile: 'public/main.js',
	outdir: './public',
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
	],
}).then(async (server) => {
	console.log('[dev]server start at', server.host, server.port);
	await server.wait;
	// Call "stop" on the web server when you're done
	// server.stop()
}).catch((err) => {
	console.log('[dev]err', err);
	process.exit(1)
});
