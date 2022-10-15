<a name="mdG5z"></a>
### 1. 项目初始化
- 本项目共三个页面，分别是首页，登录和注册页面。
<a name="eorXH"></a>
#### 1.1 Vue环境配置
```javascript
npm install -g @vue/cli
```
<a name="DfbDc"></a>
#### 1.2 新建项目
```javascript
vue create fangjingdong-mall_project
```
<a name="tVCnM"></a>
#### 1.3 安装所需插件

- ESLint插件：协助做代码校验，规范代码
- Vetur插件：识别、高亮显示Vue语法
- Volar插件：在功能上 Volar 和 Vetur 是一致的，都是针对 vue 的插件，但是 Volar 的功能却要强大得多
<a name="ZDowU"></a>
#### 1.4 安装所需第三方库依赖模块

- 安装v-router
```javascript
// 这里安装的是vue-router 4 不指定版本安装的是vue-router3.5 对于后面的写法会报错
npm install vue-router@4
```

- 安装v-vuex
```javascript
npm install vuex@4
```

- 有些HTML标签，同一个标签，在不同的浏览器上，展示效果不一致； 为了 写出来的样式 可以在所有的浏览器上 保持一致， 需要借助一下normallize.css。
```javascript
npm install normalize.css --save
```

- 安装element-plus组件库
```javascript
npm install element-plus --save
```

- 安装sass
```javascript
npm install node-sass --save-dev
npm install sass-loader --save-dev
```
<a name="PY7NW"></a>
#### 1.5 项目目录
node_modules：存放第三方库依赖模块<br />public：配置了一些通用的内容，如这里的index.html中的icon，配置了网页的图标<br />src：源码目录<br />assets：存放资源相关的目录<br />components：公共组件目录<br />router：配置路由目录<br />index.js<br />store：配置状态管理目录<br />index.js<br />style<br />index.scss：引入如base.scss、iconfont.css及viriables.scss等文件，可以使main.js直接引入index.scss<br />即可<br />base.scss：在这里我们设置了 html 与 body 的字号，方便在样式中使用rem来实现响应式的字体<br />viriables.scss：主要来定义一些颜色变量（方便一些多次用到的颜色）<br />mixins.scss：将一些固定样式进行封装，然后通过@include语法引入<br />iconfont.css：主要来引用图标字体<br />utils<br />request.js：存放Ajax相关的目录<br />views：存放路由组件目录<br />home：首页<br />FooTer.vue：底部标签栏部分<br />HomeView.vue：首页的根组件，相当于一个容器里面放着 <br />FooTer，NearBy，StaticView三个子组件<br />NearBy.vue：中间附近店铺部分<br />StaticView.vue：头部<br />login：登陆注册功能<br />Login.vue<br />register<br />Register.vue<br />App.vue：项目根组件<br />main.js：入口js文件<br />babel.comfig.js：vue里面用到的一些babel的配置<br />jsconfig.json：当您在工作空间中有一个定义项目上下文的jsconfig.json文件<br />时，JavaScript体验会得到改进。默认启用了一些编译器标志。<br />package.json：记录第三方库依赖的目录<br />README.md：项目描述文本<br />vue.config.js：当我们想要定义一些全局变量，比如常用的包管理器或者部署应<br />用包的基本URL时，可以通过vue.config.js配置文件定义。vue.config.js 是<br />一个可选的配置文件，如果项目的 (和 package.json 同级的) 根目录中存在<br />这个文件，那么它被 @vue/cli-service 自动加载。<br />yarn.lock：保证多人协作的时候，依赖能有一个固定的版本

---

<a name="OLBfy"></a>
### 2.BEM 命名规范简介
<a name="DbE4p"></a>
#### 2.1 什么是 BEM 命名

- BEM 是一个简单又非常有用的命名约定。让你的前端代码更容易阅读和理解，更容易协作，更容易控制，更加健壮和明确，而且更加严密.这篇文章主要介绍了CSS BEM 命名规范简介。Bem 是块（block）、元素（element）、修饰符（modifier）的简写，由 Yandex 团队提出的一种前端 CSS 命名方法论。
<a name="DhHRT"></a>
#### 2.2 命名模式

- block {}，block 代表了更高级别的抽象或组件。
- block__element {}，代表 .block 的后代，用于形成一个完整的 .block 的整体。
- block–modifier {}，代表 .block 的不同状态或不同版本。
- 使用两个连字符和下划线而不是一个，是为了让你自己的块可以用单个连字符来界定。如：
   - sub-block__element {}
   - sub-block–modifier {}
<a name="HXXdy"></a>
#### 2.3 该模式优势

- BEM的关键是，可以获得更多的描述和更加清晰的结构，从其名字可以知道某个标记的含义。于是，通过查看 HTML 代码中的 class 属性，就能知道元素之间的关联。
- 传统的命名规范：

```javascript
<div class="article">
    <div class="body">
        <button class="button-primary"></button>
        <button class="button-success"></button>
    </div>
</div>
```

- 使用了 BEM 命名方法的示例：
```javascript
<div class="article">
    <div class="article__body">
        <div class="tag"></div>
        <button class="article__button--primary"></button>
        <button class="article__button--success"></button>
    </div>
</div>
```

---

<a name="Gt7gj"></a>
### 3. 遇到的一些问题及解决
<a name="QhFoL"></a>
#### 3.1 弹出下面的错误及自动热更新失效
![$5485X%D_(2KP{85UW%PU(H.jpg](https://cdn.nlark.com/yuque/0/2022/jpeg/27865087/1658891648711-0e8f329f-2221-4a95-8d20-252cd2006a8f.jpeg#clientId=u18b76e24-fc4f-4&crop=0&crop=0&crop=1&crop=0.7982&from=paste&height=302&id=u6ff5c43f&margin=%5Bobject%20Object%5D&name=%245485X%25D_%282KP%7B85UW%25PU%28H.jpg&originHeight=523&originWidth=822&originalType=binary&ratio=1&rotation=0&showTitle=false&size=63713&status=done&style=none&taskId=u5c60e6e8-584a-4ca4-800e-81b1d400983&title=&width=475)<br />原因及解决： 在服务器上，vue-cli-servece 不能正常检测到公网ip，而是直接使用了局域网的ip。这就导致ws的域名是内网ip,websocket通信失败，因此直接修改vue.config.js即可：
```javascript
devServer: {
    host: '0.0.0.0',
  // https:true,
    port: 8080,
    client: {
      webSocketURL: 'ws://0.0.0.0:8080/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
},
```
<a name="tbRbQ"></a>
#### 3.2 新建vue组件出错，无法引入
![image.png](https://cdn.nlark.com/yuque/0/2022/png/27865087/1658892055632-1cc7f34d-1415-4e80-b9e7-7ef8b24b9916.png#clientId=u18b76e24-fc4f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=141&id=u12e42122&margin=%5Bobject%20Object%5D&name=image.png&originHeight=211&originWidth=252&originalType=binary&ratio=1&rotation=0&showTitle=false&size=13831&status=done&style=none&taskId=u4cba8764-5410-441d-85a5-1d58a16c3f7&title=&width=168)

- 关闭eslint语法验证，在vue.config.js里面：

```javascript
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    host: '0.0.0.0',
  // https:true,
    port: 8080,
    client: {
      webSocketURL: 'ws://0.0.0.0:8080/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
},
  //关闭eslint语法验证
  lintOnSave: false,
  transpileDependencies: true
})
```

- 而且在创建vue组件中出现Component name “xxx“ should always be multi-word.eslintvue/multi-word-component-names，解决：name属性的值不能为一个单词。
<a name="s9gOK"></a>
#### 3.3 图标文字的转义问题
```javascript
<!-- 直接用{{item.icon}}会进行转义如&#xe6f3，只能用v-html="item.icon -->
<div class="iconfont" v-html="item.icon" />
```
<a name="LuGcW"></a>
#### 3.4 使用v-for, v-html 指令精简页面代码中的问题
```javascript
  <div class="docker">
    <!-- :class表示是一个js表达式 -->
    <div 
      v-for="( item, index ) in dockerList" 
      :class="{'docker__item': true, 'docker__item--active': index===0}"
      class="docker__item"
      :key="item.icon"
    >
      <!-- 直接用{{item.icon}}会进行转义，只能用v-html="item.icon -->
      <div class="iconfont" v-html="item.icon" />
      <div class="docker__title">{{item.text}}</div>
    </div>
  </div>
```
```javascript
      <!-- 引入图片时 -->
        <img 
          class="icons__item__img" 
          :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`" 
        />
```
<a name="KSn1O"></a>
#### 3.5 CSS 作用域约束
```javascript
<style lang="scss" scoped>//该样式只对本组件有效，不会影响到其它组件
```
<a name="ySonr"></a>
#### 3.6 组件跳转问题
```javascript
    <!-- 像这样通过router-link :to跳转，会在外层自动包裹一个a标签 -->
    <!-- <router-link :to="{name:'RegisterView'}">
      <div class="wrapper__login-link">立即注册</div>
    </router-link> -->
    <!-- 因此采取事件绑定的方式进行事件跳转 -->
    <div class="wrapper__login-link" @click="handleRegisterClick">立即注册</div>

    const handleRegisterClick = () =>{
      router.push({name:'RegisterView'})
    }
```

- 点击去结算到订单详情页面的时候，我们需要到对应商铺的页面：
1. 在CartFooter.vue里：
```javascript
<!-- 点击去结算到订单详情页面的时候，我们需要到对应商铺的页面，因此不能这样写 -->
<!-- <router-link :to="{name: 'OrderConfirmation'}">
    去结算
</router-link> -->
<!-- 要将shopId传进去 -->
<router-link :to="{path: `/order/${shopId}`}">
    去结算
</router-link>
```

2. 在router的路由配置中：
```javascript
  {
    path:'/order/:id',
    name:'OrderConfirmation',
    component:()=>import(/* webpackChunName:"order" */ '../views/order/OrderConfirmation'),
  },
```
<a name="NMW6S"></a>
#### 3.7 异步处理问题

- async作为一个关键字放在函数前面，表示该函数是一个异步函数，异步函数意味着该函数的执行不会阻塞后面代码的执行；而 await 用于等待一个异步方法执行完成； async/await的作用就是使异步操作以同步的方式去执行
```javascript
    // 1--我们现在是用axios自带的post方法发起请求，要求后面的URL是完整的URL，不是后端所要求的的/api/user/login，因此可以手动封装一个post方法，此处为优化1
    // 2--我们现在是用then/catch方法进行Promise的处理，如果不断地then下去，会造成回调地狱，因此可以采用Vue3支持的async/await，是then/catch的完美版，作用与then/catch相同，只是用法上的区别。
    // const handleLogin = ()=>{
    //   // 设置登录状态
    //   axios.post('https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/login',{
    //     username:data.username,
    //     password:data.password
    //   }).then(()=>{
    //     localStorage.isLogin = true;
    //     // 在登录之后，通过路由实例跳转
    //     router.push({name:'Home'})
    //     alert('成功')
    //   }).catch(()=>{
    //     alert('失败')
    //   })
    // }
    const handleLogin = async()=>{
      // 可以使用try/catch监听Promise 返回状态，try为成功，catch失败
      try{
        // 设置登录状态
        // 每遇到一个await都会先返回,再往下执行,变成了同步操作
        const result = await axios.post('https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/login',{
          username:data.username,
          password:data.password
        })
        // result?.data?.errno的意思是尝试获取result中的data中的error属性，它和result.data.errno的意思是一样的，但是比result.data.errno的容错性更高。
        // 代码会尝试查找errno，如果查找不到，会返回undefined，而不会报错
        if(result?.data?.errno===0){
          localStorage.isLogin = true;
          // 在登录之后，通过路由实例跳转
          router.push({name:'Home'})
          alert('登录成功')
        }else{
          alert('请求失败')
        }
      }catch(e){
        alert('请求失败')
      }
    }
```

- utils里面request.js手动封装的post方法
```javascript
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
  timeout: 10000
})

// 手动封装的post方法，使请求默认带上baseURL
export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data, {
      // Content-Type 标头告诉客户端实际返回的内容的内容类型。
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      // 本来是resolve(response)的，但是不用返回这么多，返回需要的data数据即可
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}
```
<a name="Ql6Vt"></a>
#### 3.8 toRefs的使用问题

- toRefs 用于将响应式对象转换为结果对象，其中结果对象的每个属性都是指向原始对象相应属性的ref。 常用于es6的解构赋值操作，因为在对一个响应式对象直接解构时解构后的数据将不再有响应式，而使用toRefs可以方便解决这一问题。
```javascript
//reactive 是 Vue3 中提供的实现响应式数据的方法。
    const data = reactive({
      username:'',
      password:'',
    })//到这里setup()函数只能导出data
// toRefs 用于将响应式对象转换为结果对象，其中结果对象的每个属性都是指向原始对象相应属性的ref
    const {username,password} = toRefs(data);//到这里setup()函数可以导出username和password
```
<a name="g83hT"></a>
#### 3.9 异步组件与动态组件问题
```javascript
//如果像这样写，则会导致无论访问哪个页面，其它组件都会同时被加载出来，造成性能的浪费
  {
    path:'/',
    name:'Home',
    component: HomeView,
  },
  {
    path:'/shop',
    name:'ShopView',
    component: ShopView
  },
```

- 为此，Vue中提出了异步组件与动态组件的概念
- 异步组件：
   - vue的一种性能优化的方法，可以实现组件的按需加载组件
   - 通过import函数引用，什么时候需要什么时候加载
   - 有利于项目的性能优化，提高页面的加载速度
   - 路由懒加载就是使用了异步组件的原理
```javascript
  {
    path:'/',
    name:'Home',
    // 异步组件，只有访问的时候才加载,"home"指的是代码包的名字
    component:()=>import(/* webpackChunName:"home" */ '../views/home/HomeView')
  },
  {
    path:'/shop',
    name:'ShopView',
    component:()=>import(/* webpackChunName:"shop" */ '../views/shop/ShopView')
  },
```
<a name="fRQF6"></a>
#### 3.10 Vuex进行全局的数据管理问题

- 在商品详情页购物车组件ContentView.vue的开发中，因为购物车的数据不仅在当前这个页面需要用到，在购物车，结算商品等其他页面都需要用到这些数据，所以我们应该把这些数据放在全局进行管理。这就需要  vuex 了。文档：[https://vuex.vuejs.org/zh-cn/intro.html](https://vuex.vuejs.org/zh-cn/intro.html)
- Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
   - State：用于数据的存储，是store中的唯一数据源。
   - Getter：类似于计算属性，就是对State中的数据进行二次的处理，比如筛选和对多个数据进行求值等。
   - commit：同步操作，数据提交至 mutations ，可用于登录成功后读取用户信息写到缓存里
   - Mutation：类似事件，是改变Store中数据的唯一途径，只能进行同步操作。mutations接受commit传递过来的参数，这个参数叫做payload（提交载荷），我们可以通过payload来实现数据的传递。
   - Action：类似Mutation，通过提交Mutation来改变数据，而不直接操作State，可以进行异步操作。
   - Module：当业务复杂的时候，可以把store分成多个模块进行管理，便于维护。
   - 对于这几个概念有各种对应的map辅助函数用来简化操作，比如mapState，如下三种写法其实是一个意思，都是为了从state中获取数据，并且通过计算属性返回给组件使用。

**创建vue脚手架时，在src的store文件夹里面的index.js里面已经提前创建了一个store存储，我们只需填充内容即可：

**
```javascript
import Vuex from 'vuex'

// store存储
export default Vuex.createStore({
  state: {
    cartList: {
      // 第一层级是商铺的 id
      1: {
        // 第二层是商品内容及购物数量
        111: {
          _id: '1',
          name: '番茄250g/份',
          imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
          sales: 10,
          price: 33.6,
          oldPrice: 39.6,
          count: 2
        },
        222: {
        
        }
      },
      2: {
      
      }
    }
  },
  mutations: {
    changeItemToCart (state, payload) {
          const { shopId, productId, productInfo, num } = payload
          let shopInfo = state.cartList[shopId]
          if (!shopInfo) {
            shopInfo = {}
          }
          let product = shopInfo[productId]
          if (!product) {
            product = productInfo
            product.count = 0
          }
          product.count = product.count + num
          if (product.count < 0) { product.count = 0 }
          shopInfo[productId] = product
          state.cartList[shopId] = shopInfo
    }
  },
  actions: {
  },
  modules: {
  }
})
```
**使用该store时，首先我们引入 vue-store：**
```javascript
import { useStore } from 'vuex';
```
定义一个 useCartEffect 函数来获取仓库里的购物车数据：
```javascript
// 购物车数据获取相关的逻辑
const useCartEffect = () => {
  // 使用store存储
  const store = useStore()
  const cartList = store.state.cartList

  const changeItemToCart = (shopId, productId, productInfo, num) => {
    // commit 的作用 就是调用 某个mutation函数
    store.commit('changeItemToCart', {
      shopId, productId, productInfo, num
    })
  }
  return { cartList, changeItemToCart }
}
```
在 setup 中使用这个方法：
```javascript
const { cartList, changeItemToCart } = useCartEffect()
```
在 模板中使用得到的函数并传入参数：
```javascript
<span class="product__number__plus" @click="()=>{changeItemToCart(shopId, item._id, item, 1)}">+</span>
```
<a name="Im6RH"></a>
#### 3.11 本地存储保存购物车数据问题
最后每当页面刷新的时候，我们购物车中的数据都会丢失，我们用本地存储来让购物车的数据存在浏览器中，在 store 的index.js中定义本地存储的存储和获取函数：
```javascript
const setLocalStorage = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}
const getLocaCartList = () => {
  // { shopId: {shopName:'', productList:{ productId: {} }}}
  try {
    return JSON.parse(localStorage.cartList);
  } catch(e) {//记得抛出异常
    return {}
  }
}
```
这样 state 中carList的值就可以通过 getLocalStorage  直接获取：
```javascript
  state: {
    cartList: getLocalStorage()
  }
```
并且每当我们对 carList 里的内容有修改时，都调用 setLocalStorage 函数来本地存储数据。这样我们在刷新页面的时候，数据还会存在就不会销毁了。
<a name="lvXrV"></a>
#### 3.12 v-for和v-if的同时使用问题
```javascript
                <!-- 在商品数量为0时无需展示，因此需要用到v-if -->
                <!-- 但v-if和v-for不能同时使用，因此需要在外面包裹一个template -->
                <template                   
                    v-for="item in productList"
                    :key="item.id"
                >
                    <div class="products__item" v-if="item.count>0">
                        <img class="products__item__img" :src="item.imgUrl" />
                        <div class="products__item__detail">
                            <h4 class="products__item__title">{{item.name}}</h4>
                            <p class="products__item__price">
                                <span class="products__item__price__single">
                                    <span class="products__item__yen">&yen;</span>
                                    {{item.price}} × {{item.count}}
                                </span>
                                <span class="products__item__price__total">
                                    <span class="products__item__yen">&yen;</span>
                                    {{item.price*item.count}}
                                </span>
                            </p>
                        </div>
                    </div>
                </template>
```
<a name="Oh09C"></a>
#### 3.13 不同设备屏幕适配的问题

- 首先将所有px替换为rem（除了html的font-size)
```javascript
    <!-- 屏幕适配问题 -->
    <script>
      // 1.获取设备屏幕宽度
      var width = document.documentElement.clientWidth||document.body.clientWidth;
      // 2.得到比率，当前设备和网页默认设备的比例
      var radio = width / 375;
      // 3.改变html的font-size大小
      var fontSize = 100 * radio;
      document.getElementsByTagName('html')[0].style['font-size'] = fontSize+'px';
    </script>
```
<a name="QKa1o"></a>
#### 3.14 Git提交时忽略node_modules

- 创建.gitignore文件
```javascript
touch .gitignore
```

- .gitignore文件里面写明忽略的文件
```javascript
// .gitignore

/node_modules
/yarn.lock
```

- .gitignore文件更改后不生效怎么办：新增的忽略文件没有生效，是因为git是有缓存的，无法给缓存中的内容制定规则。我们需要清除缓存再重新提交。
```javascript
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
```
<a name="cJcgI"></a>
#### 3.15 静态资源存放路径问题

- 使用assets下面的资源，在js中使用的话，路径要经过webpack中的file-loader编译，路径不能直接写。
- cli2需要把要下载的文件放在static下面；cli4需要将文件放在public里面才不会被打包。

![image.png](https://cdn.nlark.com/yuque/0/2022/png/27865087/1660141632896-b06b209a-e5db-4bc0-b57c-34626482d9e0.png#clientId=uff2cf482-1fa2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=255&id=u78e3fca6&margin=%5Bobject%20Object%5D&name=image.png&originHeight=523&originWidth=1276&originalType=binary&ratio=1&rotation=0&showTitle=false&size=91259&status=done&style=none&taskId=ue0857ed1-900d-4ef7-ac39-ca318ece51d&title=&width=623)
<a name="da22f"></a>
### 4. 组件利用
<a name="PDaeS"></a>
#### 4.1 组件的直接展示
HomeView.vue里将组件写好并导出：

```javascript
<script>
    import StaticPart from './StaticPart';
    import NearBy from './NearBy';
    import FooTer from './FooTer';
//导出
    export default{
        name:'HomeView',
        components:{StaticPart,NearBy,FooTer}
    }
</script>
```
App.vue将组件导入并插入：
```javascript
<template>
  //插入
  <HomeView />
</template>

<script>
  //导入
import HomeView from './views/home/HomeView'
  export default{
    name:'App',
    components:{ HomeView }
  }
</script>
```
<a name="bnCZn"></a>
#### 4.2 组件的路由展示
在router的index.js里面导入组件及其路由：

```javascript
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/home/HomeView';
import LoginView from '../views/login/LoginView';

const routes = [
  {
    path:'/',
    name:'Home',
    component: HomeView
  },
  {
    path:'/login',
    name:'LoginView',
    component:LoginView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
```
在App.vue里面展示组件：
```javascript
<template>
<!-- 根据路由不同展示不同的组件 -->
  <router-view />
</template>

<!-- 此时这里无需导入组件了 -->
<script>
  export default{
    name:'App',
  }
</script>
```
<a name="FBmuH"></a>
#### 4.3 路由守卫实现基础登陆校验功能
在router的index.js里利用beforeEnter和beforeEach：

```javascript
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/home/HomeView';
import LoginView from '../views/login/LoginView';
import RegisterView from '../views/register/RegisterView';

const routes = [
  {
    path:'/',
    name:'Home',
    component: HomeView
  },
  {
    path:'/login',
    name:'LoginView',
    component:LoginView,
    // 只有访问LoginView这个页面之前才会执行,作用是登录之后无法访问LoginView页面
    beforeEnter(to,from,next){
      const {isLogin} = localStorage;//解构赋值，相当于const isLogin = localStorage.isLogin
      // 如果已经登录，则跳转到Home页面，否则正常展示当前页面
      isLogin ? next({name:'Home'}): next();
    }
  },
  {
    path:'/register',
    name:'RegisterView',
    component: RegisterView,
    // 只有访问LoginView这个页面之前才会执行,作用是登录之后无法访问LoginView页面
    beforeEnter(to,from,next){
      const {isLogin} = localStorage;//解构赋值，相当于const isLogin = localStorage.isLogin
      // 如果已经登录，则跳转到Home页面，否则正常展示当前页面
      isLogin ? next({name:'Home'}): next();
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 路由守卫实现基础登陆校验功能
// beforeEach表示在初始化时候被调用和每次路由切换之前别调用
router.beforeEach((to,from,next)=>{
  // isLogin在本地存储中
  const isLogin = localStorage.isLogin;

  //to：进入到哪个路由去
  //from：从哪个路由离开
  //next：路由的控制参数，常用的有next(true)和next(false)

  // 用户没有登录或者当前不是注册页面的时候，无法访问其它页面，只能跳到LoginView页面
  //其它情况则展示当前页面
  if(!isLogin&&(to.name !=='LoginView'&&to.name !=='RegisterView')){
    next({name:'LoginView'})
  }else{
    next()
  }
})

export default router
```
在LoginView.vue获取路由实例，可以实现登录功能及跳转：
```javascript
<script>
import { useRouter } from 'vue-router';
export default {
  name: 'LoginView',
  setup(){
    // 获取路由实例
    const router = useRouter();
    const handleLogin = ()=>{
      // 设置登录状态
      localStorage.isLogin = true;
      // 在登录之后，通过路由实例跳转
      router.push({name:'Home'})
    }
    return { handleLogin }
  }
}
</script>
```
<a name="SfGXX"></a>
#### 4.4 使用axios 发送登陆 Mock 请求
安装axios
```javascript
npm install axios --save
```
在LoginView.vue里面的setup函数里面获取接口：
```javascript
import axios from 'axios';
import {reactive} from 'vue';

//reactive 是 Vue3 中提供的实现响应式数据的方法。
    const data = reactive({
      username:'',
      password:''
    })
    const handleLogin = ()=>{
      // 设置登录状态
      axios.post('https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/login',{
        username:data.username,
        password:data.password
      }).then(()=>{
        localStorage.isLogin = true;
        // 在登录之后，通过路由实例跳转
        router.push({name:'Home'})
        alert('成功')
      }).catch(()=>{
        alert('失败')
      })
    }
```
使用v-model和数据进行绑定：

```javascript
      <input
        class="wrapper__input__content"
        placeholder="用户名"
        v-model="data.username"
      />
    </div>
    <div class="wrapper__input">
      <input
        type="password"
        class="wrapper__input__content"
        placeholder="请输入密码"
        v-model="data.password"
      />
```

