<template>
  <div id="app">
    <!-- <router-view/> -->
    <myMenu />
  </div>
</template>

<script>
import myMenu from './view/menu'
export default {
  name: 'App',
  components: {
    myMenu
  },
  created() {
    window.onbeforeunload = function() {
      location.href = '/Course'
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
section {
  font-size: 14px;
}
/* ul,li{ padding:0;margin:0;list-style:none} */
section ul {
  padding: 0 26px;
}

section h1, section h2 {
  margin: 10px 0
}

section blockquote p {
  font-weight: bold;
  border-left: 3px solid #2d8cf0;
  padding-left: 10px;
}
section img {
  width: 100%;
}
 #itemMenu {
    background: #fff;
    line-height: 2;
    padding: 20px;
    position: fixed;
    right: 20px;
    top: 90px;
    cursor: pointer;
  }
  #itemMenu a {
    color: #666;
    display: block;
  }
  #itemMenu a:hover {
    color: #2d8cf0;
  }
</style>
