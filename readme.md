相当不错的文章：<https://juejin.cn/post/7071975873129218062>
<https://juejin.cn/post/6892994632968306702#heading-0>
https://github.com/orgs/webopt/repositories
前端性能优化方法：
## css方面：
1，编写高效的css,简写css，节省字节,使用css浅选择器，不能过于具体或层级太深
2，DRY原则
3，分割css:浏览器只下载当前页面所需的CS
4,移动优先响应式设计
5,避免在css文件中使用 @import声明，这种行为会导致网页的总加载时间延迟。
6，在<head>中放置CSS，。这样做可以缓解两个问题：无样式内容的闪烁问题，以及在加载时提高页面的渲染性能。
7，尽可能使用flexbox
8，使用will-change属性优化过渡


link标签和@import的区别：
HTML <link>标签是加载CSS的最佳原生方法。它不像@import那样串行加载请求，而是并行加载请求。扫描HTML文档后，将加载在文档中找到的所有<link>标签，
<link>标签在下载HTML文件后就能发现引用，这与CSS文件中@import指令的行为不同，后者只有在下载样式表后才能发现对外部文件的引用。
当@import 用于从外部样式表中加载CSS文件时，必须先加载对初始样式表的请求，然后浏览器才能在其中发现@import指令。会出现一个接一个地串行请求，增加页面的总体加载和渲染时间。

注意：LESS/SASS文件中@import的含义与常规CSS中使用的@import有区别
在LESS/SASS中，@import有不同的功能。在这些语言中，@import由编译器读取并用于打包LESS/SASS文件。这样你就可以在开发期间模块化样式，并在编译为CSS时进行打包。本节中讨论的行为是关于在常规CSS中使用的@import。

## 图像方面：
1，将图像组合成雪碧图来减少HTTP请求（HTTP/2反模式，应当避免在HTTP/2上使用它们）
