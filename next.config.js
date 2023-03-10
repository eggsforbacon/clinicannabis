/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/experience/:path*',
        destination: '/404',
        permanent: true,
      },
    ]
  },
}
