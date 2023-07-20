/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    async rewrites() {
      return [
        {
          source: '/api',
          destination: 'http://127.0.0.1:7000/api',
        },
      ]
    },
  }