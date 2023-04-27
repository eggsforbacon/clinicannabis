/** @type {import('next').NextConfig} */
const withOptimizedImages = require('next-optimized-images')

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/experience/:path*',
        destination: '/404',
        permanent: true,
      },
      {
        source: '/services/serums',
        destination: '/404',
        permanent: true,
      },
    ]
  },
}
