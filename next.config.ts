import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/b2b-angola-mvp",
  assetPrefix: "/b2b-angola-mvp/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
