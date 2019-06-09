
Vue 推荐在绝大多数情况下使用 template 来创建你的 HTML。然而在一些场景中，你真的需要 JavaScript 的完全编程的能力，这就是 render 函数，它比 template 更接近编译器。

# render 基本写法

```js
export default {
  name: 'renderTest',
  data() {},
  render: (createElement) => {
    return createElement(tag, data, context)
  },
  props: {},
  methods: {},
  created () {}
  ...
}
```

Vue 通过建立一个虚拟 DOM 对真实 DOM 发生的变化保持追踪。
render函数提供了一个参数`createElement`(可以简写为`h`), 用来生成DOM, 其有三个参数:
- 第一个参数:  {String | Object | Function}， 必要参数，一个 HTML 标签字符串，组件选项对象，或者一个返回值类型为 String/Object 的函数
- 第二个参数:  {Object}，可选参数，一个包含模板相关属性的数据对象，这样，您可以在 template 中使用这些属性。
- 第三个参数:  {String | Array}，可选参数， 子节点 (VNodes)，由 `createElement()` 构建而成， 或使用字符串来生成“文本节点”。

**数据对象详解**
```js
{
  // 和`v-bind:class`一样的 API
  'class': {
    foo: true,
    bar: false
  },
  // 和`v-bind:style`一样的 API
  style: {
    color: 'red',
    fontSize: '14px'
  },
  // 正常的 HTML 特性
  attrs: {
    id: 'foo'
  },
  // 组件 props
  props: {
    myProp: 'bar'
  },
  // DOM 属性
  domProps: {
    innerHTML: 'baz'
  },
  // 事件监听器基于 `on`
  // 所以不再支持如 `v-on:keyup.enter` 修饰器
  // 需要手动匹配 keyCode。
  on: {
    click: this.clickHandler
  },
  // 仅对于组件，用于监听原生事件，而不是组件内部使用 `vm.$emit` 触发的事件。
  nativeOn: {
    click: this.nativeClickHandler
  },
  // 自定义指令。注意，您无法对绑定中的 `oldValue` 赋值
  // Vue 会为您持续追踪
  directives: [
    {
      name: 'my-custom-directive',
      value: '2',
      expression: '1 + 1',
      arg: 'foo',
      modifiers: {
        bar: true
      }
    }
  ],
  // Scoped slots in the form of
  // { name: props => VNode | Array<VNode> }
  scopedSlots: {
    default: props => createElement('span', props.text)
  },
  // 如果组件是其他组件的子组件，需为插槽指定名称
  slot: 'name-of-slot',
  // 其他特殊顶层属性
  key: 'myKey',
  ref: 'myRef'
}
```

**v-if 、 v-for 与 v-model**
render 函数中没有与v-if 、 v-for 、v-model 相应的 api, 必须自己来实现相应的逻辑
```js
render: function (createElement) {
  if (this.items.length) {
    return createElement('ul', this.items.map(function (item) {
      return createElement('li', item)
    }))
  } else {
    return createElement('p', 'No items found.')
  }
}
```

**完整示例**
renderTest组件
```js
export default {
  name: 'renderTest',
  data() {
    return {
    }
  },
  render: function (createElement) {

    return createElement(
      'h' + this.level,
      {
        on: {
          click: this.clickHandler
        }
      },
      [
        createElement('a', {
          attrs: {
            href: '##'
          }
        }, this.$slots.default)
      ]
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  methods: {
    clickHandler () {}
  }
}
```

使用组件
```js
<renderTest :level="1">
  <button> Hello world!</button>
</renderTest>
```

## 组件中自定义render(函数式组件)

render组件
```js
export default {
  name: 'renderTest',
  functional: true,
  props: {
    render: Function,
    item: String,
    index: Number
  },
  render: (h, ctx) => {
    const params = {
      item: ctx.props.item,
      index: ctx.props.index
    }
    return ctx.props.render(h, params)
  }
}
```
我们将组件记为 functional，这意味它无状态（没有 data），无实例（没有 this 上下文）。
在添加 functional: true 之后，组件的 render 函数之间将增加 ctx 参数
组件需要的一切都是通过 ctx 传递，包括：
* props: 提供 props 的对象
* children: VNode 子节点的数组
* slots: slots 对象
* data: 传递给组件的 data 对象
* parent: 对父组件的引用

list组件
```js
<template>
<ul class="bs-list left" style="width:200px;">
  <li v-for="(item, i) in listDate" class="list-item" :key="i">
    <span>{{item}}</span>
    <renderTest v-if="renderfun" :item="item" :index="i" :render="renderfun"></renderTest>
  </li>
</ul>
</template>
<script>
import renderTest from './renderTest.js'
export default {
  name: 'lists',
  components: { renderTest },
  props: {
    listDate: {
      type: Array
    },
    renderfun: {
      type: Function,
      default() {
        return () => false
      }
    }
  }
}
</script>
```

使用组件
```js
<template>
  <div class="text">
     <lists :listDate="listDate" :renderfun="renderfun"></lists>
  </div> 
</template>
<script>
import lists from './lists.vue'
export default {
  name: 'text',
  components: { lists },
  data() {
    return {
      listDate: [ 'list item 1', 'list item 2', 'list item 3', 'list item 4', 'list item 5' ],
      renderfun: (h, ctx) => {
        return h('div', {
          style: {display: 'inline-block', float: 'right'}
        }, [
          h('button', {
            class: ['btn-primary'],
            on: {
              click: () => {
                this.listDate.splice(ctx.index, 1)
              }
            }
          }, '删除')
        ])
      }
    }
  }
}
</script>
```

## JSX使用
安装babel依赖
```npm
npm install babel-plugin-syntax-jsx babel-plugin-transform-vue-jsx babel-helper-vue-jsx-merge-props babel-preset-env --save-dev
```

 .babelrc 文件配置
```js
{
  "presets": ["env"],
  "plugins": ["transform-vue-jsx"]
}
```

**书写格式**
```js
render (h) {
  return (
    <div
      // 普通的属性
      id="foo"
      // DOM 属性，添加前缀`domProps`
      domPropsInnerHTML="bar"
      // 事件监听，添加前缀 `on` or `nativeOn`
      onClick={this.clickHandler}
      nativeOnClick={this.nativeClickHandler}
      // 其他属性
      class={{ foo: true, bar: false }}
      style={{ color: 'red', fontSize: '14px' }}
      key="key"
      ref="ref"
      slot="slot">
    </div>
  )
}
```

**实例**
```js
export default {
  name: 'renderJSX',
  data() {
    return {
      num: 1
    }
  },
  render() {
    const data = {
      class: ['b', 'c']
    }
    return (<div class = 'div'>
    <span>123</span>
      <button onClick={this.clickHandler} class='btn-primary'>btn</button>
      <span class='a' {...data}>{this.num}</span>
    </div>)
  },
  props: {
    level: {
      type: Number
    }
  },
  methods: {
    clickHandler() {
      this.num++
      console.log('clickHandler')
    }
  },
  created() {}
}
```
----
参考文章:
- https://vuefe.cn/v2/guide/render-function.html
- https://github.com/vuejs/babel-plugin-transform-vue-jsx