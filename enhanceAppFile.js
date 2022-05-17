module.exports = ({ router }) => {
  if (HM_ID && typeof window !== 'undefined') {

    const host = window.location.host;
    if ((host.indexOf("127.0.0.1") != -1 || host.indexOf("localhost") != -1) && IGNORE_LOCAL) {
      return;
    }

    window._hmt = window._hmt || [];
    (function () {
      const hm = document.createElement('script')
      hm.src = 'https://hm.baidu.com/hm.js?' + HM_ID
      const s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(hm, s)
    })()

    router.afterEach(function (to) {
      _hmt.push(['_trackPageview', to.fullPath])
    })
  }
}