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
            {
                protocol: 'http',
                hostname: 'localhost',
                pathname: '/kairos-blue/wp-content/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'kairos-blue.kairos-valley.net',
                pathname: '/wp-content/uploads/**',
            },
            {
                protocol: 'http',
                hostname: 'via.placeholder.com',
                pathname: '/**',
            },
        ],
    },
    i18n: {
        locales: ['en', 'fr'],
        defaultLocale: 'fr',
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}
