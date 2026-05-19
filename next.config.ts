import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve mp4 with correct MIME type so browsers don't refuse to play
  async headers() {
    return [
      {
        source: "/assets/videos/:path*.mp4",
        headers: [
          { key: "Content-Type", value: "video/mp4" },
          { key: "Accept-Ranges", value: "bytes" },
          { key: "Cache-Control", value: "public, max-age=86400" },
        ],
      },
    ];
  },
};

export default nextConfig;
