const path = require('path')

module.exports = {
	async redirects() {
		return [
			{
				source: '/agence',
				destination: 'https://www.kairos-agency.com/a-propos',
				permanent: true,
			},
			{
				source: '/kairos-valley/studio.html',
				destination: 'https://www.kairos-agency.com/lab-startup-studio',
				permanent: true,
			},
			{
				source: '/kairos-valley/games.html',
				destination: 'https://www.kairos-agency.com/lab-startup-studio',
				permanent: true,
			},
			{
				source: '/kairos-valley/team.html',
				destination: 'https://www.kairos-agency.com/lab-startup-studio',
				permanent: true,
			},
			{
				source: '/projet',
				destination: 'https://www.kairos-agency.com/lab-startup-studio',
				permanent: true,
			},
			{
				source: '/laboratoire',
				destination: 'https://www.kairos-agency.com/lab-startup-studio',
				permanent: true,
			},
			{
				source: '/laboratoire.html',
				destination: 'https://www.kairos-agency.com/mentions-legales',
				permanent: true,
			},
      {
				source: '/mentions-legales.html',
				destination: 'https://www.kairos-agency.com/mentions-legales',
				permanent: true,
			},
			{
				source: '/presse.html',
				destination: 'https://www.kairos-agency.com/presse',
				permanent: true,
			},
			{
				source: '/projet/ponchielli.html',
				destination: 'https://www.kairos-agency.com/bilbiotheque',
				permanent: true,
			},
			{
				source: '/contact.php',
				destination: 'https://www.kairos-agency.com',
				permanent: true,
			},
			{
				source: '/laboratoire/neptune.html',
				destination: 'https://www.kairos-agency.com/bibliotheque/lab-neptune-green-tech-site-web',
				permanent: true,
			},
			{
				source: '/index.html',
				destination: 'https://www.kairos-agency.com',
				permanent: true,
			},
			{
				source: '/en/home.html',
				destination: 'https://www.kairos-agency.com',
				permanent: true,
			},
			{
				source: '/agence.html',
				destination: 'https://www.kairos-agency.com/a-propos',
				permanent: true,
			},
			{
				source: '/laboratoire.html',
				destination: 'https://www.kairos-agency.com/lab-startup-studio',
				permanent: true,
			},
			{
				source: '/projet/big-bang.html',
				destination: 'https://www.kairos-agency.com/bilbiotheque',
				permanent: true,
			},
			{
				source: '/projet/occitane.html',
				destination: 'https://www.kairos-agency.com/bilbiotheque',
				permanent: true,
			},
			{
				source: '/projet/hollo.html',
				destination: 'https://www.kairos-agency.com/bilbiotheque',
				permanent: true,
			},
			{
				source: '/projet/fabrique-de-styles.html',
				destination: 'https://www.kairos-agency.com/bilbiotheque',
				permanent: true,
			},
			{
				source: '/projet/cafe-saint-julien.html',
				destination: 'https://www.kairos-agency.com/bilbiotheque',
				permanent: true,
			},
			{
				source: '/laboratoire/sos-commerce.html',
				destination: 'https://www.kairos-agency.com/bilbiotheque',
				permanent: true,
			},
		]
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	i18n: {
		locales: ['fr'],
		defaultLocale: 'fr',
	},
	webpack: (config, { isServer }) => {
		if (isServer) {
			require('./scripts/generate-sitemap')
		}

		return config
	},
}
