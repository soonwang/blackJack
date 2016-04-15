# blackJack
## 设计思路
* 首先是确定要实现的功能， 我要实现的功能是实现多人同时在线，可以创建pk房间，每个房间仅限两人，创建房间的用户自动为庄家，选择进入房间的为玩家，游戏由玩家点击开始而正式开始；
* 为了方便其他用户识别和挑战，用户一打开要求填写一个游戏昵称，创建房间时也需要为房间起一个昵称；
* 游戏开始后，自动先由玩家决定是“再要一张”还是“不要牌”；“再要一张”如果分数超过21点，则玩家庄家同时显示“玩家爆掉了”，3秒后显示重新开始的页面；
如果点击“不要牌”， 则由庄家选择是否要牌（之前，庄家的选项按钮都是禁用状态），玩家的选项按钮全部禁用；
* 庄家、玩家在一轮游戏未结束之前不显示“退出”按钮，直到一轮游戏产生输赢，庄家、玩家界面显示“退出”按钮，即是在游戏过程中，不允许退出房间；
* 玩家退出房间后，显示主页面，可以选择进入新房间或者自己创建房间，玩家退出房间后，房间自动销毁，可以选择进入别的房间，或者再创建一个房间；
* 在整个过程中，主页面上实时显示在线人数，实时刷新房间以及状态，房间有玩家正在玩的时候，其他用户显示的主页面中，显示该房间人数已满

## 技术选型
### 版本控制：
    使用git， 项目地址：https://github.com/wangsong3635/blackJack 
    目前最新分支为dev
### 后端：
* 使用nodejs，为开速开发，使用express框架；
* 本游戏要求实时性较高，选择使用WebSocket交互，依赖已实现WebSocket API 的ws模块；
* 本游戏暂时未涉及数据库，所有用户的数据存在内存中；

### 前端：
* html5 + css + 原生javascipt实现，使用html5原生WebSocket；
* 使用gulp 前端自动化构建工具；

## 整体设计

###后端：
* /bean 中Ceil.js\User.js: 数据实体类
* /Model 中CeilList.js\UserList.js 所有用户、房间 数据存储模型，提供增删改查接口
* /socket socketHandler.js 充当 路由 作用，将客户端信息分类并转发到专门的service处理；UserService.js\CeilService.js\BlankerService.js\PlayerService.js\BroadcastService.js分别处理用户登录、退出，房间创建、进入、退出和销毁，庄家相关事件，玩家相关事件和广播；
* /routes BackApi.js中定义了服务端发往客户端的所有数据格式，即API；index.js中是http请求路由；user.js未使用；
* /utils Const.js 中定义全局的静态变量，主要是前后端接口的关键字；

###前端：
* /views/index.ejs: 游戏的模板文件
* /public 存放游戏静态资源的根目录； src为源文件夹，其余为gulp生成
* /public/src/css 存放css样式文件，/public/src/images 存放图片资源
* /public/src/scripts : 
    

        jack_socket.js 创建websocket，监听并转发服务端信息到指定Service处理
        Api.js 前端发送到服务端的数据格式；
        Model.js 前端存储用户数据的数据模块；
        Service.js 接收并处理服务端各类型的信息；
        View.js 网页的事件处理，DOM操作等；
        Request.js 向服务端发送请求的统一接口；
        Cons.js 定义常量；
        
##目前存在的问题：
* 未解决用户关闭浏览器时，在服务端数据UserList中删除用户信息；
* 未实现21点游戏的全部规则，未加入金钱计算、买保险等；
* 还有一些细节需要仔细处理；