/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "cdn.sanity.io",
        ]
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.optimization.minimize = true;
        }

        return config;
    }
}

module.exports = nextConfig
