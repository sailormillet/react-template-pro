const path = require("path");
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const {
  override,
  setWebpackPublicPath,
  addLessLoader,
  useBabelRc,
  disableEsLint,
  addWebpackAlias,
  addBundleVisualizer, // 打包分析
  fixBabelImports, // addWebpackResolve, // addWebpackPlugin, // adjustWorkbox, // addWebpackExternals, // removeModuleScopePlugin, // addWebpackModuleRule, // setWebpackPublicPath,
  babelExclude,
} = require("customize-cra");

// const theme = require('./src/css/theme.js');

// const isEnvProduction = process.env.NODE_ENV === 'production'
// console.log(process.env.NODE_ENV)
// console.log(path.resolve(__dirname, 'public/home.html'))
// 打包配置
const addCustomize = () => (config) => {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === "production") {
    // 关闭sourceMap
    // config.devtool = 'cheap-module-source-map';
    // 不会把需要外链的库打包进去
    // config.externals = {
    //   "react": "React",
    //   "react-dom": "ReactDOM",
    //   "Swiper": "swiper"
    // }
    // 配置打包后的文件位置
    const paths = require("react-scripts/config/paths");
    paths.appBuild = path.join(path.dirname(paths.appBuild), "dist");
    config.output.path = path.join(path.dirname(config.output.path), "dist"); // paths.publicPath = './'; // config.output.publicPath = './'; // // 添加js打包gzip配置 // config.plugins.push( //   new CompressionWebpackPlugin({ //     test: /\.js$|\.css$/, //     threshold: 1024, //   }), // )
  }
  console.log(config);
  return config;
};
module.exports = override(
  // setWebpackPublicPath('./'),
  // 添加less-loader配置
  // addLessLoader({
  //   javascriptEnabled: true,
  //   modifyVars: theme
  // }),
  // 添加修饰器 根目录下创建.babelrc
  // useBabelRc(),
  // 禁用默认eslint，使用自定义eslint,根目录下创建.eslintrc.js
  disableEsLint(), // alias
  addWebpackAlias({
    "@src": path.join(__dirname, "src"),
    "@components": path.join(__dirname, "src/components"),
    "@app": path.join(__dirname, "src/app"),
    "@utils": path.join(__dirname, "src/utils"),
    "@styles": path.join(__dirname, "src/styles"),
    "@assets": path.join(__dirname, "src/assets"),
    "@const": path.join(__dirname, "src/const"),
    "@store": path.join(__dirname, "src/store"),
    "@router": path.join(__dirname, "src/router"),
  }),
  babelExclude([path.resolve("node_modules")]), // babelExclude(/node_modules/), // fixBabelImports('import', { //   libraryName: 'antd-mobile', //   style: 'css', // }), // fixBabelImports("import", {//antd按需加载 //   libraryName: "antd", //   libraryDirectory: "es", //   style: "css" // }), // addBundleVisualizer({ //   analyzerMode: 'static', //   reportFilename: 'report.html', // }, true),  //打包分析
  addCustomize()
);
