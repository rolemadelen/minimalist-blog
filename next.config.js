/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: {
    swcPlugins: ['@swc-jotai/react-refresh', {}],
  },
  transpilePackages: ['gsap'],
}

module.exports = nextConfig
