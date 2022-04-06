import { a, b, c, hello } from './a'; // 批量导入
import { P } from './a'; // 导入接口
import { f as F } from './a'; // 导入时起别名
import * as All from './a'; // 导入模块种的所有成员 并绑定到All上
import myFunction from './a'; // 不加{} 导入默认

let p: P = {
    x: 1,
    y: 1
}

console.log(a);
F('嘿嘿嘿');
console.log(All);
myFunction();
console.log(hello);
