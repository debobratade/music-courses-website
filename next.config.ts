import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cherryvalleymusic.com','mbmusicacademy.org','cdn.shopify.com','cdn.prod.website-files.com', 'stringjoy.s3.amazonaws.com','media.licdn.com','e7.pngegg.com','img.freepik.com','img.freepik.com','images.unsplash.com','encrypted-tbn0.gstatic.com','plus.unsplash.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
