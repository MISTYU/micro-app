const { defineConfig } = require('@vue/cli-service')
const name = 'mistyu'
module.exports = {
  publicPath: '/',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
    externals: {
      // 我们挂载在全局的变量名称：引入的模块名称
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex'
    },
  },
}
