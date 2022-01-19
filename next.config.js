/* 

const nextConfig = {
  images: {
    loader: "defaul",
    domains: [process.env.NEXT_IMAGES_DOMAIN],
    hostname: [process.env.NEXT_IMAGES_DOMAIN],
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96],

  },
}



module.exports = nextConfig; */

/* This will enable the export method in nextjs for static images */
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const getLocalPackages = require('./scripts/getLocalPackages');


const nextConfig = {
  webpack: (config, options) => {
    return config;
  },
  eslint: {
    // ESLint managed on the workspace level
    ignoreDuringBuilds: true,
  },
  images: {
    disableStaticImages: true,
  },
};

const config = withPlugins(
  [

    [
      optimizedImages,
      {
        // optimisation disabled by default, to enable check https://github.com/cyrilwanner/next-optimized-images
        optimizeImages: false,
      },
    ],
  ],
  nextConfig
);

module.exports = config;
