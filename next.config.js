/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    fontLoaders: [{ loader: "@next/font/google", options: { subsets: ["latin"] } }],
  },
  i18n: {
    locales: ["pt", "en"],
    defaultLocale: "pt",
  },
};

module.exports = nextConfig;
