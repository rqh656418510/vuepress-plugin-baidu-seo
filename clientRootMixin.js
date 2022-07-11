export default {

    mounted() {
        // 百度统计提交
        this.tongjiSubmit(1000);

        // 监听路由变化
        this.$router.afterEach((to, from) => {
            var toPath = to.path;
            var fromPath = from.path;
            // 忽略带锚点的路由变化
            if (toPath != fromPath) {
                this.tongjiSubmit(500);
            }
        });
    },

    methods: {
        // 百度统计提交
        tongjiSubmit(waitMills) {
            // 利用定时器来保证可以正常操作DOM节点
            setTimeout(() => {
                this.tongjiPush();
            }, waitMills);
        },
        // 百度统计推送
        tongjiPush() {
            if (HM && typeof window !== 'undefined') {
                // 忽略本地的访问记录
                const host = window.location.host;
                if ((host.indexOf("127.0.0.1") != -1 || host.indexOf("localhost") != -1) && IGNORE_LOCAL) {
                    return;
                }

                // 删除已存在的DOM节点
                const id = 'baidu-tongji';
                var element = document.getElementById(id);
                if (element) {
                    element.remove();
                }

                // 推送访问记录
                window._hmt = window._hmt || [];
                const hm = document.createElement('script');
                hm.id = id;
                hm.src = 'https://hm.baidu.com/hm.js?' + HM;
                const s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(hm, s);
                _hmt.push(['_trackPageview', window.location.href]);
            }
        }
    }
}