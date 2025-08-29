/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "media.istockphoto.com",
      "images.unsplash.com",
      "cdn.pixabay.com",
      "cdn.sanity.io",
    ], // Add your image domain here
  },
};

export default nextConfig;
