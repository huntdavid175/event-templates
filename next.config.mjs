/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "micahandcody.com" }],
  },
};

export default nextConfig;
