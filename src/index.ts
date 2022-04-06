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

/* 类型推断 */
// 从右往左 根据值推断变量类型
// let a: number
let a = 1;
// let b: string[]
let b = ['a'];
// let c: (string | number)[]
let c = [1, 'abc'];
// let d: (val?: number) => number
let d = (val = 1) => val;

// 从左往右 根据变量推断值类型
// (property) onkeydown: (((this: GlobalEventHandlers, ev: KeyboardEvent) => any) & ((this: Window, ev: KeyboardEvent) => any)) | null // 看不懂 喵喵喵
window.onkeydown = (even) => {

}

// 类型断言
interface Foo {
    bar: number
}
let foo = {} as Foo; // 不推荐 有可能会楼下某些属性 推荐下面的写法
let foo1: Foo = {
    bar: 1
}
// 类型“{}”上不存在属性“bar”。
foo.bar = 1;

/* 
 * 类型保护机制
 * ts能够在特定的区块中保证变量属于某个确定的类型
 * 可以在次区块中放心的引用类型的属性 或者调用此类型的方法
*/
enum Type { Strong, Week };

class Java {
    helloJava(){
        console.log('hello Java');
    }
    java: any
}

class JavaScript {
    helloJavaScript(){
        console.log('hello JavaScript');
    }
    javaScript: any
}

// 类型保护函数
function isJava(lang: Java | JavaScript): lang is Java {
    return (lang as Java).helloJava !== undefined;
}
function getLanguage(type: Type, x: string | number){
    let lang = type === Type.Strong ? new Java() : new JavaScript();
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
    if(isJava(lang)){
        lang.helloJava();
    }else {
        lang.helloJavaScript();
    }
    return lang;
}
getLanguage(Type.Strong, 'abc');

/* 交叉类型 */
// 将多个类型合并为一个类型 新类型具有所有类型的特性
interface DogInterface {
    r: number,
    run(): void
}
interface CatInterface {
    r: number,
    jump(): void
}
// 这个变量需满足两个接口的方法
let pet: DogInterface | CatInterface = {
    r: 1,
    run() {},
    jump() {}
}

/* 联合类型 */
// 类型不确定 可以为多个类型的一个
let lianHe: string | number = 1;
/* 自变量联合类型 */
// 限定变量的类型而且还需要限定变量的取值在某一个特定的范围内
let g: 1 | 2 | 3 = 1;
let h: 'a' | 'b' | 'c' = 'a';

/* 对象的联合类型 */
// 如果一个变量是联合类型的话 在类型未确定的情况下 那么会取这个联合类型的共有成员
// 在类型未确定的情况下取所有类型的交集 而非并集

/* 可区分的联合类型 */
// 利用两种类型的相同属性来创建不同类型的保护区块
interface Square {
    kind: 'square',
    size: number
}
interface Rectangle {
    kind: 'rectangle',
    width: number,
    height: number
}
interface Circle {
    kind: 'circle',
    r: number
}

type Shape = Square | Rectangle | Circle;
function area(s: Shape) {
    switch(s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.width * s.height;
        case "circle":
            return Math.PI * s.r;
        default:
            return ((e: never) => { throw new Error(e) })(s)
    }
}
console.log(area({ kind: 'circle', r: 2 }));

/* 索引类型 */
// 索引类型的查询操作符 keyof T （类型T的所有公共属性的字面量的联合类型
interface KeyObj {
    a: number,
    b: number
}
// let key: "a" | "b"
let key: keyof KeyObj;

// 索引访问操作符 T[K]
// 对象T的属性K所代表的的类型
let value: KeyObj['a']

// 泛型约束 T extends U
// 泛型变量可以通过继承某个类型或者某个属性

/* 示例 */
let indexsType = {
    a: 1,
    b: 2,
    c: 3
}
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
function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key])
};
console.log(getValues(indexsType, ['b', 'a']));
// 两个undefined 查找没有的属性并不会报错
// console.log(getValues(indexsType, ['f', 'd']));


/* 映射类型 */
// 可以从一个旧的类型来生成一个新的类型 比如: 把一个类型中的所有属性变成只读
// 3个同态 只会作用于obj属性而不会引入新的属性
interface Obj1 {
    a: number,
    b: string, 
    c: boolean
}
// 创建只读
type ReadonlyObj = Readonly<Obj1>;
// 创建可选
type PartialObj = Partial<Obj1>;
// 抽取所选属性
type PickObj = Pick<Obj1, 'a' | 'b'>;

// 非同态 会创建一些新的属性
// 映射类型是预先定义的泛型接口 通常还会结合索引类型获取对象的属性和属性值 从而将一个对象映射成我们想要的结果
type RecordObj = Record<'x' | 'y', Obj1>;


/* 条件类型 */
// 条件类型使类型具有不唯一性 同样也增加了语言的灵活性
// T extends U ? X : Y
type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";

/* 根据上面的推断可以得出对应的类型 */
// type T1 = "string"
type T1 = TypeName<string>;
// type T2 = "object"
type T2 = TypeName<string[]>;

/* 三元式的条件类型 */
// (A | B) extends U ? X : Y
// 拆解：(A extends U ? X : Y) | (B extends U ? X : Y)

// type T3 = "string" | "object"
type T3 = TypeName<string | string[]>;

// 类型的过滤
type Diff<T, U> = T extends U ? never : T;
type T4 = Diff<"a" | "b" | "c", "a" | "e">;
// Diff<"a", "a" | "e"> | Diff<"b", "a" | "e"> | Diff<"c", "a" | "e">
// never | "b" | "c"
// "b" | "c"

// 进一步扩展
type NotNull<T> = Diff<T, undefined | null>;
type T5 = NotNull<string | number | undefined | null>

/* 更多可通过类库查看 */
// Exclude<T, U>
// NonNullable<T>

// Extract<T, U>
type T6 = Extract<"a" | "b" | "c", "a" | "e">
// ReturnType<T>
type T7 = ReturnType<() => string>
