# 配置与使用

```sh
# 安装依赖
$ npm install

# 仅启动 Web 开发服务器
$ npm run dev

# 编译为可发布的包体
$ npm run build

# 修复格式
$ npm run fix

```

如果我们是进行的多页面应用开发，那么可以在 [webpack.config.base.js](./webpack.config.base.js) 文件中添加更多的 Entry 与 [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin) 配置。

#目录结构说明
├── App.js
├── assets
│   └── images
│       ├── centos.png
│       ├── debian.png
│       ├── suse.png
│       ├── ubuntu.png
│       └── windows.png
├── components                             // 公用组件
│   ├── Avatar                             // 用户头像组件
│   │   ├── index.js
│   │   └── index.scss
│   ├── Card                               // 卡片组件
│   │   ├── index.js
│   │   └── index.scss
│   ├── Menu                               // 菜单组件
│   │   ├── Menu.js
│   │   ├── MenuItem.js
│   │   └── index.scss
│   ├── Modal                              // 模态框弹出层组件
│   │   ├── index.js
│   │   └── index.scss
│   ├── Overview                           // Agent状态预览组件
│   │   ├── index.js
│   │   └── index.scss
│   ├── PageLoading                        // Loading组件
│   │   └── index.js
│   ├── PrivateRoute                       // 私有路由组件用来进行 页面权限管理
│   │   └── index.js
│   └── Tab                                // Tab栏组件
│       └── index.js
├── index.html
├── index.js                               // app入口文件
├── index.scss
├── logo.svg
├── mocks
│   └── db.json
├── pages                                   // 页面管理
│   └── Home                                // Cruise App页面的子路由管理
│       ├── AgentPage                       // AgentPage
│       │   ├── AgentList                   // Agent列表组件
│       │   │   ├── AgentItem.js
│       │   │   ├── index.js
│       │   │   └── index.scss
│       │   ├── Navbar                      // 导航栏 
│       │   │   ├── index.js
│       │   │   └── index.scss
│       │   ├── Overviews                   // agent工作状态快速预览
│       │   │   ├── index.js
│       │   │   └── index.scss
│       │   ├── index.js
│       │   └── index.scss
│       ├── DashboardPage                   // todo DashboardPage
│       │   └── index.js
│       ├── HelpPage                        // todo HelpPage
│       │   └── index.js
│       └── MyCruisePage                    // todo MyCruisePage
│           └── index.js
├── style                                   // 样式
│   ├── _reset.scss
│   ├── app_default.scss
│   └── font_icons
│       ├── fonts
│       │   ├── cruise.svg
│       │   ├── cruise.ttf
│       │   └── cruise.woff
│       ├── fonts.css
│       └── fonts.png
├── utils
│   └── index.js
└── views                                   // 父路由管理 管理 app login 404等页面
    ├── Home                                // Cruise 布局
    │   ├── Footer
    │   │   └── index.js
    │   ├── Header
    │   │   ├── index.js
    │   │   └── index.scss
    │   ├── LogHistory
    │   │   ├── index.js
    │   │   └── index.scss
    │   ├── SiderMenu
    │   │   ├── index.js
    │   │   └── menuConfig.js
    │   ├── index.js
    │   └── index.scss
    └── Login                                 // todo Login界面
        └── index.js

# 技术栈

* 样式

  * 支持使用 CSS SCSS  CSS 模块化解决方案
  * 使用 PostCSS 作为 CSS 代码的后置 Polyfill 以及语法转换支持，详见 [postcss.config.js](./postcss.config.js) 中的配置。

* 约束

  * 使用 [standardJS](https://github.com/standard/standard) 作为代码格式化工具。

# 开发态特性

* 热加载

  * 使用内建的 [Webpack DevServer](https://webpack.js.org/configuration/dev-server/) 作为开发服务器。
  * 使用 [React Hot Loader V4](https://github.com/gaearon/react-hot-loader) 提供 React 组件热加载的能力。

# 发布态特性

* 代码分割，Webpack 4 移除了 CommonChunksPlugin，替换以 optimization 