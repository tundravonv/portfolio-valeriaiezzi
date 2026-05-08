/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local images in /public are always allowed.
    // Add external hostnames here if you use a CDN later.
    remotePatterns: [],
  },
};

export default nextConfig;
