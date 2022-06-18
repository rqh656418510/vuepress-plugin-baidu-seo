const path = require('path')

module.exports = (options, ctx) => {
  return {
    name: 'vuepress-plugin-baidu-seo',
    define() {
      const { siteConfig = {} } = ctx
      const hm = options.hm || siteConfig.hm
      const ignoreLocal = options.ignoreLocal || siteConfig.ignoreLocal
      const HM = hm || false
      const IGNORE_LOCAL = ignoreLocal || false
      return { HM, IGNORE_LOCAL }
    },

    enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js')
  }
}