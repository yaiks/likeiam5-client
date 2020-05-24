const { parsed } = require("dotenv-safe").config();

export default (config, env, helpers) => {
	config.resolve.modules.push(env.src);

	// dotenv injection
	if (env.dev) {
		const { plugin } = helpers.getPluginsByName(config, "DefinePlugin")[0];
		Object.assign(
			plugin.definitions,
			Object.keys(parsed).reduce(
				(env, key) => ({
					...env,
					[`process.env.${key}`]: JSON.stringify(parsed[key]),
				}),
				{}
			)
		);
	}

	// if (config.devServer) {
	// 	config.devServer.proxy = [
	// 		{
	// 			path: "/login/google",
	// 			target: process.env.API_URL,
	// 		},
	// 	];
	// }
};
