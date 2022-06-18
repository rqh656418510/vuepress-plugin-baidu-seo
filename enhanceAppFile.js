module.exports = ({ router }) => {
  if (HM && typeof window !== 'undefined') {

    const host = window.location.host;
    if ((host.indexOf("127.0.0.1") != -1 || host.indexOf("localhost") != -1) && IGNORE_LOCAL) {
      return;
    }
    
    const id = 'baidu-tongji';
    var element = document.getElementById(id);
    if (element) {
      element.remove();
    }

    window._hmt = window._hmt || [];
    const hm = document.createElement('script');
    hm.id = id;
    hm.src = 'https://hm.baidu.com/hm.js?' + HM;
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm, s);

    router.afterEach(function (to) {
      _hmt.push(['_trackPageview', to.fullPath]);
    })
  }
}