export default function eleventy(config) {
	config.setServerOptions({
		https: {
			key: '.certs/localhost-key.pem',
			cert: '.certs/localhost.pem',
		},
	});

	return {
		dir: {
			input: 'src',
			output: '_site',
		},
	};
}
