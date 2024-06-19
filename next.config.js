const path = require('path')

module.exports = {
    env: {
        websiteURL: process.env.WEBSITE_URL,
        wordpressApiURL: process.env.WORDPRESS_API_URL,
        userApi: process.env.USER_API,
        passwordApi: process.env.PASSWORD_API,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8888',
                pathname: '/kairos-blue/wp-content/uploads/**',
            },
        ],
    },
    i18n: {
        locales: ['fr', 'en'],
        defaultLocale: 'fr',
        localDetection: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}
