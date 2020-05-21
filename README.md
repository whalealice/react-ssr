## 项目新建流程 react + 服务器端渲染
* npm init
* npm i express --save
* npm i webpack webpack-cli --save
* npm i babel-preset-react --save
* npm i babel-preset-env --save
* npm i babel-loader babel-core --save
* npm i webpack-node-externals --save
* npm i react --save
* npm install react-dom --save8


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

## 同构
* 服务器端执行react代码，js事件是没法渲染出来；
* 需要把react代码在服务器端执行一次，再在客户端执行一次

## express static中间件加载静态文件
* //将静态文件目录设置为：项目根目录+/public
* app.use(express.static(__dirname + '/public'));
* //或者
* app.use(express.static(path.join(__dirname, 'public')));

* app.use(express.static('public')); // 发现加载静态文件就去根目录下的public文件里面找
* <script src="./index.js"></script> // 客户点再执行一遍react代码

* webpack.client.js
* react代码需要编译之后放入public文件夹里，原文件在src/client/index.js编译之后放入public文件夹里
* 做同构的话不用ReactDOM.render()， 要用ReactDOM.hydrate()

## webpack优化 webpack-merge
* npm i webpack-merge --save
* 提取webpack.server.js和webpack.client.js里面相同的放入webpack.base.js
* 然后用merge合并两个配置