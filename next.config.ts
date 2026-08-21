import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [
      {
        source: '/category/bean-salad',
        destination: '/category/healthy-bean-recipes',
        statusCode: 301
      }
    ];
  }
};

export default nextConfig;