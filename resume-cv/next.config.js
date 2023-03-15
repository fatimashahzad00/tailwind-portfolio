/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  css: [
    // Import the global CSS file
    '@app/globals.css',
  ],
}

module.exports = nextConfig
