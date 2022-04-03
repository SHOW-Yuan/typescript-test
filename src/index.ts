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
let funn = (x: number, y: string): string => x + y;
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
str3 = 'qwe';
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
    Rose = 1,
    Jack,
    Guest
}
console.log(Role);

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

/* interface 接口 */
interface List {
    readonly id: number, // 只读属性 不可更改
    title: string,
    age?: number // 这个属性可有可无

    // [x: string]: any // 字符串索引方法 解决不知道有多少参数的问题
}

interface Result {
    data: List[]
}

function render(result: Result){
    result.data.forEach((val)=>{
        console.log(val.id + ': ' + val.title);
        if(val.age){
            console.log(val.age);
        }

        // val.id++
    })
}

let result = {
    data: [
        { id: 1, title: '接口学习', name: 'zs' },
        { id: 2, title: '接口练习' },
    ]
}
render(result);
// render({
//     data: [
//         { id: 1, title: '接口学习', name: 'zs' },
//         { id: 2, title: '接口练习' },
//     ]
// } as Result) // 类型断言的方式

interface StringArray { // 字符串索引
    // 用任意的数字去索引StringArray都可以得到一个string
    [index: number]: string
}
let arr: StringArray = ['1', '2'];

interface Names {
    // 用任意的字符串类型去索引Names都可以得到一个string
    [x: string]: string
}
let names: Names = {
    name: '张三',
    name1: '李四'
}

// 函数类型接口
let add = (a: number, b: number) => a + b;
interface Add { // 相当于上面这种形式
    (a: number, b: number): number
}
let add1: Add = (a, b) => a + b;

// 类型别名 （更简单的方式
type Add1 = (a: number, b: number) => number;

// 混合类型接口
interface Lib {
    (): void,
    version: string,
    doSomething(): void
}
let lib: Lib = (() => {}) as Lib; // 类型断言
lib.version = '1.0';
lib.doSomething = () => {}

// 或者定义成函数
function getLib(){
    let lib: Lib = (() => {}) as Lib; // 类型断言
    lib.version = '1.0';
    lib.doSomething = () => {};
    return lib;
}

/* 
 * 函数相关知识点梳理
*/

// 函数定义
function qwe(a: number, b: number){
    return a + b;
}
console.log('fun1: ', qwe(1, 2));
// 函数类型声明
let qwe1: (a: number, b: number) => number;
type qwe2 = (a: number, b:number) => number;
interface qwe3 {
    (a: number, b:number): number
}

let qwe4 = (a: number, b?:number) => {
    return b ? a + b : a;
}
console.log('qwe4: ', qwe4(2, 3));

let qwe5 = (a: number, b = 1, c: number, d = 1) => {
    return a + b + c + d;
}
console.log(qwe5(1,undefined,3));

// 剩余参数
function qwe6(a: number, ...rest: number[]){
    return a + rest.reduce((pre, cur) => pre + cur);
}
console.log(qwe6(1, 2, 3, 4, 5));

// 函数重载
function qwe7(...rest: number[]): number;
function qwe7(...rest: string[]): string;
function qwe7(...rest: any[]): any {
    let first = rest[0];
    if(typeof first === 'string'){
        return rest.join(',');
    }
    if(typeof first === 'number'){
        return rest.reduce((pre, cur)=> pre + cur);
    }
}
console.log(qwe7(1, 2, 3, 4, 5));
console.log(qwe7('a', 'b', 'c'));

/* <T> 泛型 */
function log<T>(val: T): T{
    console.log(val);
    return val;
}
// 使用的两种方式
log<number[]>([1, 2, 3]); // 直接指定类型
log('qwe'); // 让ts根据类型推断

// 泛型函数类型
type Log = <T>(val: T) => T;
let myLog: Log = log

interface Log1 {
    <T>(val: T): T // 这样只是约束了这个函数
}
let result2: Log1 = log

// 泛型类
class Log2<T> {
    // static id: T // 不能给静态成员设置为泛型
    run(val: T){
        console.log(val);
        return val;
    }
}
let log2 = new Log2<number>();
log2.run(1);
// 不传就可以是任意类型
let log3 = new Log2();
log3.run({});

// 泛型约束
interface Length {
    length: number
}
function log4<T extends Length>(val: T): T {
    console.log(val.length);
    return val;
}
log4([1]);
log4('123');
log4({length: 1});