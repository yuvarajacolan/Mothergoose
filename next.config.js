/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    loader: "imgix",
    path: "",
  },
  experimental: {
    appDir: true,
  },

  // webpack(config, options) {
  //   config.module.rules.push({
  //     test: /\.(eot|ttf|woff|woff2)$/,
  //     use: {
  //       loader: "url-loader",
  //     },
  //   });
  //   return config;
  // },
  
}

module.exports = nextConfig
