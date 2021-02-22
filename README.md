# react-template-pro

https://sailormillet.github.io/react-template-pro/

## 修改webpack配置

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
│   ├── components              // 基本组件            
│   ├── config                  // 全局配置            
│   │   └── index.js            
│   ├── styles                  // 全局公用css以及iconfont           
│   │   ├── font                       
│   │   ├── theme.js                      
│   │   ├── base.scss          
│   │   └── variables.scss     
│   ├── assets                  // 图片资源
│   ├── views                   // 具体业务页面
│   │   ├──  my 
│   │   │   ├──  setting        //  设置头像昵称
│   │   │   ├──  user_center    //  个人中心
│   │   │   └──  ban_french     //  集合落地页    
│   │   ├──      
│   │   └──   
│   ├── router                  // 路由
│   │   └──index.js             // 总入口
│   ├── store                   // 状态管理
│   │   └── index.js            // redux文件列表
│   ├── utils                   // 全局公用工具类           
│   │   ├── ajax.js             // 调用请求接口   
│   │   ├── index.js            // 工具库 
│   │   └── log.js              // 打点
│   └── const                   // 常量
├── tests                       // 单元测试
├── template                    // 模板
├── README.md                   // 开发文档
├── setupProxy.js               // 开发环境中代理 API 请求
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