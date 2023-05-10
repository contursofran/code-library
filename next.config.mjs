/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.scdn.co"],
  },
  experimental: {
    appDir: true,
  },
  redirects: async () => {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/snippets",
        permanent: true,
      },
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
