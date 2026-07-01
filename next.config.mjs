import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root to this project (multiple lockfiles exist on disk).
  outputFileTracingRoot: path.resolve(process.cwd()),
  // Static export — a fully static `out/` directory that hosts identically on
  // Vercel or any static host. The reviewer-facing Privacy / Support URLs must
  // stay live regardless of host.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
