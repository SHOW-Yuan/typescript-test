const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        // 此配置开启后只做语言转换不做类型检查
                        // 缺点：在编译的时候不能做类型检查
                        // 解决方法：借助插件 会把检查放在独立的进程中进行
                        transpileOnly: true // 默认为false
                    }
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        }),
        new ForkTsCheckerWebpackPlugin(),
    ]
}


/* babel + ts */
// babel做类型转换 ts做语言检查

// 4种注意事项
// 1. 命名空间在babel中编译会报错 不要使用
// namespace NN {
//     export const i = 1;
// }

// 2. 类型断言的写法 在babel中使用as 不要使用<>尖括号
// let ss = {} as A
// ss.a = 1

// 3. 常量枚举 在babel中还不支持
// const enum E { A }

// 4. 默认导出 在babel中编译会报错 不要使用
// export = s

/* 如何选择ts的编译工具 */
// 1. 如果没有使用过babel 首选ts自身的编译器（可配合ts-loader使用
// 2. 如果项目中使用了babel 安装@babel/preset-typescript（可配合tsc做类型检查
// 3. 两种编译工具不要混用 这样只会增加工程的复杂度




/* 
 * 代码检查工具
 * TS中使用ESLint
*/
// 1. babel-eslint：支持使用TypeScript没有的额外的语法检查 抛弃TypeScript 不支持类型检查
// 2. typescript-eslint：基于TypeScript的AST 支持创建基于类型信息的规则（tsconfig.json

// 建议：两种底层机制不一样 不要一起使用
// Babel体系建议使用babel-lint 否则可以使用typescript-eslint


/* 
 * Jset
 * ts体系的ts-jest 和 babel体系的babel-jest
*/
