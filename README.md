#obe
- 毕设完成的课程支撑系统，具有新建课程与班级、上传资料、下发任务、在线学习及论坛等功能
- 资料采用Office Online进行在线预览，数据交互采用Fetch

## TASK
- 前后端项目初始化。

## Server
- 网址为：localhost:3000
- 项目目录
  - 初始化的views可以去掉，直接使用html作为模版
  - routes在app.js设置统一入口，以页面为单位进行分发
  - 将模版从jade设为html


## Fe
- 网址为：localhost:8000
- 项目结构改造
  - service层：这个应用单独划分一层
  - 单个页面：
    - index.js：入口文件
    - container：主文件
    - model：数据层
    - components：组件
    - styles.less：样式表

## 技术栈
- 前端：React，Antd，Dva，Webpack
- 后台：Node，Express，MongoDB



