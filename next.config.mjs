/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: "/api/:path*", // Все запросы, начинающиеся с `/api/`
          destination: "https://boxy-backend-kzfldfyyc-denis-projects-b5070b09.vercel.app/api/:path*", // Ваш бэкенд на Vercel
        },
      ];
    },
  };
  
  export default nextConfig;