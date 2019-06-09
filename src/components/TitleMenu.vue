<template>
<div id="TitleMenu">
  
  <div id="itemMenu" v-show="showMenu" @mouseleave="showMenu=!showMenu"></div>

  <Icon type="md-menu" @click="showMenu=!showMenu" style="position: fixed; right: 30px; top: 90px; font-size: 30px; cursor: pointer;"></Icon>
</div>
</template>

<script>
export default {
  name: 'TitleMenu',
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