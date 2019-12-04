/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-07 09:20:06
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-03 14:17:16
 */
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  Vue.prototype.$bus = new Vue({
    data: {
      cname: ""
    }
  });
  // ...做一些其他的应用级别的优化
};
