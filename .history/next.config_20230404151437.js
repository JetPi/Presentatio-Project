/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/200/300**",
      },
    ],
  },
  i18n: {
    locales: ["en-US", "es-ES"],
    defaultLocale: "en-US",
  },
};
module.exports = nextConfig;
