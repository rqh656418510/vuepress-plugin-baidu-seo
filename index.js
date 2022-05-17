const path = require('path')

module.exports = (options, ctx) => {
  return {
    name: 'vuepress-plugin-baidu-seo',
    define() {
      const { siteConfig = {} } = ctx
      const ga = options.hm || siteConfig.hm
      const ignoreLocal = options.ignoreLocal || siteConfig.ignoreLocal
      const HM_ID = ga || false
      const IGNORE_LOCAL = ignoreLocal || false
      return { HM_ID, IGNORE_LOCAL }
    },

    enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js')
  }
}