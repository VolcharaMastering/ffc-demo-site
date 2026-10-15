import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  sassOptions: {
    // lets components use: @use "abstracts" as *;
    loadPaths: [path.join(process.cwd(), "styles")],
  },
};

export default nextConfig;
