/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        port: "picsum.photos",
        pathname: "200/300**",
      },
    ],
  },
};
module.exports = nextConfig;
