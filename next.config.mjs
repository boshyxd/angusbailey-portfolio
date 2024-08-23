/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/angusbailey-portfolio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/angusbailey-portfolio' : '',
};

export default nextConfig;