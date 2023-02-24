/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["res.cloudinary.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
