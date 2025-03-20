/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: ['assets.aceternity.com', 'picsum.photos', 'files.ably.io']
  }
}

module.exports = nextConfig