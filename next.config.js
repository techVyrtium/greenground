const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  images: {
    remotePatterns: [
      { hostname: 'picsum.photos' }
    ],
    // domains: ["picsum.photos"],
  },
};

module.exports = withNextIntl(nextConfig);
