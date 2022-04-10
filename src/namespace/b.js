// 三斜线指令
/// <reference path="a.ts" />
// 使用相同的Shape 可以和a.ts共享同一命名空间
var Shape;
(function (Shape) {
    function square(x) {
        return x * x;
    }
    Shape.square = square;
})(Shape || (Shape = {}));
console.log(Shape.cricle(1));
console.log(Shape.square(1));
// 注：命名空间和模块不要混用 命名空间最好在一个全局的环境中使用
// 被编译成立即执行函数 这个函数创建了一个闭包 在闭包内有一些私有成员和被导出的成员 被导出的成员会挂载在全局变量下
// 设置别名
var cricle = Shape.cricle;
console.log(cricle(1));
