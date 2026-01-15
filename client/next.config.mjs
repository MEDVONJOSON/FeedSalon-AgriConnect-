/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/FeedSalon-AgriConnect-',
  assetPrefix: '/FeedSalon-AgriConnect-/',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  }
}

export default nextConfig
