import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['mdx', 'tsx', 'ts'],
};

const withMDX = createMDX({});


export default withMDX(nextConfig);
