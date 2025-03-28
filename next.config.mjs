/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    turbo: false, // Disable Turbopack
  },
};

export default nextConfig;
