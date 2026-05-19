import type { NextConfig } from "next";

// NEXT_PUBLIC_BASE_PATH is injected by the GitHub Actions workflow.
// Locally it is empty so dev server works at localhost:3000 as normal.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",        // static HTML export — required for GitHub Pages
  basePath,                // e.g. "/azmat-qatar" on GitHub Pages
  assetPrefix: basePath,   // prefix for _next/static assets
  trailingSlash: true,     // index.html per route — required for static hosting
  images: {
    unoptimized: true,     // next/image optimisation requires a server; disable for static
  },
};

export default nextConfig;
