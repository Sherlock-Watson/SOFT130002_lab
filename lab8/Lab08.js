
/*请在该区域内声明或者获取所要使用的全局变量*/
/********************************************begin************************************/

/*Global Variable Area */
//两个箭头
let prev = document.getElementsByClassName("arrow_left")[0];
let next = document.getElementsByClassName("arrow_right")[0];
let wrap = document.getElementsByClassName("wrap")[0];
let container = document.getElementsByClassName("container")[0];
let buttons = document.getElementsByTagName("span");
//自动播放设置
let myVar = null;

/*********************************************end*************************************/



/* 任务一
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击左箭头prev和右箭头next的时候，可以切换到前一张图片和下一张图片。（左右箭头为html中的a标签）
 * ②每切换一张图片，右下角的数字标记对应变化。
 *      如：一开始，第1张图片显示出来，右下角的1-5的数值中，数值1位红色，2-4为绿色，表示当前显示第1张图片。
 *      点击next箭头，图片切换到第2张，同时，右下角红色数值从1切换为2，数值1,3,4,5为绿色。
 * ③当当前图片为第1张时，点击prev箭头，切换到第5张图片，且数值5置为红色。
 * 当当前图片为第5张时，点击next箭头，切换到第1张图片，且数值1置为红色。
 * ④切换图片的过程不要求，可直接切换，也可动画切换，但要求保证一定的切换动画合理性，不能出去明显的衔接不当。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
//箭头事件
next.addEventListener("click", nextImg, false);
prev.addEventListener("click", lastImg, false);

//查找当前在播图片
function imgNow() {
    let index;
    for (let j = 0; j < 5; j++) {
        if (buttons[j].getAttribute("class") === "on") {
            index = j;
            break;
        }
    }
    return index;
}

//箭头事件内部的函数
function nextImg() {
    let coordinate = parseInt(wrap.style.left);
    if (coordinate !== -3600) {
        wrap.style.left = coordinate - 600 + "px";
    }
    else
    {
        wrap.style.left = -1200 + "px";
    }
    nextBtn();
}

function lastImg() {
    let coordinate = parseInt(wrap.style.left);
    if (coordinate !== 0) {
        wrap.style.left = coordinate + 600 + "px";
    }
    else
    {
        wrap.style.left = -4800 + "px";
    }
    lastBtn();
}

function nextBtn() {
    let i = imgNow();
    buttons[i].setAttribute("class", "");
    if (i < 4) {
        i++;
    }
    else
    {
        i = 0;
    }
    buttons[i].setAttribute("class", "on");
}

function lastBtn() {
    let i = imgNow();
    buttons[i].setAttribute("class", "");
    if (i > 0) {
        i--;
    }
    else
    {
        i = 4;
    }
    buttons[i].setAttribute("class", "on");
}


/*********************************************end*************************************/



/* 任务二
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①轮播可以自动播放，切换图片间隔为2s，每一次切换的效果与点击next箭头的效果一致。
 * ②当鼠标移入轮播区域内时，停止自动播放。
 * ③当鼠标不在轮播区域内时，开始自动播放。
 * ④页面刚加载完成时，如果鼠标不在轮播区域内，自动开始自动播放；否则，等待直到鼠标移出轮播区域，再进行自动播放。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
//自动播放
function play() {
    myVar = setInterval(nextImg, 2000);
}
function stopPlay() {
    clearInterval(myVar);
}
play();
container.addEventListener("mouseout",play, false);
container.addEventListener("mouseover",stopPlay, false);


/*********************************************end*************************************/



/* 任务三
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击右下角的任意一个数值，能够切换到对应图片，且相应数值变为红色。
 * ②进行①操作过后，是否自动播放，其规则与上一个任务一致。
 * ③本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
//按钮事件
for (let i = 0; i < 5; i++) {
    buttons[i].addEventListener("click", showImg, false);
}
//按钮事件内部的函数
function showImg() {
    //没考虑浏览器兼容性哈
    if (this.getAttribute("class") !== "on") {
        let index;
        for (let j = 0; j < 5; j++) {
            buttons[j].setAttribute("class", "");
        }
        this.setAttribute("class", "on");
        index = imgNow();
        wrap.style.left = (index + 1) * -600 + "px";
    }
}
/*********************************************end*************************************/


/*任务四
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击某一非表头的单元格，可以编辑其内容，编辑完毕后点击其他部位，可以在界面上显示修改后的内容。
 * ②点击单元格后，光标自动定位于单元格的首个字符或者汉字前。
 * ③本部分可以使用jQuery，也可以使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
//在页面加载时候，就使td节点具有click点击能力
// $(document).ready(function() {
//     //给所有td添加点击事件
//     let tdNods = $("td");
//     tdNods.click(tdClick);//点击调用tdClick方法
//     // $("td").click(function(){
//     //     alert("点击测试");
//     // });
// });
//
// function tdClick() {
//     //点击时将文本框内容保存、插入输入框、将文字写入输入框
//     // 将td的文本内容保存
//     let td = $(this);
//     let trChildren = td.parent("tr").children();
//     let tdText = td.text();
//     let content = td.html();//未修改的值
//     // 将td的内容清空
//     td.empty();
//     //新建一个输入框
//     let input = $("<input>");
//     // 将保存的文本内容赋值给输入框
//     input.val(tdText);
//     //input.attr({"value": tdText});
//     input.width(td.width());
//     input.css("font-size", "1em");
//     //input.focus();
//     setCursorPosition(input,0);
//     input.select()
//
//     // td.html("<input type = 'text' class = 'currentInput' >");
//     // let input = $('.currentInput');
//     // input.attr({"value": content});
//     // //input聚焦
//     // input.focus();
//     // 将输入框添加到td中
//     td.append(input);
//     // 双击获取基础数据
//
//     input.blur(function() {
//         // 将输入框的文本保存
//         let input = $(this);
//         let inputText = input.val();
//         // 将td的内容，即输入框去掉,然后给td赋值
//         let td = input.parent("td");
//         td.html(inputText);//修改后的值
//         // 让td重新拥有点击事件
//         // if (inputText !== tdText){
//         //     //如果点击的单元格内容发生了变化，则设置按钮为可点击
//         //     td.parent("tr").find("#edit").removeAttr("disabled");
//         // }
//         td.click(tdClick);
//     });
//
//     // 将jquery对象转化为DOM对象
//     let inputDom = input.get(0);
//     inputDom.select();
//     // 将td的点击事件移除
//     td.unbind("click");
// }
//
// function setCursorPosition(elem, index) {
//     let val = elem.val();
//     let len = val.length;
// // 超过文本长度直接返回
//     if (len < index)
//     //     return
//     // setTimeout(function() {
//         elem.focus()
//         if (elem[0].setSelectionRange) { // 标准浏览器
//             elem[0].setSelectionRange(index, index)
//         } else { // IE9-
//             let range = elem[0].createTextRange()
//             range.moveStart("character", -len)
//             range.moveEnd("character", -len)
//             range.moveStart("character", index)
//             range.moveEnd("character", 0)
//             range.select()
//         }
//     // }, 10)
// }
$(document).ready(function() {
    //设置td的点击事件
    $("td").click(function() {
        let td = $(this);
        let content = td.html();
        //将td变成一个input进行输入
        td.html("<input type = 'text' class = 'currentInput' >");
        let input = $('.currentInput');
        input.attr({"value": content});
        //input聚焦
        input.focus();
        //将input的点击事件设置成false
        input.width(td.width());
        input.click(function() {
            return false;
        });
        //失去焦点时将input变回文本
        input.blur(function() {
            let newContent = input.val();
            td.html(newContent);
        });
    });
});
/*********************************************end*************************************/