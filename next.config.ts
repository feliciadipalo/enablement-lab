import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/enablement-lab",
  trailingSlash: true,
};

export default nextConfig;
