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
    locales: ["default", "en-US", "es-ES"],
    defaultLocale: "default",
    localeDetection: false,
  },
  trailingSlash: true,
};
module.exports = nextConfig;
