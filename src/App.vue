<template>
  <div id="app">
    <MenuHeader />
    <router-view/>
  </div>
</template>

<script>
import MenuHeader from '@/components/MenuHeader.vue'

export default {
  components: {
    MenuHeader
  }
}
</script>

<style lang="scss">
@import 'scss/style';
</style>
