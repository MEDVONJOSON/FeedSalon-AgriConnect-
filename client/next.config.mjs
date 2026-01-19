import withPWAInit from 'next-pwa';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const withPWA = withPWAInit({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isGithubActions ? 'export' : undefined,
  basePath: isGithubActions ? '/FeedSalon-AgriConnect-' : undefined,
  assetPrefix: isGithubActions ? '/FeedSalon-AgriConnect-/' : undefined,
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

export default withPWA(nextConfig);
