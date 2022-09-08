import vueGtag from 'vue-gtag';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vueGtag, {
    config: {
      id: 'G-YKYM44XP59',
    },
    appName: 'newsungpf',
  }, nuxtApp.$router)
})