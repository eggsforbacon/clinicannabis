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
      /* {
        source: '/services/serums',
        destination: '/404',
        permanent: true,
      }, */
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
        pathname: "/uploads/**"
      },
      {
        protocol: 'https',
        hostname: 'strapi.clinicannabis.com.co',
        pathname: "/uploads/**"
      },
    ],
  },
}
