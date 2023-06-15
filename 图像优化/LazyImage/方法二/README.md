# LazyImage
图片懒加载
<https://juejin.cn/post/6971453092592091143>

用的是比较老式方法:
通过offsetTop来计算是否在可视区域内

可视区域高度是 ```document.documentElement.clientHeight```
可视区域的位置是在滚动条滚动位置 ```scrollTop``` 到 ```scrollTop+document.documentElement.clientHeight```之间
因此通过 ```image.offsetTop <= document.documentElement.clientHeight + document.documentElement.scrollTop``` 判断图片是否可以在可视区域内。

这里有两个点涉及到兼容性：

- 获取浏览器窗口的内部高度方法有 window.innerHeight、document.documentElement.clientHeight。 
window.innerHeight兼容性是 ie9+ 和其他主流浏览器。


- 获取滚动位置方法有 window.pageYOffset 和 document.documentElement.scrollTop 。 
window.pageYOffset 兼容性是 ie9+ 和其他主流浏览器。

- offsetTop 是相对其 offsetParent 元素的并不是相对浏览器窗口可视区域的。如果图片元素有 offsetParent 那么 offsetTop 是有偏差的。
HTMLElement.offsetTop 为只读属性，它返回当前元素相对于其 offsetParent 元素的顶部内边距的距离


<https://juejin.cn/post/7196970992576397367#heading-8>
