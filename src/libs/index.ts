// 引入外部类库 以及编写声明文件
// 一般分为3类：全局类库 模块类库 umd类库
// 引入非TS编写的类库 要为这个类库编写一个声明文件 对外暴露他的API

// 查询类库是否已有声明文件 microsoft.github.io/TypeSearch/
// 如果没有就需要自己写一个（为社区贡献的好机会 喵喵喵

// 三种类库声明文件的写法

// declare 为一个外部变量提供类型声明



// 模块类库


// udm库
// 专为umd库设置的语句 umd库中不可缺少的
// export as namespace umdLib
// umd库也是可以全局引入的 如果提示报错 可以在tsconfig.json中配置



/* 两种插件 */
// 模块插件和全局插件

// 为外部类添加自定义的方法 模块化的插件
import m from 'moment';
declare module 'moment' {
    export function myFun(): void;
}
m.myFun = () => {};

// 给全局的类库添加方法 会造成全局的污染 一般不建议这么做
declare global {
    namespace globalLib {
        function doAny(): void;
    }
}

// 声明文件的依赖
// 依赖分为两种：模块依赖 和 路径依赖
/// <reference types="xxx" />
/// <reference path="xxx.d.ts" />