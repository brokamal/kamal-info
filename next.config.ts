import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['mdx', 'tsx', 'ts'],
};

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
