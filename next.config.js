const createNextIntlPlugin = require("next-intl/plugin");
const { routing } = require("./next-intl.config");
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["picsum.photos"],
  },
};

module.exports = withNextIntl(nextConfig);
