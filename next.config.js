/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
};
