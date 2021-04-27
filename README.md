# react-template-pro

https://sailormillet.github.io/react-template-pro/

- [技术栈规范](#技术栈规范)
  - [项目管理](#项目管理)
  - [vsCode 需要的插件](#vsCode需要的插件)
  - [语言](#语言)
  - [框架](#框架)
  - [样式](#样式)
  - [QA](#qa)
  <!-- - [构建(项目构建统一使用@gdjiami/cli)](#构建项目构建统一使用gdjiamicli) -->
  - [模板引擎](#模板引擎)
  - [nodejs](#nodejs)
  - [utils](#utils)
  - [文档生成](#文档生成)
  - [持续集成](#持续集成)
  - [版本管理](#版本管理)

## 项目管理

- lerna
- ✅ yarn 统一使用 yarn

## 语言

- Typescript
- ✅ Javascript
  - 需要使用 jsdoc 进行注释, 推荐[渐进式迁移到 Typescript](https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html). 在无法运行 Typescript 的环境也推荐该注释方式

## vsCode 需要的插件

- EditorConfig
- stylelint
- prettier 当安装结束后， 在项目根目录新建一个文件夹 .vscode ，在此文件下再建一个 settings.json 文件：该文件的配置优先于 vscode  全局的 settings.json ，这样别人下载了你的项目进行开发，也不会因为全局 setting.json  的配置不同而导致 Prettier  或之后会说到的 ESLint 、 StyleLint  失效，接下来在该文件内输入以下代码：
- stylelint
- stylelint
- stylelint
- stylelint

## 框架

- ✅ React
- 备选
  - preact
  - react-native
  - taro(小程序开发)
- 生态
  - 路由
    - react-router
  - 代码分割
    - react-loadable（ssr 可用，推荐使用）
    - ✅React.Suspense 和 React.lazy(闪现问题，maxDuration 还是实验特性)
  - 状态管理
    - ✅ react hooks
    - ✅ mobx
    - redux 由于冗余的模板代码，以及不利于 Typescript 约束，我们已经停止使用该方式.
  - UI 框架
    - ✅ antd
      - antd-mobile
    - 备选
      - pile
      - ionic-react
  - 开发模式
    - ✅ react hooks
  - 数据可视化
    - rechart
  - websocket
    - sockjs
  - 地图
    - react-bdmap

## 样式

- 命名规范
  - BEM
- CSS-in-js
  - styled-components
- pre-compiler
  - ✅ SCSS CSS Modules
- post-compiler
  - PostCSS + env

## QA

- 测试

  - 测试框架
    - jest
  - 组件测试
    - react-testing-library
    - enzyme: react 组件测试
  - hooks 测试
    - react-hooks-testing-library
    - puppeteer: headless chrome

- lint
  - tslint
  - eslint
  - stylelint
- 代码格式化
- ✅ prettier

## 修改 webpack 配置

```
 yarn add react-app-rewired customize-cra -D
```

## 目录规范

```
├── deploy                      //项目部署 包括集群、目标机器、git地址、文件黑名单等
├── public                      //favicon.ico、index.html入口文件、manifest.json移动App的配置文件、第三方js工具库
│   ├── js
│   │   ├── console.js          // 修复在不支持或部分支持console的浏览器
│   │   └── viewport.js
│   ├── index.html              // html公共模版
│   ├── favicon.ico             // 公共logo
├── src                         // 源文件开发目录
│   ├── assets                  // 静态资源，会被打包优化
│   ├── common                  // 公共配置，比如统一请求封装，session 封装
│   │   ├── http-client
│   │   └── session
│   ├── components              // 全局组件，分业务组件或 UI 组件
│   │   ├── Toast
│   ├── config                  // 全局配置文件目录
│   │   └── index.ts
│   ├── hooks                   // 自定义 hook
│   │   └── index.ts
│   ├── layouts                 // 模板，不同的路由，可以配置不同的模板
│   │   └── index.tsx
│   ├── lib                     // 通常这里防止第三方库，比如 jweixin.js、jsBridge.js
│   │   ├── README.md         // 就近原则页面级别的组件
│   │   ├── jsBridge.js
│   │   └── jweixin.js
│   ├── pages                   // 具体业务页面
│   │   ├── components          // 就近原则页面级别的组件
│   │   ├── home
│   │   └──
│   ├── routes                  // 路由配置
│   │   └──index.ts             // 总入口
│   ├── styles                  // 全局公用css以及iconfont
│   │   ├── font
│   │   ├── theme.ts
│   │   ├── base.module.scss
│   │   └── variables.module.scss
│   ├── utils                   // 全局公用工具类
│   │   ├── ajax.ts             // 调用请求接口
│   │   ├── index.ts            // 工具库
│   │   └── log.ts              // 打点
│   ├── reducers/ reducers      // 状态管理
│   │   └── index.ts            // redux文件列表
│   └── constants               // 常量
├── tests                       // 单元测试
├── template                    // 模板
├── README.md                   // 开发文档
├── setupProxy.ts               // 开发环境中代理 API 请求
├── config-overrides.js         // webpack打包的配置
├── build.sh                    // 编译配置
├── .gitignore
├── .babelrc                    // babel配置
├── .eslintrc                   // ESLint 配置文件
├── .env
├── .editorconfig               // IDE定义配置
├── package.json                // 模块描述文件
├── yarn.lock                   // 依赖文件
```

## alias setting

> 这里建议采用的是 @/ 开头，为什么不用 @ 开头，这是为了避免跟业界某些 npm 包名冲突

别名的配置，我们需要关注的是两个地方：
tsconfig.json 的 tsconfig.paths.json //用来给 Typescript 识别

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*":["./src/*"],
      "@/components/*":["./src/components/*"],
      "@/styles/*":["./src/styles/*"],
      "@/config/*":["./src/config/*"],
      "@/utils/*":["./src/utils/*"],
      "@/common/*":["./src/common/*"],
      "@/assets/*":["./src/assets/*"],
      "@/pages/*":["./src/pages/*"],
      "@/routes/*":["./src/routes/*"],
      "@/hooks/*":["./src/hooks/*"],
      "@/reducer/*":["./src/reducer/*"]
    }
  }
}

```

config-overrides.js //用来编译识别用的

```
const { alias, configPaths, aliasJest } = require("react-app-rewire-alias");
// 打包配置
const addCustomize = () => (config) => {
  console.log(process.env.NODE_ENV);
  const aliasMap = configPaths("./tsconfig.paths.json");
  alias(aliasMap)(config);
  aliasJest(aliasMap)(config);
```

## 路由规划

- @loadable/component 路由动态加载
- 基于路由的代码分割 React.lazy

## 代码分割

- 动态 import()

```
import("./math").then(math => {
  console.log(math.add(16, 26));
});
```

- React.lazy Suspense

## 模板引擎

pug

## 文档生成(do)

- docz
- ✅ storybook
- draw.io: 绘图工具

## nodejs

- express
- sock.js

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
