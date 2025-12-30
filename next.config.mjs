import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/demo/**",
      },
      {
        protocol: "https",
        hostname: "www.apple.com",
        pathname: "/105/media/**",
      },
    ],
  },
  // 禁用严格模式以避免开发时的重复渲染
  reactStrictMode: false,
};

export default withNextIntl(nextConfig);
