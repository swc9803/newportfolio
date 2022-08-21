import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    mode: "universal",
    build: {
        ssr: true,
    },
    buildModules: ["@pinia/nuxt"],
    css: ["@/style/Mainstyle.scss"],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
