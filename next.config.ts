import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // NOTE: Using PPR results in error during build -> can only be used with the latest canary version of next.js
  //
  // experimental: {
  //   ppr: 'incremental',
  // }
};

export default nextConfig;
