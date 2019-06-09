<template>
<div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu active-name="vue" theme="dark" width="auto" :open-names="['vue']" accordion @on-select="menuClick">
                <Submenu :name="item.key" v-for="(item) in menuList" :key="item.key">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        {{item.name}}
                    </template>
                    <MenuItem :name="label.key" v-for="(label) in item.children" :key="label.key" >{{label.name}}</MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px',padding: '16px 16px'}">
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)','font-size': '30px','font-weight': 'bold'}">{{activeMenu}}</Header>
            <Content :style="{padding: '16px 16px', height: 'calc(100vh - 98px)',overflow: 'auto'}">
                <router-view/>
            </Content>
        </Layout>
    </div>
</template>
<script>
export default {
  name: 'myMenu',
  data(){
    return {
      collapsed: false,
      activeMenu: 'vue',
      menuList: [
          { name: 'Vue', key: 'vue', children: [
              { name: '基础语法', key: 'basics' },
              { name: '组件', key: 'component' },
              { name: '生命周期', key: 'lifecycle' },
              { name: '路由', key: 'router' },
              { name: 'vuex', key: 'vuex' },
              { name: 'axios', key: 'axios' },
              { name: 'webPack', key: 'webPack' },
              { name: '使用技巧', key: 'useskills' }
          ] }
      ]
    }
  },
  methods: {
    menuClick(item) {
      this.$router.replace({ path: '/' + item })
      this.menuList.forEach((value) =>{
        if (value.key == item) {
          this.activeMenu = value.name
        } else if (value.children.length) {
          value.children.forEach((label)=>{
            if (label.key == item) {
              this.activeMenu = label.name
            }
          })
        }
      })
    },
    toTop(){
      window.scrollBy(0,-window.scrollY)
    }
  }
}
</script>
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
</style>
