module.exports = {
  configureWebpack: {
    externals: {
      // 我们挂载在全局的变量名称：引入的模块名称
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex'
    },
  },
}
