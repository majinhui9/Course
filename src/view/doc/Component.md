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

## 组件通讯

### 父组件到子组件

方式：通过子组件props属性来传递数据 props是一个数组
注意：属性的值必须在组件中通过props属性显示指定，否则，不会生效
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

方式：父组件给子组件传递一个函数，由子组件调用这个函数
说明：借助vue中的自定义事件`（v-on:cunstomFn="fn"）`
步骤:

1、在父组件中定义方法 parentFn
2、在子组件 组件引入标签 中绑定自定义事件 v-on:自定义事件名="父组件中的方法" ==> `@pfn="parentFn"`
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

在简单的场景下，可以使用一个空的 Vue 实例作为事件总线
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

说明：`vm.$refs` 一个对象，持有已注册过 ref 的所有子组件（或HTML元素）
使用：在 HTML元素 中，添加ref属性，然后在JS中通过vm.$refs.属性来获取
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

<template>
  <TitleMenu></TitleMenu>
</template>