import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "/tmm-auth-supabase";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? repoName : "",
  assetPrefix: isProd ? repoName : "",
  images: {
    unoptimized: true,
  },

  // Adicione essa configuração
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });
    return config;
  },
};

export default nextConfig;
