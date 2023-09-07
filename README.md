# element-plus-vite-starter

## 技术栈

element-plus + ts + router + pinia + unocss

## 插件网址

[unocss](https://alfred-skyblue.github.io/unocss-docs-cn/) 原子 css

## git 规范

[git 规范](https://juejin.cn/post/6844903793033756680#heading-2)
命令执行 `git cz`

## 规则

- eslint 校验  
  lint 命令用于执行 eslint 校验  
  lint:fix 命令用于执行 eslint 代码格式化

- prettier 格式化
  1. 选择默认格式化 Prettier - Code formatter (没有可从 插件里下载)
  2. `npm install prettier -D`
  3. 配置文件 [./prettierrc.cjs](./prettierrc.cjs),.prettierignore
  4. `.eslintrc.js` 文件修改

  ```js .eslintrc.js
  {
    "plugins": [
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "error",
    }
  }
  ```
  5. package.json 设置 `"prettier": "npx prettier --write ./src"`


## 目录结构

```txt
src/

- api 接口
- assets 静态资源
- components 全局组件
- composables 可服用的
- directives 指令集合
- layout 布局
- plugins 插件结合
- router 路由
- store 全局状态管理
- styles 全局样式
- units 工具
- views 页面
```
