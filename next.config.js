/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "lh3.googleusercontent.com",
            "static.tryleap.ai",
            "images.unsplash.com",
        ],
    },
};

module.exports = nextConfig
