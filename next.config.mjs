//eslint-disable-next-line
import "./env.mjs"

import mdx from "@next/mdx"

const withMDX = mdx({
  extension: /\.mdx?$/,
})

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.scdn.co"],
  },
  experimental: {
    appDir: true,
    mdxRs: true,
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

export default withMDX({
  ...nextConfig,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
})
