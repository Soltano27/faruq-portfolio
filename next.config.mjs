/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "static.kite.ai" }],
  },
};
export default nextConfig;
