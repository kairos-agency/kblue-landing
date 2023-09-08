const path = require('path')

module.exports = {
	i18n: {
		locales: ['fr', 'en'],
		defaultLocale: 'fr',
		localDetection: true
	},
	webpack: (config, { isServer }) => {
		if (isServer) {
			require('./scripts/generate-sitemap')
		}

		return config
	}
}
