const httpProxyMiddleware = require('http-proxy-middleware')

module.exports = {
  devServer: {
    host: 'test.suanshubang.cc',
    open: true,
    https: false,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/unitui': {
        target: 'test.suanshubang.com',
        changeOrigin: true,
        headers: {
          Cookie: "platId=2356; APPUSS=NDC3ZGNHYJMTNTIWMI0ZYZHMLTG1MWUTYZE2ZDY0YJDJNTI2;"
        }
      },
    },
  }
}