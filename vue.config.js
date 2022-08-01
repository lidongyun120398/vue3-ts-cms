// const path = require("path")
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //1.配置方式一：Cli提供的属性
  outputDir: './build',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  // //2.配置方式二：和webpack属性完全一致，最后会进行合并
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/component'
      }
    }
  }

  // configureWebpack: (config) => {
  //     config.resolve.alias = {
  //         "@": path.resolve(__dirname, "src"),
  //         components: "@/components"
  //     }
  // }

  //3.配置方式三：
  // chainWebpack: (config) => {
  //     config.resolve.alias
  //         .set("@", path.resolve(__dirname, "src"))
  //         .set("components", "@/components")
  // }
})
