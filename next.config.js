/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/experiencia/:path*',
        destination: '/404',
        permanent: true,
      },
      {
        source: '/seminario/:path*',
        destination: '/404',
        permanent: true,
      },
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
