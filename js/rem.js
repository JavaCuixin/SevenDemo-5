
(function(win) {
        var doc = win.document;
        var docEl = doc.documentElement;
        var tid;
        //动态设置像素比
        var iScale = 1/window.devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale='+iScale+',minimum-scale='+ iScale+',maximum-scale='+iScale+'">');

     //动态设置body字体大小
  var dpr = window.devicePixelRatio || 1
  function setBodyFontSize () {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize();

        //为html设置font-size大小
        function refreshRem() {
                //获取可视区
                var width = docEl.getBoundingClientRect().width;
                var rem = width /16;

                docEl.style.fontSize = rem + 'px';
                //rem基准以font-size:40px来进行换算
        }
        //onresize事件页面改变大小时
        win.addEventListener('resize', function() {
                clearTimeout(tid);
                tid = setTimeout(refreshRem, 1);
        }, false);
        //onpageshow事件,有缓存时不会加载缓存数据,会加载实时数据
        win.addEventListener('pageshow', function(e) {
                if (e.persisted) {
                        clearTimeout(tid);
                        tid = setTimeout(refreshRem, 1);
                }
        }, false);
        refreshRem();
})(window);