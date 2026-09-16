import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  transpilePackages: [],
  outputFileTracingRoot: path.join(__dirname),
  sassOptions: {
    includePaths: ['src/styles'],
  },
};

export default nextConfig;
