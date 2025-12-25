// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    devToolbar: {
    enabled: false,
  },
  output: "static",
  site: "https://khalesylya-art.github.io",
  base: "/tarjeta/",
});
