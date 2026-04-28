import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/b2b-angola-mvp",
  assetPrefix: "/b2b-angola-mvp/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
