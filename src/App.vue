<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     tableCodes: {
  //       category: '',
  //       command: '',
  //       descriptionPTBR: '',
  //       descriptionEN: '',
  //       example: ''
  //     }
  //   }
  // }
  // created() {
  //   this.$http.post('users.json', {
  //     nome: 'Thiago',
  //     email: 'thiago@email.com'
  //   }).then(res => console.log(res))
  // }
}
</script>

<style lang="scss">

</style>
