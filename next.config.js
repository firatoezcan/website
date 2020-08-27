// next.config.js
const {
  withPlugins,
  extend
} = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withPreact = require('next-plugin-preact');

module.exports = withPlugins([
  [optimizedImages, {
    handleImages: ["jpeg", "jpg", "png", "svg", "webp", "gif", "ico"],
    optimizeImagesInDev: true,
    defaultImageLoader: "responsive-loader",
    responsive: {
      sizes: [320, 600, 920, 1240],
      placeholder: true,
      placeholderSize: 80,
      adapter: require('responsive-loader/sharp')
    },
    pngquant: true,
  }, ],
  [withPreact]

  // your other plugins here

]);
