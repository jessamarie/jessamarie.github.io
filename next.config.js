/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    // Required for next/image under static export (output: 'export').
    unoptimized: true,
  },
}

module.exports = nextConfig
