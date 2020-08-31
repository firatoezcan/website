// next.config.js
const {
  withPlugins,
  optional
} = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const {
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
  PHASE_DEVELOPMENT_SERVER,
  PHASE_EXPORT,
} = require('next/constants');

module.exports = withPlugins([
  [optimizedImages, {
    handleImages: ["jpeg", "jpg", "png", "svg", "webp", "gif", "ico"],
    optimizeImagesInDev: true,
    defaultImageLoader: "responsive-loader",
    responsive: {
      sizes: [320, 600, 920, 1240],
      placeholder: false,
      placeholderSize: 80,
      adapter: require('responsive-loader/sharp')
    },
    pngquant: true,
  }, ],
  [require('next-plugin-preact')]

  // your other plugins here

]);
