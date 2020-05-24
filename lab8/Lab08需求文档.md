# Lab8设计文档

## 轮播图实现

前三个任务中都涉及到图片的切换，因此需要一个全局变量index来记录当前图片的下标。

####任务一：

注意到wrap中的style：left为-600px，container的overflow: hidden，而wrap的总宽度为4200px，
因此需要调整style中left的数值，以600px为一单位来切换图片。

使用`document.querySelector()`获取左右箭头，写两个函数nextPic(),lastPic()分别用来向前向后调图片。
注意到**图片组的顺序是5123451**，因此在第二个图片1实际为-3600px，此时需要额外判断让它跳转到图片2；
同理，第一个图片5实际为0px，需要让它跳转到图片4，即-2400px.

方法changeDot()使用循环先统一除去小圆点的类名，再对图片显示处对应的小圆点设置类名为“on”

####任务二：

使用`window.addEventListener`在页面加载成功时激发autoPlay函数，其中设置了nextPic函数执行的时间间隔。

当鼠标放在container区域，onmouseenter事件被触发，时间间隔被消除。当鼠标移开，onmouseleave事件触发，autoPlay继续执行。

####任务三：

使用函数闭包和循环对小圆点设置onclick触发的函数。
HTML中的图片5，1，2，3，4，5，1分别对应index：4，0，1，2，3，4.因此对于第一个5和最后一个1需要特别设置。





