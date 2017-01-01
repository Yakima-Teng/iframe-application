# iframe-application

注意：暂不可用。

基于iframe实现的类似SPA的应用

首先可以说，这个技术栈是比较“落伍”的了，但未必不常见。写这个脚手架的技术背景如下：

公司有个管理系统的项目，起初前端部分采用的是VueJS + Webpack + ES6，后来上级觉得这样写不利于后端同事参与前端页面的编写（仅指JS部分），但也暂时不考虑使用JSP，后端同事为Java技术栈，电脑里不装NodeJS，随意使用gulp等构建工具处理js/html是不提倡的，因为这会导致后端同事无法参与前端开发，所以只用gulp处理了下css的问题（因为后端不参与样式编写）。


一开始采用了JS拼接html字符串的方法，后面个人觉得这样不便于维护，变异的“html”对写样式也不够直观，再者，目前处于项目初创期，快速的功能迭代和bug修复是比性能更重要的事情（当前服务器端接口的设计也导致了前端用户体验好不起来）。出于提高前端开发体验并要兼容后端进行前端开发的可行性的考虑，决定采用浏览器端JS模版引擎，因为以前用过服务器端渲染ejs和jade(pug)，此次决定尝试handlerbars。

类似的，该项目不会：
- 区分开目录和生产目录；
- 对js文件进行压缩/合并。

该项目会：
- 对less进行编译，并压缩编译后的css文件；
- 带有自动刷新功能（browserSync）；
- 启动本地服务器，并带有转发请求的功能。

设计中的目录结构：

<pre>
.
index.html
package.json
gulpfile.js
pages/
  page1/
    index.html
    app.js
    importer.min.css
    importer.less
  page2/
    index.html
    app.js
    importer.min.css
    importer.less
lib/
scripts/
  utils.js
css/
  importer.min.css
  reset.min.css
  utils-table.min.css
less/
  reset.less
  importer.less
  utils-table.less
.
</pre>

## 参考资料

[http://www.tuicool.com/articles/EzUZJ3y](http://www.tuicool.com/articles/EzUZJ3y)
