import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  env: {
    APP_NAME: process.env.APP_NAME,
    APP_URL: process.env.APP_URL,
    API_URL: process.env.API_URL,
  },
}

export default nextConfig
