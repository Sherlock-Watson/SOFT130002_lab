/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/
function testTime() {
    function counter() {
        let n = 0;
        return {
            count: function () {
                return n++;
            },
            current: function () {
                return n;
            }
        }
    }

    function double() {
        let n = 1;
        return function () {
            return n *= 2;
        }
    }

    let myVar = setInterval(function () {
        timeTest()
    }, 5000);
    console.log(1);
    let counter1 = counter();
    let double1 = double();

    function timeTest() {
        if (new Date().getSeconds() >= 5 && counter1.current() < 10) {
            console.log(double1());
            counter1.count();
        } else {
            clearInterval(myVar);
            if (counter1.current() < 10 && new Date().getSeconds() < 5) {
                console.log("1 minute, stop in advance.")
            }
        }
    }
}
//testTime();

/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/
function testMail(telephone,mail) {
    let telPtn = /^[1]([3-9])[0-9]{9}$/;
    let mailPtn = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    let telResult = "wrong";
    let mailResult = "wrong";
    if (telPtn.test(telephone)) {
        telResult = "right";
    }
    if (mailPtn.test(mail)) {
        mailResult = "right";
    }
    console.log("The telephone is " + telResult + " and the mail is " + mailResult + "!");
}
// testMail("13818997428", "19302010069@fudan.edu.cn");

/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
function testRedundancy(str) {
    let words = str.split(/ /g);
    let result = [];
    let add;
    let flag;
    let log;
    for (let i = 0; i < words.length - 1; i++) {
        flag = false;
        let pattern = new RegExp("^" + words[i] + "$", "i");
        if (pattern.test(words[i + 1])) {
            flag = true;
            add = words[i] + " " + words[i + 1];
            for (let j = i + 2; j < words.length; j++) {
                if (pattern.test(words[j])) {
                    add += " " + words[j];
                }
                else {
                    break;
                }
            }
        }
        if (flag) {
            result.push(add);
        }
    }
    result.sort(
        function (a, b) {
            if (a[0].toLowerCase() < b[0].toLowerCase())
                return -1;
            else
                return 1;
        }
    );
    if (result.length > 10) {
        result.length = 10;
    }
    log = new Set(result);
    console.log(log);
}
// testRedundancy("Is is the the iS is iS cost cost of of gasoline going up up and down down wow wow hey hey yeah yeah six six");


/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
function testKeyBoard(wantInput, actualInput) {
    let dif = new Set();
    let j = 0;
    for (let i = 0; i < wantInput.length; i++) {
        if (wantInput[i] === actualInput[j]) {
            j++;
        }
        else {
            dif.add(wantInput[i].toUpperCase());
        }
    }
    console.log(dif);
}
// testKeyBoard("7_This_is_a_test","_hs_s_a_es");

/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该字符串打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
function testSpecialReverse(str) {
    let words = str.split(/ /g);
    let result = "";
    words.reverse();
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "")
        result += words[i] + " ";
    }
    result = result.substring(0, result.length - 1);
    console.log(result);
}
// testSpecialReverse("    sky is blue    hello, world!");

/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/

function twoSum(nums, target) {
    let map = new Map();
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
        if (map.has(target - nums[i])) {
            result.push(map.get(target - nums[i]), map.get(nums[i]));
            console.log(result);
            result = [];
        }
    }
    /*// let map = new Map();
    let j = 1;
    let k;
    for (let i = 0; i < (nums.length * nums.length); i++) {
        if (i < nums.length) {
            // map.set([i],nums[i]);
            if (i > 0 && nums[0] + nums[i] === target) {
                console.log(new Array([0, i]));
            }
        }
        if (i >= nums.length) {
            k = i - nums.length * j;
            if (k < nums.length) {
                if (j < k) {
                    if (nums[j] + nums[k] === target)
                        console.log(new Array([j, k]));
                }

            }
            else {
                j++;
            }
        }
    }*/
}
// twoSum([1, 2, 3, 4, 1], 5);

/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出2，输入"bbbbb",输出1；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
function lengthOfLongestSubstring(str) {
    let map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (!map.has(str[i])) {}
        map.set(str[i], i);
    }
    console.log(map.size);
}
// lengthOfLongestSubstring("abbbbbb");

/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
function Country() {
    this.name = "国家";
}

function DevelopingCountry() {
    Country.call(this);
}
DevelopingCountry.prototype.sayHi = function () {
    console.log("Hi,i am a developing country.");
};

function PoorCountry() {}
PoorCountry.prototype = new Country();
PoorCountry.prototype.saySad = function () {
    console.log("I am a sad poor country.");
};

let country = new Country();
let DevelopedCountry = Object.create(country);
DevelopedCountry.sayHappy = function () {
    console.log("I am a Happy developed country.");
};

function test8() {
    let developingCountry = new DevelopingCountry();
    developingCountry.sayHi();
    let poorCountry = new PoorCountry();
    poorCountry.saySad();
    DevelopedCountry.sayHappy();
}

//test部分
console.log("第二题");
testMail("13818997428", "19302010069@fudan.edu.cn");
console.log("第三题");
testRedundancy("Is is the the iS is iS cost cost of of gasoline going up up and down down wow wow hey hey yeah yeah six six");
console.log("第四题");
testKeyBoard("7_This_is_a_test","_hs_s_a_es");
console.log("第五题");
testSpecialReverse("    sky is blue    hello, world!");
console.log("第六题");
twoSum([1, 2, 3, 4, 1], 5);
console.log("第七题");
lengthOfLongestSubstring("abbbbbb");
console.log("第八题");
test8();
console.log("第一题");
testTime();


