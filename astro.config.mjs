import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { SITE } from "./src/config";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), image()],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  }
});