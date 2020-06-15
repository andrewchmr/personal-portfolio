const withPWA = require('next-pwa');

module.exports = withPWA({
    pwa: {
        dest: 'public'
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/,
            },
            use: ['@svgr/webpack'],
        });

        return config;
    },
});