const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/main.scss";`,
      },
    },
  },
  // Deployment to Github Pages
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-standing-table'
    : '/'
})
