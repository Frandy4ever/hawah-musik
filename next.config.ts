import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Add your Next.js configuration options here

  // For example, enabling React strict mode:
  reactStrictMode: true,

  // Adding custom webpack configuration (if necessary):
  webpack: (config, { isServer }) => {
    // Example: Customize webpack loaders
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // Prevents server-side modules from bundling on client
      };
    }
    return config;
  },

  
};

export default nextConfig;
