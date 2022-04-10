// 多个相同命名的声明 合并为一个声明
interface Z {
    x: number;
    foo(bar: number): number; // 5
    foo(bar: 'a'): number; // 2
}
interface Z {
    y: number;
    foo(bar: string): string; // 3
    foo(bar: number[]): number[]; // 4
    foo(bar: 'b'): number; // 1
}

let merge: Z = {
    x: 1,
    y: 1,
    foo(bar: any){
        return bar;
    }
}

// 全局模块的话 两个接口甚至可以不在同一文件中 也可以进行合并
// 保证接口非函数成员的唯一性 如果不唯一那类型要相同

/* 函数成员 会被定义为函数重载 编译器会根据顺序匹配 */
// 1. 接口内部按声明的顺序匹配 从上到下
// 2. 接口之间后面的接口会排在前面
// 3. 如果函数的参数是一个函数自变量 这个声明会被提升到接口的最顶端


/* 命名空间和函数的合并 */
// 相当给函数添加了一个属性
function Lib(){}
namespace Lib {
    export let version = '1.0';
}
console.log(Lib.version);

/* 和类进行声明合并 */
// 相当于给类添加了静态属性
class C {};
namespace C {
    export let state = 1;
}
console.log(C.state);

/* 和枚举进行声明合并 */
enum Color {
    Red,
    Blue,
    Yellow,
}
namespace Color {
    export function mix() {};
}
console.log(Color);


// 注：如果命名空间要和函数或者类进行声明合并 要放在函数和类的后面