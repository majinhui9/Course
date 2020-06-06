webpackJsonp([0],{"FZ+f":function(s,t){s.exports=function(s){var t=[];return t.toString=function(){return this.map(function(t){var a=function(s,t){var a=s[1]||"",r=s[3];if(!r)return a;if(t&&"function"==typeof btoa){var n=(p=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(p))))+" */"),e=r.sources.map(function(s){return"/*# sourceURL="+r.sourceRoot+s+" */"});return[a].concat(e).concat([n]).join("\n")}var p;return[a].join("\n")}(t,s);return t[2]?"@media "+t[2]+"{"+a+"}":a}).join("")},t.i=function(s,a){"string"==typeof s&&(s=[[null,s,""]]);for(var r={},n=0;n<this.length;n++){var e=this[n][0];"number"==typeof e&&(r[e]=!0)}for(n=0;n<s.length;n++){var p=s[n];"number"==typeof p[0]&&r[p[0]]||(a&&!p[2]?p[2]=a:a&&(p[2]="("+p[2]+") and ("+a+")"),t.push(p))}},t}},GJxo:function(s,t,a){(s.exports=a("FZ+f")(!1)).push([s.i,"",""])},c3iQ:function(s,t,a){var r=a("GJxo");"string"==typeof r&&(r=[[s.i,r,""]]),r.locals&&(s.exports=r.locals);a("rjj0")("16c003dc",r,!0,{})},kc9C:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("组件结构")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("组件使用")]),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),a("h2",[s._v("组件props")]),s._v(" "),a("p",[s._v("父组件通过 Prop 向子组件传递数据")]),s._v(" "),s._m(3),s._v(" "),a("h2",[s._v("组件通信")]),s._v(" "),s._m(4),s._v(" "),a("h3",[s._v("父组件到子组件")]),s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),a("h3",[s._v("子组件到父组件")]),s._v(" "),s._m(7),s._v(" "),s._m(8),s._v(" "),s._m(9),s._v(" "),a("h3",[s._v("非父子组件通讯")]),s._v(" "),s._m(10),s._v(" "),s._m(11),s._v(" "),a("p",[s._v("示例：组件A ---\x3e 组件B")]),s._v(" "),s._m(12),s._v(" "),a("h3",[s._v("内容分发")]),s._v(" "),s._m(13),s._v(" "),a("p",[s._v("案例：")]),s._v(" "),s._m(14),s._v(" "),a("h3",[s._v("获取组件（或元素） - refs")]),s._v(" "),s._m(15),s._v(" "),s._m(16),s._v(" "),a("h3",[s._v(".sync 修饰符")]),s._v(" "),s._m(17),s._v(" "),a("p",[s._v("子组件的值发生变化，通过 update 的认识向父组件更新")]),s._v(" "),s._m(18),s._v(" "),a("p",[s._v("然后父组件通过 .sync 修饰符 可以监听那个事件并根据需要更新一个本地的数据属性。")]),s._v(" "),s._m(19),s._v(" "),s._m(20),s._v(" "),s._m(21),s._v(" "),a("h2",[s._v("插槽")]),s._v(" "),a("h2",[s._v("混入 - mixin")]),s._v(" "),s._m(22),s._v(" "),s._m(23),s._v(" "),a("h2",[s._v("渲染函数 - reader")]),s._v(" "),s._m(24),s._v(" "),[a("TitleMenu")]],2)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- \n      组件HTML部分\n      一个组件只能有一个跟元素\n     --\x3e")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 组件名称")]),s._v("\n  name: "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v(", \n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 注册子组件")]),s._v("\n  components: {},\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 父组件传值")]),s._v("\n  props: {},\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 变量，必须 return 返回对象")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 此处定义的变量会绑定到vue组件实例上")]),s._v("\n  data() {\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {}\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 数据监听")]),s._v("\n  watch: { },\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 计算属性")]),s._v("\n  computed: { },\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 方法，即组件中用到事件、方法")]),s._v("\n  methods: { },\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 生命周期钩子")]),s._v("\n  created() { },\n  beforeDestroy() {\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//......")]),s._v("\n}\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("scoped")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"css"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* \n  组件css部分\n  scoped  加上该属性，此块css只会在该组件中生效，否则会全局生效，为了不影响其他页面，一般都需要加scoped属性\n */")]),s._v("\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("strong",[this._v("全局组件")]),this._v(" --全局组件在所有的vue实例中都可以使用\n"),t("strong",[this._v("局部组件")]),this._v(" --局部组件在某一个具体的vue实例中定义的，只能在这个vue实例中使用")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" MyComponent "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" ./MyComponent.vue\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 全局注册")]),s._v("\nvue.components({\n        "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// key 是组件名，value 是组件对象")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'my-component'")]),s._v(": MyComponent,\n      })\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 局部注册")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v(", \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("components")]),s._v(": { MyComponent },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(": {},\n  data() {\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {}\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//......")]),s._v("\n}\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("MyComponent")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("MyComponent")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 或 --\x3e")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("My-Component")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("My-Component")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 简单语法")]),s._v("\nprops: ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'size'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'myMessage'")]),s._v("]\n\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 对象语法，提供验证")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/**\n    type: 可以是下列原生构造函数中的一种：String、Number、Boolean、Array、Object、Date、Function、Symbol、任何自定义构造函数、或上述内容组成的数组。\n    default: any\n    为该 prop 指定一个默认值。如果该 prop 没有被传入，则换做用这个值。对象或数组的默认值必须从一个工厂函数返回。\n    required: Boolean   定义该 prop 是否是必填项。\n    validator: Function  自定义验证函数会将该 prop 的值作为唯一的参数代入。\n**/")]),s._v("\nprops: {\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 检测类型")]),s._v("\n  height: "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Number")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 检测类型 + 其他验证")]),s._v("\n  age: {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Number")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("default")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("required")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("validator")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("value")]),s._v(") ")]),s._v("{\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" value >= "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n    }\n  }\n}\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("a",{attrs:{href:"https://juejin.im/post/5cde0b43f265da03867e78d3",title:"Vue 组件间通信六种方式 By 掘金"}},[this._v("Vue 组件间通信六种方式")]),this._v(" "),t("br")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("方式：通过子组件props属性来传递数据 props是一个数组"),t("br"),this._v("\n注意：属性的值必须在组件中通过props属性显示指定，否则，不会生效"),t("br"),this._v("\n说明：传递过来的props属性的用法与data属性的用法相同")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"app"')]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('\x3c!-- 如果需要往子组件总传递父组件data中的数据 需要加v-bind="数据名称" --\x3e')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("hello")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-bind:msg")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"info"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("hello")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 如果传递的是字面量 那么直接写--\x3e")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("hello")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("my-msg")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"abc"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("hello")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- js --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"actionscript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n    el: "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#app"')]),s._v(",\n    data : {\n      info : "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15")]),s._v("\n    },\n    components: {\n      hello: {\n        "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 创建props及其传递过来的属性")]),s._v("\n        props: ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'msg'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'myMsg'")]),s._v("],\n        template: "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'<h1>这是 hello 组件，这是消息：{{msg}} --- {{myMsg}}</h1>'")]),s._v("\n      }\n    }\n  })\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("方式：父组件给子组件传递一个函数，由子组件调用这个函数"),t("br"),this._v("\n说明：借助vue中的自定义事件"),t("code",{pre:!0},[this._v('（v-on:cunstomFn="fn"）')]),t("br"),this._v("\n步骤:")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("1、在父组件中定义方法 parentFn"),t("br"),this._v('\n2、在子组件 组件引入标签 中绑定自定义事件 v-on:自定义事件名="父组件中的方法" ==> '),t("code",{pre:!0},[this._v('@pfn="parentFn"')]),t("br"),this._v("\n3、子组件中通过"),t("code",{pre:!0},[this._v("$emit()")]),this._v("触发自定义事件事件 "),t("code",{pre:!0},[this._v("this.$emit(pfn,参数列表。。。)")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("hello")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@pfn")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"parentFn"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("hello")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  Vue.component("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'hello'")]),s._v(", {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("template")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'<button @click=\"fn\">按钮</button>'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 子组件：通过$emit调用")]),s._v("\n      fn() {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$emit("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'pfn'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'这是子组件传递给父组件的数据'")]),s._v(")\n      }\n    }\n  })\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 父组件：提供方法")]),s._v("\n      parentFn(data) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'父组件：'")]),s._v(", data)\n      }\n    }\n  })\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("在简单的场景下，可以使用一个空的 Vue 实例作为事件总线"),t("br"),this._v(" "),t("code",{pre:!0},[this._v("$on()")]),this._v("：绑定自定义事件")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" bus = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue()\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 在组件 B 绑定自定义事件")]),s._v("\nbus.$on("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'id-selected'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("id")]),s._v(") ")]),s._v("{\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n})\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 触发组件 A 中的事件")]),s._v("\nbus.$emit("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'id-selected'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(")\n\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 组件A： --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("com-a")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("com-a")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 组件B： --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("com-b")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("com-b")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"actionscript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 中间组件")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" bus = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue()\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 通信组件")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" vm = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n    el: "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(",\n    components: {\n      comB: {\n        template: "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'<p>组件A告诉我：{{msg}}</p>'")]),s._v(",\n        data() {\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            msg: "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v("\n          }\n        },\n        created() {\n          "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 给中间组件绑定自定义事件 注意:如果用到this 需要用箭头函数")]),s._v("\n          bus.$on("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'tellComB'")]),s._v(", (msg) => {\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".msg = msg\n          })\n        }\n      },\n      comA: {\n        template: "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'<button @click=\"emitFn\">告诉B</button>'")]),s._v(",\n        methods: {\n          emitFn() {\n            "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 触发中间组件中的自定义事件")]),s._v("\n            bus.$emit("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'tellComB'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'土豆土豆我是南瓜'")]),s._v(")\n          }\n        }\n      }\n    }\n  })\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("通过 标签指定内容展示区域\n"),t("br")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- html代码 --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"app"')]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("hello")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 如果只有一个slot插槽 那么不需要指定名称 --\x3e")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"插槽名称"')]),s._v(">")]),s._v("我是额外的内容"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("hello")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- js代码 --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"handlebars"}},[a("span",{pre:!0,attrs:{class:"xml"}},[s._v('\n  new vue({\n    el : "#app",\n    components : {\n      hello : {\n        template : `\n            '),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("我是子组件中的内容"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("slot")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"名称"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("slot")]),s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n          `\n      }\n    }\n  })\n")])]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("说明："),t("code",{pre:!0},[this._v("vm.$refs")]),this._v(" 一个对象，持有已注册过 ref 的所有子组件（或HTML元素）"),t("br"),this._v("\n使用：在 HTML元素 中，添加ref属性，然后在JS中通过vm.$refs.属性来获取"),t("br"),this._v("\n注意：如果获取的是一个子组件，那么通过ref就能获取到子组件中的data和methods")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"app"')]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dv"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("my")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("res")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"my"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("my")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- js --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(" : "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#app"')]),s._v(",\n    mounted() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.dv "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//获取到元素")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.my "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//获取到组件")]),s._v("\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("components")]),s._v(" : {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("my")]),s._v(" : {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("template")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`<a>sss</a>`")]),s._v("\n      }\n    }\n  })\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("在有些情况下，我们可能需要对一个 prop 进行“双向绑定”。不幸的是，真正的双向绑定会带来维护上的问题，因为子组件可以修改父组件，且在父组件和子组件都没有明显的改动来源。这种情况以 "),t("code",{pre:!0},[this._v("update:myPropName")]),this._v(" 的模式触发事件取而代之。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$emit("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'update:title'")]),this._v(", newTitle)\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("text-document")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":title.sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"doc.title"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("text-document")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("strong",[this._v("注意")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("带有 .sync 修饰符的 v-bind 不能和表达式一起使用 (例如 v-bind:title.sync=”doc.title + ‘!’” 是无效的)。取而代之的是，你只能提供你想要绑定的属性名，类似 v-model。")]),this._v(" "),t("li",[this._v("数据是单向的，子组件发生变化会向父组件更新，父组件变化不会同步到子组件")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("当多个组件有相同的方法或属性时，可以把这一部分提取出来，然后通过mixin的方式分别混入到各组件，达到复用效果。"),t("br"),this._v("\n当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”，混入对象的钩子将在组件自身钩子之前调用，遇到相同的属性或方法，组件内部的会替换混入的部分")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// mixin.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'hello'")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("foo")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'abc'")]),s._v("\n    }\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {},\n  created() {\n    "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'mixin'")]),s._v(")\n  }\n}\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// vue 组件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" mixin "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"./mixin.js"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mixins")]),s._v(": [mixin],\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'goodbye'")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bar")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'def'")]),s._v("\n    }\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("created")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n    "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$data) "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 该打印之前会先打印 'mixin'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('// => { message: "goodbye", foo: "abc", bar: "def" }')]),s._v("\n  }\n}\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("a",{attrs:{href:"/vueReaders"}},[this._v("reader")])])}]};var n=a("VU/8")({name:"",components:{},props:{},data:function(){return{}},watch:{},computed:{},methods:{},created:function(){},beforeDestroy:function(){}},r,!1,function(s){a("c3iQ")},"data-v-4f8198d6",null);t.default=n.exports},nIYD:function(s,t,a){s.exports=a("kc9C")},rjj0:function(s,t,a){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n=a("tTVk"),e={},p=r&&(document.head||document.getElementsByTagName("head")[0]),l=null,v=0,_=!1,c=function(){},h=null,o="data-vue-ssr-id",i="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(s){for(var t=0;t<s.length;t++){var a=s[t],r=e[a.id];if(r){r.refs++;for(var n=0;n<r.parts.length;n++)r.parts[n](a.parts[n]);for(;n<a.parts.length;n++)r.parts.push(u(a.parts[n]));r.parts.length>a.parts.length&&(r.parts.length=a.parts.length)}else{var p=[];for(n=0;n<a.parts.length;n++)p.push(u(a.parts[n]));e[a.id]={id:a.id,refs:1,parts:p}}}}function j(){var s=document.createElement("style");return s.type="text/css",p.appendChild(s),s}function u(s){var t,a,r=document.querySelector("style["+o+'~="'+s.id+'"]');if(r){if(_)return c;r.parentNode.removeChild(r)}if(i){var n=v++;r=l||(l=j()),t=f.bind(null,r,n,!1),a=f.bind(null,r,n,!0)}else r=j(),t=function(s,t){var a=t.css,r=t.media,n=t.sourceMap;r&&s.setAttribute("media",r);h.ssrId&&s.setAttribute(o,t.id);n&&(a+="\n/*# sourceURL="+n.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");if(s.styleSheet)s.styleSheet.cssText=a;else{for(;s.firstChild;)s.removeChild(s.firstChild);s.appendChild(document.createTextNode(a))}}.bind(null,r),a=function(){r.parentNode.removeChild(r)};return t(s),function(r){if(r){if(r.css===s.css&&r.media===s.media&&r.sourceMap===s.sourceMap)return;t(s=r)}else a()}}s.exports=function(s,t,a,r){_=a,h=r||{};var p=n(s,t);return m(p),function(t){for(var a=[],r=0;r<p.length;r++){var l=p[r];(v=e[l.id]).refs--,a.push(v)}t?m(p=n(s,t)):p=[];for(r=0;r<a.length;r++){var v;if(0===(v=a[r]).refs){for(var _=0;_<v.parts.length;_++)v.parts[_]();delete e[v.id]}}}};var d,g=(d=[],function(s,t){return d[s]=t,d.filter(Boolean).join("\n")});function f(s,t,a,r){var n=a?"":r.css;if(s.styleSheet)s.styleSheet.cssText=g(t,n);else{var e=document.createTextNode(n),p=s.childNodes;p[t]&&s.removeChild(p[t]),p.length?s.insertBefore(e,p[t]):s.appendChild(e)}}},tTVk:function(s,t){s.exports=function(s,t){for(var a=[],r={},n=0;n<t.length;n++){var e=t[n],p=e[0],l={id:s+":"+n,css:e[1],media:e[2],sourceMap:e[3]};r[p]?r[p].parts.push(l):a.push(r[p]={id:p,parts:[l]})}return a}}});