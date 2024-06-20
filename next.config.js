/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        pathname: '**',
      },
      {
        protocol: "https",
        hostname: "**",
        pathname: '**',
      },
    ],
    
  },
  env: {
    BASE_URL: process.env.FRONTEGG_APP_URL,
  }
}

module.exports = nextConfig
