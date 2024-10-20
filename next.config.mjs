/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      //projects images
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "*.top4top.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
