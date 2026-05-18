import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
  },
  experimental: {
    optimizePackageImports: ["lucide-react"]
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com"
      },
      {
        protocol: "https",
        hostname: "img.youtube.com"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ],
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
