/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "upresearch.ir",
        port: "81",
        pathname: "/",
      },
    ],
  },
};

export default nextConfig;
