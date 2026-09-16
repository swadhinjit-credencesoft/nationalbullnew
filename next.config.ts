import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  transpilePackages: [],
  sassOptions: {
    includePaths: ['src/styles'],
  },
};

export default nextConfig;
