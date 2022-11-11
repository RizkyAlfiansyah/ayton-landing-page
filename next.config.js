/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://ayton.api-dc-tracker.my.id/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
