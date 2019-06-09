# 介绍
`Vue` (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，`Vue` 被设计为可以自底向上逐层应用。`Vue` 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

# 起步 - Hello Vue

**安装：`npm i -S vue`**
<br/>
```html
<!-- 指定vue管理内容区域，需要通过vue展示的内容都要放到找个元素中  通常我们也把它叫做边界 数据只在边界内部解析-->
<div id="app">{{ msg }}</div>

<!-- 引入 vue.js -->
<script src="vue.js"></script>

<!-- 使用 vue -->
<script>
  var vm = new Vue({
    // el：提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标
    el: '#app',
    // Vue 实例的数据对象，用于给 View 提供数据
    data: {
      msg: 'Hello Vue'
    }
  })
</script>
```

## Vue实例

- 注意 1：先在data中声明数据，再使用数据
- 注意 2：可以通过 `vm.$data` 访问到data中的所有属性，或者 `vm.msg`
```js
var vm = new Vue({
  data: {
    msg: '大家好，...'
  }
})

vm.$data.msg === vm.msg // true
```
## 数据绑定

- 最常用的方式：`Mustache`(插值语法)，也就是 `{{}}` 语法
- 解释：`{{}}`从数据对象data中获取数据
- 说明：数据对象的属性值发生了改变，插值处的内容都会更新
- 说明：`{{}}`中只能出现JavaScript表达式 而不能解析js语句
- 注意：`Mustache` 语法不能作用在 HTML 元素的属性上
```html
<h1>Hello, {{ msg }}.</h1>
<p>{{ 1 + 2 }}</p>
<p>{{ isOk ? 'yes': 'no' }}</p>

<!-- ！！！错误示范！！！ -->
<h1 title="{{ err }}"></h1>
```
## 双向数据绑定

> 双向数据绑定：将DOM与Vue实例的data数据绑定到一起，彼此之间相互影响
- 数据的改变会引起DOM的改变
- DOM的改变也会引起数据的变化


> 原理：`Object.defineProperty`中的`get`和`set`方法
- `getter`和`setter`：访问器
- 作用：指定读取或设置对象属性值的时候，执行的操作

```js
/*  defineProperty语法 介绍 */
var obj = {}
Object.defineProperty(obj, 'msg', {
  // 设置 obj.msg = "1" 时set方法会被系统调用 参数分别是设置后和设置前的值
  set: function (newVal, oldVal) {  },
  // 读取 obj.msg 时get方法会被系统调用
  get: function ( newVal, oldVal ) {}
})
```

## Vue双向绑定的极简实现
```html
<!-- 示例 -->
<input type="text" id="txt" />
<span id="sp"></span>

<script>
var txt = document.getElementById('txt'),
    sp = document.getElementById('sp'),
    obj = {}

// 给对象obj添加msg属性，并设置setter访问器
Object.defineProperty(obj, 'msg', {
  // 设置 obj.msg  当obj.msg反生改变时set方法将会被调用  
  set: function (newVal) {
    // 当obj.msg被赋值时 同时设置给 input/span
    txt.value = newVal
    sp.innerText = newVal
  }
})

// 监听文本框的改变 当文本框输入内容时 改变obj.msg
txt.addEventListener('keyup', function (event) {
  obj.msg = event.target.value
})
</script>
```

## 动态添加数据

**注意：**
- 只有data中的数据才是响应式的，动态添加进来的数据默认为非响应式
- 可以通过以下方式实现动态添加数据的响应式
  - `Vue.set(object, key, value)` - 适用于添加单个属性
  - `Object.assign()` - 适用于添加多个属性

```js
var vm = new Vue({
  data: {
    stu: {
      name: 'jack',
      age: 19
    }
  }
})

/* Vue.set */
Vue.set(vm.stu, 'gender', 'male')

/* Object.assign 将参数中的所有对象属性和值 合并到第一个参数 并返回合并后的对象*/
vm.stu = Object.assign({}, vm.stu, { gender: 'female', height: 180 })
```

## 异步DOM更新

- 说明：Vue 异步执行 DOM 更新，监视所有数据改变，一次性更新DOM
- 优势：可以去除重复数据，对于避免不必要的计算和 避免重复 DOM 操作上，非常重要
- 如果需要那到更新后dom中的数据 则需要通过 `Vue.nextTick(callback)`：在DOM更新后，执行某个操作（属于DOM操作）,实例调用`vm.$nextTick(function () {})`

```js
methods: {
  fn() {
    this.msg = 'change'
    this.$nextTick(function () {
      console.log('$nextTick中打印：', this.$el.children[0].innerText);
    })
    console.log('直接打印：', this.$el.children[0].innerText);
  }
}
```

## 指令

在 Vue 中，如果单单使用 `{{}}` 这种插值表达式，是满足不了我们对数据的操作欲望的。所以，Vue 以 `v-if`、`v-bind` 等形式，提供了一些对于页面 + 数据的更为方便的操作：指令, 当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM

```html
<div>
  <!-- 
    1. v-text
    这里直接将 vTextOrHtml 中的文本
    当成 string 渲染到页面中去
   -->
  <p v-text='vTextOrHtml'></p>

  <br/>

  <!-- 
    2. v-html
    这里在渲染 vTextOrHtml 的过程中，
    如果遇到标签，则对标签页进行渲染 
   -->
  <p v-html='vTextOrHtml'></p>

  <br/>

  <!-- 
    3. v-if/v-else-if/v-if
    判断 data 中 vIf 的值是多少，
    这里有三种情况：v-if、v-else-if、v-else。
    如果项目中有更多情况，则再添加 v-else-if 即可
  -->
  <p v-if='vIf == 1'>Hello v-If</p>
  <p v-else-if='vIf == 2'>Hello v-else-if</p>
  <p v-else>Hello v-else</p>

  <br/>

  <!-- 
    4. v-show
    判断 isTrue 是真还是假，
    它不同于 v-if 的方面是：
    v-if 根据表达式的值的真假条件，销毁或重建元素
    v-show 根据表达式之真假值，切换元素的 display CSS 属性
    一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
  -->
  <p v-show='isTrue'></p>

  <br/>

  <!-- 
    5. v-bind
    v-bind 有两种格式：
    1. v-bind:value - 全写
    2. :value - 简写
    我们还可以通过 v-bind:class 来动态赋值
    v-bind:other1="other1" 在页面中显示就是：
    <input other1="other1" />>
   -->
  <input v-bind:value="vBind" v-bind:class="colorRed" type="text"/>
  <input v-bind:other1="other1" :other2="other2" :other3=" 'other3' " value="Hello :属性值" type="text"/><br/>

  <br/>

  <!-- 
    6. v-on
    v-on:click 有两种格式：
    1. v-on:click - 全写
    2. @click - 简写
    v-on:click 除了可以直接在里面写表达式，还可以填写方法

    事件修饰符
      .stop - 阻止事件冒泡。例如：@click.stop="say" 阻止 say 方法传递到上一级 DOM。
      .prevent - 阻止默认事件。例如：@click.prevent="say"，阻止点击事件，然后执行 say。
      .capture - 给元素添加监听器，在一个 HTML 模块中，如果有 4 层嵌套，前 2 层使用了 .capture 修饰符，第 3/4 层未使用，点击第 4 层触发点击事件，则顺序为：1 -> 2 -> 4 -> 3，因为 .capture 会先触发。
      .self - 只触发该 DOM 本身的事件。相比于 .stop 阻止事件冒泡，.self 忽略事件冒泡和捕获的影响。
      .once - 事件将只会触发一次。例如：@click.once='doOnce'，doOnce 只会执行一次。
      .passive - 不要阻止事件的默认行为。例如：v-on:scroll.passive="onScroll"，在进行滚动的时候同时执行 onScroll，而不是等 onScroll 执行完再滚动。

      按键值修饰符 在监听键盘事件时，允许为 v-on 在监听键盘事件时添加关键修饰符


   -->
  <button v-on:click=" vBind= 'Hello v-on:click' ">v-on:click - 点击直接改变 vBind 的值</button><br>
  <button @click.stop="changevBindValue">v-on:click - 点击通过事件改变 vBind 的值，阻止冒泡</button><br>

  <!-- 只有在 keyCode 是 13 时调用 vm.submit() -->
  <div @keyup.13="submit"></div>
  <!-- 使用全局按键别名 -->
  <div @keyup.enter="add"></div>
  <br/>

  <!-- 
    7. v-model
    v-model 是双向数据绑定，
    在这里，上面 input 的修改
    会影响到下面 p 显示的内容
   -->
  <input v-model="vModel" type="text" />
  <p>{{ vModel }}</p>

  <br/>

  <!-- 
    8. v-for
    v-for 循环体遍历输出

    使用 v-for 的时候提供 key 属性，以获得性能提升。
    使用 key，VUE会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。
    key值不能重复，必须为字符串
   -->
  <ul v-for="(item, index) in vFor" :class="item.classStyle" :key="index">
    <li>{{index+1}}. {{item.name}} - {{item.age}}</li>
  </ul>
</div>

  <!-- 
    9. v-pre
    vue会跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。
  -->
  <span v-pre>{{ this will not be compiled }}</span>

  <!-- 
    10. v-once
    vue只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。
  -->
  <span v-once>This will never change: {{msg}}</span>

```

## 样式处理 -class和style

  使用方式：v-bind:class="expression" or :class="expression"
  表达式的类型：字符串、数组、对象

```html
<!-- class -->
<!-- 1 -->
<div v-bind:class="{ active: true }"></div> ===> 解析后
<div class="active"></div>

<!-- 2 -->
<div :class="['active', 'text-danger', isTrue? 'class1': 'class2']"></div> ===>解析后
<div class="active text-danger"></div>

<!-- 3 -->
<div v-bind:class="[{ active: true }, errorClass]"></div> ===>解析后
<div class="active text-danger"></div>


<!-- style -->
<!-- 1 -->
<div v-bind:style="{ color: activeColor, 'font-size': fontSize + 'px', color: isTrue? 'red': 'blue' }"></div>
<!-- 2 将多个 样式对象 应用到一个元素上-->
<!-- baseStyles 和 overridingStyles 都是data中定义的对象 -->
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```


## 监视数据变化 - watch

watch是一个对象，键是需要观察的表达式，值是对应回调函数
当表达式的值发生变化后，会调用对应的回调函数完成响应的监视操作

```js
  watch: {
    a: function(val, oldVal) {
      // val 表示当前值
      // oldVal 表示旧值
      console.log('当前值为：' + val, '旧值为：' + oldVal)
    },

    // 监听对象属性的变化
    b: {
      handler: function (val, oldVal) { /* ... */ },
      // deep : true表示是否监听对象内部属性值的变化 
      deep: true
    },

    // 只监视user对象中age属性的变化
    'user.age': function (val, oldVal) {
    },
  }
```

## 计算属性 -computed

计算属性是基于它们的依赖进行缓存的，只有在它的依赖发生改变时才会重新求值
注意：Mustache语法（{{}}）中不要放入太多的逻辑，否则会让模板过重、难以理解和维护, computed中的属性不能与data中的属性同名，否则会报错


```js
  computed: {
    fullname() {
      return this.firstname + '.' + this.lastname
    }
  }
```
**watch 与 computed**

对比一：
- computed 强调计算。例如 c = a + b，因为你只要显示 c，所以不需要理会 a 与 b 的值是否动态传入，只需要使用 computed 监察 c 即可。
- watch 属性强调自身值的变化前后的动作。如果需要完成 c = a + b，那么你需要 watch 数据 a 与 b 的变化，在这两者变化的时候，在方法中执行 c = a + b。

对比二：
- watch 在处理异步操作或者开销较大的操作上有优势。执行异步操作不能串行返回结果、执行开销较大的操作避免堵塞主线程的时候，使用 watch。
- 简单且串行返回的，使用 computed。

对比三：
- computed 对绑定的值有依赖，如果每次操作的值不变化，则不进行计算，具有缓存特性。
- watch 会侦听前后变化的状态，无论操作的值是否变化，都会执行定义的函数体，所以会有 data(newVal, oldVal)。



<template>
<div>
  
  <div id="itemMenu" v-show="showMenu" @mouseleave="showMenu=!showMenu"></div>

  <Icon type="md-menu" @click="showMenu=!showMenu" style="position: fixed; right: 30px; top: 90px; font-size: 30px; cursor: pointer;"></Icon>
</div>
</template>

<script>
export default {
  data(){
    return {
      showMenu: false
    }
  },
  created() {
    this.$nextTick(() => {
      let titles = document.querySelectorAll('h1, h2')
      const itemMenu = document.querySelector('#itemMenu')
      let html = ''
      for (let i = 0; i < titles.length; i++) {
        const tit = titles[i]
        tit.setAttribute("id", tit.innerText);
        tit.innerHTML = tit.innerText + '<a href="#" name="'+tit.innerText+'"></a>'
        html += '<a href="#'+tit.innerText+'">'+tit.innerText+ '</a>'
      }
      itemMenu.innerHTML  = html
    })
    
  }
}
</script>