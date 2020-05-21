## 项目新建流程 react + 服务器端渲染
* npm init
* npm i express --save
* npm i webpack webpack-cli --save
* npm i babel-preset-react --save
* npm i babel-preset-env --save
* npm i babel-loader babel-core --save
* npm i webpack-node-externals --save
* npm i react --save
* npm install react-dom --save
* npm i react-router-dom --save

## 项目启动
npm run start
npm run build

## 自动打包 --watch
* "build": "webpack --config webpack.server.js --watch"
* 监听所有文件只要有改变就重新打包

## 自动重启
* npm install nodemon -g
* "start": "nodemon --watch  build --exec node \"./build/bundle.js\""
* nodemon监听build下面bundle.js文件的改变了，就执行exec后面的命令 node \"./build/bundle.js\" 实现重新启动

## 在优化只用启动一个终端
* npm i npm-run-all -g
* "dev": "npm-run-all --parallel dev:**",
* "dev:start": "nodemon --watch  build --exec node \"./build/bundle.js\"",
* "dev:build": "webpack --config webpack.server.js --watch"
* 执行 npm run dev 的时候同时执行以dev:开头的所有命令

## 同构 - react+服务器端渲染
* 服务器端执行react代码，js事件是没法渲染出来
* 需要把react代码在服务器端执行一次，再在客户端执行一次

## 同构 - 静态文件
* <script src="./index.js"></script> // 客户端再执行一遍react代码

### express static中间件加载静态文件
* //将静态文件目录设置为：项目根目录+/public
* app.use(express.static(__dirname + '/public'));
* //或者
* app.use(express.static(path.join(__dirname, 'public')));

* app.use(express.static('public')); // 发现加载静态文件就去根目录下的public文件里面找


* webpack.client.js
* react代码需要编译之后放入public文件夹里，原文件在src/client/index.js编译之后放入public文件夹里
* 做同构的话不用ReactDOM.render()， 要用ReactDOM.hydrate()

### webpack优化 webpack-merge
* npm i webpack-merge --save
* 提取webpack.server.js和webpack.client.js里面相同的放入webpack.base.js
* 然后用merge合并两个配置

## 同构 - 路由
* router.js需要再服务器端执行一遍，客户端也执行一遍；
* 服务器端路由用StaticRouter，context参数必须要有，可传递一个空对象，数据通讯的传递；
* BrowserRouter自动感知浏览器当前路径是什么
* 服务器端路由不运行在浏览器上所以不能知道浏览器上的路径是什么，需要拿到用户请求的路径然后把路径传递给StaticRouter

## 服务器端渲染 
* 只在进入页面的第一次执行，之后的路由跳转都是js里面控制的

## 同构 - redux