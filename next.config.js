/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/angusbailey-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/angusbailey-portfolio/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 