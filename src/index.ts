let hello: string = 'Hello World!';

document.querySelectorAll('.app')[0].innerHTML = hello;

/* 类型定义 */
// string
let str: string = 'hello';
// number
let num: number = 18;
// 数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];
let arr3: Array<number | string> = [1, 2, '3'];
// 元祖
let tuple: [number, string] = [1, '2'];
// 函数
let fun = (x: number, y:number) => x + y;
// 对象
let obj: { name: string, age: number } = {name: 'zs', age: 18};
obj.name = 'ls';
// Symbol
let s1: symbol = Symbol();
let s2 = Symbol();
console.log(s1 === s2);
// undefined null
let un: undefined = undefined;
let nu: null = null;
let str2: string | undefined | null = null;
// void 没有任何返回值的函数
let noReturn = () => {}
// any 可以是任意类型的值
let str3: any = 123;
// never 永远不会有返回值的函数（也可以说是函数执行不到结尾
let fun2 = () => {
    throw new Error("报错");
}
let fun3 = () => {
    while(true){};
}


/* enum枚举 */
// 数字枚举
enum Role {
    Rose,
    Jack,
    Guest
}
// 字符串枚举
enum Massage {
    Success = '请求成功...',
    Error = '请求失败！'
}
// 异构枚举 --- 指数字枚举和字符串枚举混合（不推荐使用
enum Answer {
    N,
    S = '字符串'
}
// 枚举成员
enum Char {
    // const
    a,
    b = Char.a,
    c = 1 + 2,
    // computed
    d = Math.random(),
    e = '123'.length,
    f = 4
}
// 枚举类型
enum E { a, b };
enum F { a = 1, b = 2 };
enum G { a = 'a', b = 'b' };

let e: E = 3;
let f: F = 3;
// e === f // 不可比较

let e1: E.a = 2;
let e2: E.b = 1;
let e3: E.a = 1;
// e1 === e2 // 不可比较
// e1 === e3 // 可以比较

let g1: G = G.b;
let g2: G.a = G.a;