import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites(){
    return [
      {
        source: "/resume.pdf",
        destination: "/resume.pdf"
      },
      {
        source: "/resume.pdf/:path*",
        destination: "/resume.pdf"
      }
    ]
  },

  compiler: {
    removeConsole: true
  }
};

export default nextConfig;
