// We only need to import the modules necessary for initial render
const createRoutes = {
	routes: {
		'/': require("./Home"),
		'/WeChat/': require("./WeChat"),
		'/about/': require("./About"),
		'/hackernews/': require("./HackerNews")
	},

	alias: {
		// '/:tab': '/'
	}
}


export default createRoutes