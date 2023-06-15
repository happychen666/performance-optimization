let srcollDom = document.getElementById('view');

/* 
offsetTop 是相对其 offsetParent 元素的并不是相对浏览器窗口可视区域的。
如果图片元素有 offsetParent 那么 offsetTop 是有偏差的。 所以要加上parent.offsetTop*/
function getBoundingClientTop(el) {
    let top = el.offsetTop;
    let parent = el.offsetParent;
    while (parent) {
        top += parent.offsetTop;
        parent = parent.offsetParent;
    }
    return top;
}

function lazyload() {
    var lazyImages = document.querySelectorAll('.lazy-image');
    console.log('------');

    lazyImages.forEach(function (image) {
        // offsetTop和后面的scrollTop+clientHeight是针对不同的元素，前者是图片，后者是文档对象
        // if (getBoundingClientTop(image) <= document.documentElement.clientHeight + document.documentElement.scrollTop)
        console.log(getBoundingClientTop(image), getBoundingClientTop(srcollDom), srcollDom.clientHeight, srcollDom.scrollTop);
        if (getBoundingClientTop(image) - getBoundingClientTop(srcollDom) <= srcollDom.clientHeight + srcollDom.scrollTop) {
            image.src = image.getAttribute('data-src');
            // src 设置完后移除 data-src 属性来避免重复设置 src
            // image.removeAttribute('data-src');这样写会有bug
            image.className = '';
        }
    });
}

lazyload();
srcollDom.addEventListener('scroll', lazyload);
srcollDom.addEventListener('resize', lazyload);
srcollDom.addEventListener('orientationChange', lazyload);
