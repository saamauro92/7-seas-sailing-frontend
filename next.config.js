

const nextConfig = {
  images: {
    loader: "default",
    domains: [process.env.NEXT_IMAGES_DOMAIN],/*  ["7-seas-storage.s3.eu-west-1.amazonaws.com"], *//* [process.env.NEXT_IMAGES_DOMAIN ] TO DELETE  */
    hostname: [process.env.NEXT_IMAGES_DOMAIN],/* ["7-seas-storage.s3.eu-west-1.amazonaws.com"], *//* [process.env.NEXT_IMAGES_DOMAIN ]  to delete  */
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96],
  },
}

module.exports = nextConfig;



