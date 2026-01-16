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
  // 启用严格模式以发现潜在性能问题
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);
