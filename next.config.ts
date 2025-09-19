import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  basePath: isProd ? "/tmm-auth-supabase" : "",
  assetPrefix: isProd ? "/tmm-auth-supabase/" : "",
  images: {
    unoptimized: true,
  },

  /* config options here */
};

export default nextConfig;
