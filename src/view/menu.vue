<template>
<div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']" accordion>
                <Submenu :name="i+1" v-for="(item, i) in menuList" :key="item.key">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        {{item.name}}
                    </template>
                    <MenuItem :name="(i+1)+'-'+(index+1)" v-for="(label, index) in item.children" :key="label.key">{{label.name}}</MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
            <Content :style="{padding: '16px 16px', height: 'calc(100vh - 66px)'}">
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
      activeMenu: {},
      menuList: [
          { name: 'Vue', key: 'vue', children: [
              { name: '基础', key: '' },
              { name: '组件', key: '' },
              { name: '生命周期', key: '' },
              { name: '路由', key: 'router' },
              { name: 'vuex', key: 'vuex' },
              { name: 'webPack', key: 'webPack' }
          ] }
      ]
    }
  },
  methods: {
    menuClick(item) {
      this.activeMenu = item
      this.$router.replace({ path: '/' + item.key })
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