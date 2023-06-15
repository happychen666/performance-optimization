# scrollTop
DOM对象的scrollTop用于获取或者设置一个元素里滚动的距离（垂直）。例如：document.documentElement.scrollTop可以获取当前页面的滚动高度，也可以获取某个DOM元素的滚动距离，例如：```document.querySelector('.content').scrollTop```，前提是.content元素存在，并且可以滚动。
另外，scrollTop还可以把滚动条移到指定位置，例如：

// 回到顶部
```document.documentElement.scrollTop = 0;```
# offsetTop
DOM对象的offsetTop与scrollTop完全不同，它是上边框相对于父元素上边框的距离，一般是固定的，不随滚动变化。

# pageYOffset 和 scrollY
这两个都能返回视窗滚动过的距离，相对来说，pageYOffset兼容性更好，一般我们只用 pageYOffset就行。但两者都不兼容IE9以下，
另外 scrollY 可以赋值，让视窗滚动到指定位置。
pageYOffser和scrollY都与scrollTop不同，pageYOffset和scrollY都只存在window对象里。

看下面等式：

```document.documentElement.scrollTop === window.pageYOffset === scrollY```


# 获取页面滚动距离

在获取页面滚动距离的高度时候，往往有不同的获取方式，而且不同的属性浏览器支持稍有差别：

pageYOffset：属window对象，IE9+、Firefox、Chrome、Opera均支持该方式获取页面滚动敢赌值，并且会忽略DOCTYPE定义规则。

```window.pageYOffset```

scrollY：属于window对象，Firefox、Chrome、Opera均支持，IE不支持，忽略DOCTYPE定义规则。

```window.scrollY```

页面如果未定义DOCTYPE文档头，所有浏览器都支持docume.body.scrollTop属性获取滚动高度。

```document.body.scrollTop```

如果页面定义了DOCTYPE文档头，那么HTML元素上的scrollTop属性在IE、Firefox、Opera（presto内核）下都可以获取滚动高度值，而在Chrome和Safari下其值为0。

```document.documentElement.scrollTop; //Chrome,Safari下为0```

此在获取页面滚动高度的时候优先考虑使用 window.pageYOffset 然后在使用scrollTop。

 ```javascript
 var _scrollLeft = window.scrollX || window.pageXOffset || document.documentElement.scrollLeft
     var_scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
```
