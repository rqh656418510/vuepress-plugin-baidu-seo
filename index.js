const colors = require('colors');
const { resolve } = require('path');

module.exports = (options, ctx) => {
  if (options.hm) {
    console.log(colors.bold.white.bgBlue(' BAIDU SEO PLUGIN ') + ' running... ');
  } else {
    console.log(colors.bold.white.bgRed(' BAIDU SEO PLUGIN  option hm is required!'));
  }

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

    enhanceAppFiles: resolve(__dirname, 'enhanceAppFile.js')
  }
}