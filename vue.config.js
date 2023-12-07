const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // chainWebpack: config => {
  //   config.module
  //     .rule('images')
  //     .test(/\.(png|jpe?g|gif|svg)$/i)
  //     .use('file-loader')
  //     .loader('file-loader')
  //     .end();
  // },
})
