## 项目新建流程 react + 服务器端渲染
* npm init
* npm i express --save
* npm i webpack webpack-cli --save
* npm i babel-preset-react --save
* npm i babel-preset-env --save
* npm i babel-loader babel-core --save
* npm i webpack-node-externals --save
* npm i react --save


## 项目启动
npm run dev

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
* --parallel 多个命令并行

## 同构 - react+服务器端渲染
* 服务器端执行react代码，js事件是没法渲染出来
* 需要把react代码在服务器端执行一次，再在客户端执行一次

## 同构 - 静态文件
* <script src="./index.js"></script> // 客户端再执行一遍react代码

### express static中间件加载静态文件
* 将静态文件目录设置为：项目根目录+/public
* app.use(express.static(__dirname + '/public'));
或者
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
* npm install react-dom --save
* npm i react-router-dom --save
* router.js需要再服务器端执行一遍，客户端也执行一遍；
* 服务器端路由用StaticRouter，context参数必须要有，可传递一个空对象，数据通讯的传递；
* BrowserRouter自动感知浏览器当前路径是什么
* 服务器端路由不运行在浏览器上所以不能知道浏览器上的路径是什么，需要拿到用户请求的路径然后把路径传递给StaticRouter

## 服务器端渲染 
* 只在进入页面的第一次执行，之后的路由跳转都是js里面控制的

## 同构 - redux
* npm i redux --save
* npm i react-redux --save
* npm i react-thunk --save
* getStore()每次生成一个新的store，这样每个用户的store都是独立的，不会多人共享一个store;
* componentDidMount()只会在客户端渲染执行，不会再服务端渲染执行，所以componentDidMount里面的请求数据的ajax不会被执行；

## 服务器端store永远是空的 首次进入页面请求数据（Home页面）
* 1、服务器接收到请求，这个时候store是个空的
* 2、componentDidMount在服务器端是不执行的，所以列表数据是空的
* 解决:
* react-router-config里面的matchRoutes 根据路由路径，往store里面加数据

* 3、客户端代码运行，这个时候store是空的
* 4、componentDidMount在客户端执行的，列表数据 被获取
* 5、store中的列表数据被更新
* 6、客户端渲染出store中list数据对应的列表渲染出来

## 数据的注水和脱水
* 注水: 把服务端渲染的数据放到window.content
* 脱水：客户端渲染的时候把数据拿出来直接使用

## 客户端请求，用node做代理转发给服务器
* npm i express-http-proxy --save

## axios instance interceptors
* 服务器请求和客户端请求地址不一样独立配置,
* http://route.showapi.com/341-2
* 浏览器运行
* /api/341-2 = http://localhost:5000/api/341-2
* 服务器运行
* /api/341-2 = 服务器根目录下/api/341-2 没有这个文件，始终获取不到

* 创建store的时候传入使用哪一个axios
* applyMiddleware(thunk.withExtraArgument(serverAxios)

## 多级路由
* renderRoutes，react-router-config


## css-loader
* npm i css-loader --save-dev

* webpack.client.js
* npm i style-loader --save-dev
* style-loader 发现页面有这样一个样式，并且这个样式页面有引用，就会往dom上增加这个样式名；
* style-loader 解析我们要的class名称之外，还会我们写的样式放入到head中；

* webpack.server.js 使用 isomorphic-style-loader
* npm i isomorphic-style-loader --save-dev  
* isomorphic-style-loader只是解析我们要的class名称，放入dom字符串中

### 这样页面样式会有抖动，需要做css服务器端渲染
* 页面根据staticContext把页面的css样式注入到服务器context对象上
* 页面在componentWillMount钩子函数中写：if(props.staticContext){props.staticContext.css = styles._getCss()}
* server端render的时候把拿到的css样式放入到html中，和之前的获取store类似
### 子组件的服务器端样式渲染
* react-router-config会把context传入到有些路由的组件，但是子组件是没有路由的所以context需要从父组件传递下去


### 定制每个页面的title和description
* react-Helmet
* npm install react-helmet --save

