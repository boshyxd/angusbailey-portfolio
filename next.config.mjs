/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/angusbailey-portfolio/',
  basePath: '/angusbailey-portfolio',
  trailingSlash: true,
};

export default nextConfig;