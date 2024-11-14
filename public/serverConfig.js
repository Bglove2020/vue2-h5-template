/**
 * 配置公共文件，方便部署项目时修改
 * **/
window.serverConfig = {
  VUE_APP_VERSION: "1.0.0", // 版本
  VUE_APP_NAME: "项目全过程管理系统", // 标题
  // VUE_APP_BASE_API: "http://vue.ruoyi.vip/prod-api/", // 若依官方线上地址
  VUE_APP_BASE_API: "http://10.100.8.219:8088", // 磊杰
  // VUE_APP_BASE_API: "http://10.100.9.109:8089", // 光辉
  // VUE_APP_BASE_API: "http://127.0.0.1:8089", // 本地
  // VUE_APP_BASE_API: "http://172.19.0.89:8000/project-process/api", //测试
}
document.title = window.serverConfig.VUE_APP_NAME
