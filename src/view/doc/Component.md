## 组件结构
```html
<template>
  <div id="">
    <!-- 
      组件HTML部分
      一个组件只能有一个跟元素
     -->
  </div>
</template>
<script>
export default {
  // 组件名称
  name: '', 
  // 注册子组件
  components: {},
  // 父组件传值
  props: {},
  // 变量，必须 return 返回对象
  // 此处定义的变量会绑定到vue组件实例上
  data() {
    return {}
  },
  // 数据监听
  watch: { },
  // 计算属性
  computed: { },
  // 方法，即组件中用到事件、方法
  methods: { },
  // 生命周期钩子
  created() { },
  beforeDestroy() {
  },
  //......
}
</script>
<style scoped>
/* 
  组件css部分
  scoped  加上该属性，此块css只会在该组件中生效，否则会全局生效，为了不影响其他页面，一般都需要加scoped属性
 */
</style>

```
## 组件使用

**全局组件** --全局组件在所有的vue实例中都可以使用
**局部组件** --局部组件在某一个具体的vue实例中定义的，只能在这个vue实例中使用

```html
<script>
import MyComponent from ./MyComponent.vue
// 全局注册
vue.components({
        // key 是组件名，value 是组件对象
        'my-component': MyComponent,
      })

// 局部注册
export default {
  name: '', 
  components: { MyComponent },
  props: {},
  data() {
    return {}
  },
  //......
}
</script>

<template>
  <div id="">
    <MyComponent></MyComponent>
    <!-- 或 -->
    <My-Component></My-Component>
  </div>
</template>
```

## 组件props

父组件通过 Prop 向子组件传递数据

```js
// 简单语法
props: ['size', 'myMessage']


// 对象语法，提供验证
/**
    type: 可以是下列原生构造函数中的一种：String、Number、Boolean、Array、Object、Date、Function、Symbol、任何自定义构造函数、或上述内容组成的数组。
    default: any
    为该 prop 指定一个默认值。如果该 prop 没有被传入，则换做用这个值。对象或数组的默认值必须从一个工厂函数返回。
    required: Boolean   定义该 prop 是否是必填项。
    validator: Function  自定义验证函数会将该 prop 的值作为唯一的参数代入。
**/
props: {
  // 检测类型
  height: Number,
  // 检测类型 + 其他验证
  age: {
    type: Number,
    default: 0,
    required: true,
    validator: function (value) {
      return value >= 0
    }
  }
}
```

## 组件通信

[Vue 组件间通信六种方式](https://juejin.im/post/5cde0b43f265da03867e78d3 "Vue 组件间通信六种方式 By 掘金")
<br/>

### 父组件到子组件

方式：通过子组件props属性来传递数据 props是一个数组<br/>
注意：属性的值必须在组件中通过props属性显示指定，否则，不会生效<br/>
说明：传递过来的props属性的用法与data属性的用法相同
```html
<div id="app">
  <!-- 如果需要往子组件总传递父组件data中的数据 需要加v-bind="数据名称" -->
  <hello v-bind:msg="info"></hello>
  <!-- 如果传递的是字面量 那么直接写-->
  <hello my-msg="abc"></hello>
</div>

<!-- js -->
<script>
  new Vue({
    el: "#app",
    data : {
      info : 15
    },
    components: {
      hello: {
        // 创建props及其传递过来的属性
        props: ['msg', 'myMsg'],
        template: '<h1>这是 hello 组件，这是消息：{{msg}} --- {{myMsg}}</h1>'
      }
    }
  })
</script>
```
### 子组件到父组件

方式：父组件给子组件传递一个函数，由子组件调用这个函数<br/>
说明：借助vue中的自定义事件`（v-on:cunstomFn="fn"）`<br/>
步骤:

1、在父组件中定义方法 parentFn<br/>
2、在子组件 组件引入标签 中绑定自定义事件 v-on:自定义事件名="父组件中的方法" ==> `@pfn="parentFn"`<br/>
3、子组件中通过`$emit()`触发自定义事件事件 `this.$emit(pfn,参数列表。。。)`

```html
<hello @pfn="parentFn"></hello>

<script>
  Vue.component('hello', {
    template: '<button @click="fn">按钮</button>',
    methods: {
      // 子组件：通过$emit调用
      fn() {
        this.$emit('pfn', '这是子组件传递给父组件的数据')
      }
    }
  })
  new Vue({
    methods: {
      // 父组件：提供方法
      parentFn(data) {
        console.log('父组件：', data)
      }
    }
  })
</script>

```

### 非父子组件通讯

在简单的场景下，可以使用一个空的 Vue 实例作为事件总线<br/>
`$on()`：绑定自定义事件

```js
var bus = new Vue()

// 在组件 B 绑定自定义事件
bus.$on('id-selected', function (id) {
  // ...
})
// 触发组件 A 中的事件
bus.$emit('id-selected', 1)

```

示例：组件A ---> 组件B

```html
<!-- 组件A： -->
<com-a></com-a>
<!-- 组件B： -->
<com-b></com-b>

<script>
  // 中间组件
  var bus = new Vue()
  // 通信组件
  var vm = new Vue({
    el: '#app',
    components: {
      comB: {
        template: '<p>组件A告诉我：{{msg}}</p>',
        data() {
          return {
            msg: ''
          }
        },
        created() {
          // 给中间组件绑定自定义事件 注意:如果用到this 需要用箭头函数
          bus.$on('tellComB', (msg) => {
            this.msg = msg
          })
        }
      },
      comA: {
        template: '<button @click="emitFn">告诉B</button>',
        methods: {
          emitFn() {
            // 触发中间组件中的自定义事件
            bus.$emit('tellComB', '土豆土豆我是南瓜')
          }
        }
      }
    }
  })
</script>

```

### 内容分发

通过 标签指定内容展示区域
<br/>

案例：
```html
<!-- html代码 -->
<div id="app">
  <hello>
    <!-- 如果只有一个slot插槽 那么不需要指定名称 -->
    <p slot="插槽名称">我是额外的内容</p>
  </hello>
</div>
<!-- js代码 -->
<script>
  new vue({
    el : "#app",
    components : {
      hello : {
        template : `
            <div>
              <p>我是子组件中的内容</p>
              <slot name="名称"></slot>
            </div>
          `
      }
    }
  })
</script>

```

### 获取组件（或元素） - refs

说明：`vm.$refs` 一个对象，持有已注册过 ref 的所有子组件（或HTML元素）<br/>
使用：在 HTML元素 中，添加ref属性，然后在JS中通过vm.$refs.属性来获取<br/>
注意：如果获取的是一个子组件，那么通过ref就能获取到子组件中的data和methods
```html
<div id="app">
  <div ref="dv"></div>
  <my res="my"></my>
</div>

<!-- js -->
<script>
  new Vue({
    el : "#app",
    mounted() {
      this.$refs.dv //获取到元素
      this.$refs.my //获取到组件
    },
    components : {
      my : {
        template: `<a>sss</a>`
      }
    }
  })
</script>
```

### .sync 修饰符
在有些情况下，我们可能需要对一个 prop 进行“双向绑定”。不幸的是，真正的双向绑定会带来维护上的问题，因为子组件可以修改父组件，且在父组件和子组件都没有明显的改动来源。这种情况以 `update:myPropName` 的模式触发事件取而代之。

子组件的值发生变化，通过 update 的认识向父组件更新
```js
this.$emit('update:title', newTitle)
```

然后父组件通过 .sync 修饰符 可以监听那个事件并根据需要更新一个本地的数据属性。
```html
<text-document :title.sync="doc.title"></text-document>
```

**注意**
- 带有 .sync 修饰符的 v-bind 不能和表达式一起使用 (例如 v-bind:title.sync=”doc.title + ‘!’” 是无效的)。取而代之的是，你只能提供你想要绑定的属性名，类似 v-model。
- 数据是单向的，子组件发生变化会向父组件更新，父组件变化不会同步到子组件


## 插槽

## 混入 - mixin

当多个组件有相同的方法或属性时，可以把这一部分提取出来，然后通过mixin的方式分别混入到各组件，达到复用效果。<br/>
当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”，混入对象的钩子将在组件自身钩子之前调用，遇到相同的属性或方法，组件内部的会替换混入的部分

```js
// mixin.js
export default {
  data: function () {
    return {
      message: 'hello',
      foo: 'abc'
    }
  },
  methods: {},
  created() {
    console.log('mixin')
  }
}

// vue 组件
import mixin from "./mixin.js"
export default {
  mixins: [mixin],
  data: function () {
    return {
      message: 'goodbye',
      bar: 'def'
    }
  },
  created: function () {
    console.log(this.$data) // 该打印之前会先打印 'mixin'
    // => { message: "goodbye", foo: "abc", bar: "def" }
  }
}
```

## 渲染函数 - reader
[reader](/vueReaders)

<template>
  <TitleMenu></TitleMenu>
</template>