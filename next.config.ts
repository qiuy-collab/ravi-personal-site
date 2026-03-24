import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? process.env.BASE_PATH ?? "" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    webpackBuildWorker: false
  },
  basePath,
  assetPrefix: basePath || undefined
};

export default nextConfig;
