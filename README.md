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
