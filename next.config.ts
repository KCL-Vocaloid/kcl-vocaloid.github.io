import type { NextConfig } from "next";

const NextConfig = {
  output: "export",
  distDir:"dist",
  reactStrictMode: true,
  images:{
    domains: ['kcl-vocaloid.github.io'],
    unoptimized: true,
  },
  /* config options here */
};
module.exports = NextConfig;
export default NextConfig;
