module.exports = {
    css: {
        loaderOptions: {
          scss: {
              additionalData: '@import "@/base/styles/variables.scss";',
          },
        }
    },

    publicPath: '/nerd-timer/'
}