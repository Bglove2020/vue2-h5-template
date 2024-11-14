const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    // 固定本地启动端口，但是如果端口被占用，会在别的端口启动
    port:8080
  },
  // publicPath: "/project-process/h5/",
})
