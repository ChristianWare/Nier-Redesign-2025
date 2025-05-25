import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.mapbox.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tiles.mapbox.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_MAPBOX_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  experimental: {
    serverActions: {
      // only necessary if you invoke server actions from a different origin:
      allowedOrigins: ["my-proxy.com", "*.my-proxy.com"],
      // bump request-body limit if you expect large payloads:
      bodySizeLimit: "2mb",
    },
  },
};

export default nextConfig;
