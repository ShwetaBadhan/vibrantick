// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: {
    server: {
      allowedHosts: ["localhost"],
    },
  },

  app: {
    head: {
      title: "Vibrantick Infotech Solutions",
      link: [
        //  Favicon
        { rel: "shortcut icon", type: "image/x-icon", href: "/images/fav.png" },
        {
          rel: "stylesheet preload",
          href: "/css/plugins/fontawesome.css",
          as: "style",
        },
        {
          rel: "stylesheet preload",
          href: "/css/plugins/swiper.css",
          as: "style",
        },
        {
          rel: "stylesheet preload",
          href: "/css/plugins/metismenu.css",
          as: "style",
        },
        {
          rel: "stylesheet preload",
          href: "/css/plugins/magnifying-popup.css",
          as: "style",
        },
        {
          rel: "stylesheet preload",
          href: "/css/plugins/odometer.css",
          as: "style",
        },
        {
          rel: "stylesheet preload",
          href: "/css/vendor/bootstrap.min.css",
          as: "style",
        },
        {
          rel: "stylesheet preload",
          href: "/css/style.css",
          as: "style",
        },
      ],

      script: [
        {
          src: "/js/plugins/jquery.js",
          tagPosition: "bodyClose",
        },

        {
          src: "/js/plugins/jquery-appear.js",
          tagPosition: "bodyClose",
          defer: true,
        },
        {
          src: "/js/plugins/odometer.js",
          tagPosition: "bodyClose",
          defer: true,
        },

        {
          src: "/js/plugins/gsap.js",
          tagPosition: "bodyClose",
          defer: true,
        },
        {
          src: "/js/plugins/split-text.js",
          tagPosition: "bodyClose",
          defer: true,
        },
        {
          src: "/js/plugins/scroll-trigger.js",
          tagPosition: "bodyClose",
          defer: true,
        },

        {
          src: "/js/plugins/smooth-scroll.js",
          tagPosition: "bodyClose",
          defer: true,
        },
        {
          src: "/js/plugins/metismenu.js",
          tagPosition: "bodyClose",
          defer: true,
        },
        {
          src: "/js/plugins/popup.js",
          tagPosition: "bodyClose",
          defer: true,
        },
        {
          src: "/js/plugins/swiper.js",
          tagPosition: "bodyClose",
          defer: true,
        },
        {
          src: "/js/plugins/contact.form.js",
          tagPosition: "bodyClose",
          defer: true,
        },

      
        {
          src: "/js/vendor/bootstrap.min.js",
          tagPosition: "bodyClose",
          defer: true,
        },

        
        {
          src: "/js/main.js",
          tagPosition: "bodyClose",
          defer: true,
        },
      ],
    },
  },
});
