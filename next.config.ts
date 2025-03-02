import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV = 'production'

const NextConfig = {
  basePath: isProd ? '/' : ' ',
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
