var hello = 'Hello World!';
document.querySelectorAll('.app')[0].innerHTML = hello;
/* 类型定义 */
// string
var str = 'hello';
// number
var num = 18;
// 数组
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
var arr3 = [1, 2, '3'];
// 元祖
var tuple = [1, '2'];
// 函数
var fun = function (x, y) { return x + y; };
var funn = function (x, y) { return x + y; };
// 对象
var obj = { name: 'zs', age: 18 };
obj.name = 'ls';
// Symbol
var s1 = Symbol();
var s2 = Symbol();
console.log(s1 === s2);
// undefined null
var un = undefined;
var nu = null;
var str2 = null;
// void 没有任何返回值的函数
var noReturn = function () { };
// any 可以是任意类型的值
var str3 = 123;
str3 = 'qwe';
// never 永远不会有返回值的函数（也可以说是函数执行不到结尾
var fun2 = function () {
    throw new Error("报错");
};
var fun3 = function () {
    while (true) { }
    ;
};
/* enum枚举 */
// 数字枚举
var Role;
(function (Role) {
    Role[Role["Rose"] = 1] = "Rose";
    Role[Role["Jack"] = 2] = "Jack";
    Role[Role["Guest"] = 3] = "Guest";
})(Role || (Role = {}));
console.log(Role);
// 字符串枚举
var Massage;
(function (Massage) {
    Massage["Success"] = "\u8BF7\u6C42\u6210\u529F...";
    Massage["Error"] = "\u8BF7\u6C42\u5931\u8D25\uFF01";
})(Massage || (Massage = {}));
// 异构枚举 --- 指数字枚举和字符串枚举混合（不推荐使用
var Answer;
(function (Answer) {
    Answer[Answer["N"] = 0] = "N";
    Answer["S"] = "\u5B57\u7B26\u4E32";
})(Answer || (Answer = {}));
// 枚举成员
var Char;
(function (Char) {
    // const
    Char[Char["a"] = 0] = "a";
    Char[Char["b"] = 0] = "b";
    Char[Char["c"] = 3] = "c";
    // computed
    Char[Char["d"] = Math.random()] = "d";
    Char[Char["e"] = '123'.length] = "e";
    Char[Char["f"] = 4] = "f";
})(Char || (Char = {}));
// 枚举类型
var E;
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = 1] = "b";
})(E || (E = {}));
;
var F;
(function (F) {
    F[F["a"] = 1] = "a";
    F[F["b"] = 2] = "b";
})(F || (F = {}));
;
var G;
(function (G) {
    G["a"] = "a";
    G["b"] = "b";
})(G || (G = {}));
;
var e = 3;
var f = 3;
// e === f // 不可比较
var e1 = 2;
var e2 = 1;
var e3 = 1;
// e1 === e2 // 不可比较
// e1 === e3 // 可以比较
var g1 = G.b;
var g2 = G.a;
function render(result) {
    result.data.forEach(function (val) {
        console.log(val.id + ': ' + val.title);
        if (val.age) {
            console.log(val.age);
        }
        // val.id++
    });
}
var result = {
    data: [
        { id: 1, title: '接口学习', name: 'zs' },
        { id: 2, title: '接口练习' },
    ]
};
render(result);
var arr = ['1', '2'];
var names = {
    name: '张三',
    name1: '李四'
};
// 函数类型接口
var add = function (a, b) { return a + b; };
var add1 = function (a, b) { return a + b; };
var lib = (function () { }); // 类型断言
lib.version = '1.0';
lib.doSomething = function () { };
// 或者定义成函数
function getLib() {
    var lib = (function () { }); // 类型断言
    lib.version = '1.0';
    lib.doSomething = function () { };
    return lib;
}
/*
 * 函数相关知识点梳理
*/
// 函数定义
function qwe(a, b) {
    return a + b;
}
console.log('fun1: ', qwe(1, 2));
// 函数类型声明
var qwe1;
var qwe4 = function (a, b) {
    return b ? a + b : a;
};
console.log('qwe4: ', qwe4(2, 3));
var qwe5 = function (a, b, c, d) {
    if (b === void 0) { b = 1; }
    if (d === void 0) { d = 1; }
    return a + b + c + d;
};
console.log(qwe5(1, undefined, 3));
// 剩余参数
function qwe6(a) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return a + rest.reduce(function (pre, cur) { return pre + cur; });
}
console.log(qwe6(1, 2, 3, 4, 5));
function qwe7() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var first = rest[0];
    if (typeof first === 'string') {
        return rest.join(',');
    }
    if (typeof first === 'number') {
        return rest.reduce(function (pre, cur) { return pre + cur; });
    }
}
console.log(qwe7(1, 2, 3, 4, 5));
console.log(qwe7('a', 'b', 'c'));
/* <T> 泛型 */
function log(val) {
    console.log(val);
    return val;
}
// 使用的两种方式
log([1, 2, 3]); // 直接指定类型
log('qwe'); // 让ts根据类型推断
var myLog = log;
var result2 = log;
// 泛型类
var Log2 = /** @class */ (function () {
    function Log2() {
    }
    // static id: T // 不能给静态成员设置为泛型
    Log2.prototype.run = function (val) {
        console.log(val);
        return val;
    };
    return Log2;
}());
var log2 = new Log2();
log2.run(1);
// 不传就可以是任意类型
var log3 = new Log2();
log3.run({});
function log4(val) {
    console.log(val.length);
    return val;
}
log4([1]);
log4('123');
log4({ length: 1 });
/* 类型推断 */
// 从右往左 根据值推断变量类型
// let a: number
var a = 1;
// let b: string[]
var b = ['a'];
// let c: (string | number)[]
var c = [1, 'abc'];
// let d: (val?: number) => number
var d = function (val) {
    if (val === void 0) { val = 1; }
    return val;
};
// 从左往右 根据变量推断值类型
// (property) onkeydown: (((this: GlobalEventHandlers, ev: KeyboardEvent) => any) & ((this: Window, ev: KeyboardEvent) => any)) | null // 看不懂 喵喵喵
window.onkeydown = function (even) {
};
var foo = {}; // 不推荐 有可能会楼下某些属性 推荐下面的写法
var foo1 = {
    bar: 1
};
// 类型“{}”上不存在属性“bar”。
foo.bar = 1;
/*
 * 类型保护机制
 * ts能够在特定的区块中保证变量属于某个确定的类型
 * 可以在次区块中放心的引用类型的属性 或者调用此类型的方法
*/
var Type;
(function (Type) {
    Type[Type["Strong"] = 0] = "Strong";
    Type[Type["Week"] = 1] = "Week";
})(Type || (Type = {}));
;
var Java = /** @class */ (function () {
    function Java() {
    }
    Java.prototype.helloJava = function () {
        console.log('hello Java');
    };
    return Java;
}());
var JavaScript = /** @class */ (function () {
    function JavaScript() {
    }
    JavaScript.prototype.helloJavaScript = function () {
        console.log('hello JavaScript');
    };
    return JavaScript;
}());
// 类型保护函数
function isJava(lang) {
    return lang.helloJava !== undefined;
}
function getLanguage(type, x) {
    var lang = type === Type.Strong ? new Java() : new JavaScript();
    // 类型断言的方式 代码过于沉重、可读性差
    // if((lang as Java).helloJava){
    //     (lang as Java).helloJava();
    // }else {
    //     (lang as JavaScript).helloJavaScript();
    // }
    // instanceof
    // if(lang instanceof Java){
    //     lang.helloJava();
    // }else {
    //     lang.helloJavaScript();
    // }
    // in
    // if('java' in lang){
    //     lang.helloJava();
    // }else {
    //     lang.helloJavaScript();
    // }
    // typeof
    // if(typeof x === 'string'){
    //     x.length
    // }else {
    //     x.toFixed();
    // }
    // 类型保护函数
    if (isJava(lang)) {
        lang.helloJava();
    }
    else {
        lang.helloJavaScript();
    }
    return lang;
}
getLanguage(Type.Strong, 'abc');
// 这个变量需满足两个接口的方法
var pet = {
    r: 1,
    run: function () { },
    jump: function () { }
};
/* 联合类型 */
// 类型不确定 可以为多个类型的一个
var lianHe = 1;
/* 自变量联合类型 */
// 限定变量的类型而且还需要限定变量的取值在某一个特定的范围内
var g = 1;
var h = 'a';
function area(s) {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.width * s.height;
        case "circle":
            return Math.PI * s.r;
        default:
            return (function (e) { throw new Error(e); })(s);
    }
}
console.log(area({ kind: 'circle', r: 2 }));
// let key: "a" | "b"
var key;
// 索引访问操作符 T[K]
// 对象T的属性K所代表的的类型
var value;
// 泛型约束 T extends U
// 泛型变量可以通过继承某个类型或者某个属性
/* 示例 */
var indexsType = {
    a: 1,
    b: 2,
    c: 3
};
// function getValues(obj: any, keys: string[]) {
//     return keys.map(key => obj[key])
// };
// 改造后的方法
/*
 * keys里的元素一定是obj里的属性
 * <T, K> T约束obj K约束keys
 * <T, K extends keyof T> 给K添加约束 让他继承T的所有类型
 * : T[K][] 返回的是一个数组 数组的元素的类型就是属性K对应的类型
*/
function getValues(obj, keys) {
    return keys.map(function (key) { return obj[key]; });
}
;
console.log(getValues(indexsType, ['b', 'a']));
