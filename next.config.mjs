/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/component/accordion",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
