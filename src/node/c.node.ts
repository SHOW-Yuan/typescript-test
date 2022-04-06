let a1 = require('./a.node');
let b1 = require('./b.node');
// let c1 = require('../es6/c');

// console.log(a1);
// console.log(b1);

// 在commonjs模块导入es6模块的默认导出是不行滴
// c1();
// console.log(c1);

// {
//     a: 1,
//     b: 2,
//     c: 3,
//     f: [Function: f],
//     G: [Function: g],
//     hello: [Getter],
//     default: [Function: default_1]
// }

// 解决上面问题的兼容处理
// tsconfig.json中esModuleInterop: true可以使用es6的模块导入语法
import d1 from '../es6/d';
// esModuleInterop: false 则只能使用下面的语法
// import d1 = require('../es6/d');
d1()
