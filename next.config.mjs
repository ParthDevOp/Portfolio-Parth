/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['hero-portfolio-build.cluster-0.preview.emergentcf.cloud'],
}

export default nextConfig
