const v1Config = require('./config/index.js')
const config = require('./config/config')

const pages = {
  login: {
    entry: "src/pages/login/main.ts",
    title: "登录页",
  }
}

module.exports = {
  pages,
  publicPath: process.env.NODE_ENV === 'production' ? v1Config.staticPath : undefined,

  outputDir: 'dist', // where to put static assets (js/css/img/font/...) // 是否在保存时使用‘eslint-loader’进行检查 // 有效值: true | false | 'error' // 当设置为‘error’时，检查出的错误会触发编译失败

  lintOnSave: false, // 使用带有浏览器内编译器的完整构建版本 // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only

  runtimeCompiler: false, // babel-loader默认会跳过`node_modules`依赖. // 通过这个选项可以显示转译一个依赖

  transpileDependencies: [
    /* string or regex */
  ],
  ...config
};