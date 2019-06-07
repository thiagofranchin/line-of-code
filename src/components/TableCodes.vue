<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <b-card>
          <b-form-group label="Categoria:">
            <b-form-input type="text" size="lg"
              v-model="tableCodes.categories"
              placeholder="Categoria"></b-form-input>
          </b-form-group>
          <b-form-group label="Comandos:">
            <b-form-input type="text" size="lg"
              v-model="tableCodes.commands"
              placeholder="Comandos"></b-form-input>
          </b-form-group>
          <b-form-group label="Descrição:">
            <b-form-input type="text" size="lg"
              v-model="tableCodes.descriptions"
              placeholder="Descrição"></b-form-input>
          </b-form-group>
          <b-form-group label="Exemplos:">
            <b-form-input type="text" size="lg"
              v-model="tableCodes.examples"
              placeholder="Exemplos"></b-form-input>
          </b-form-group>
          <b-button @click="save"
            size="lg" variant="primary">Salvar</b-button>
        </b-card>
      </div>
    </div>

    <hr>


    <div class="row bg-dark text-white">
      <div class="col-2 border">Categoria</div>
      <div class="col-4 border">Comandos</div>
      <div class="col-3 border">Descrição</div>
      <div class="col-3 border">Exemplo</div>
    </div>

    <div class="row" v-for="(list, id) in codesLists" :key="id">
      <div class="col-2 border">
        {{list.categories}}
      </div>
      <div class="col-4 border">
        <code>{{list.commands}}</code>
      </div>
      <div class="col-3 border">
        {{list.descriptions}}
      </div>
      <div class="col-3 border">
        {{list.examples}}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      codesLists: [],
      tableCodes: {
        categories: '',
        commands: '',
        descriptions: '',
        examples: ''
      }
    }
  },
  methods: {
    save() {
      this.$http.post('tableCodes.json', this.tableCodes)
        .then(resp => {
          this.tableCodes.categories = ''
          this.tableCodes.commands = ''
          this.tableCodes.descriptions = ''
          this.tableCodes.examples = ''
        })
    },
    getListCode() {
      this.$http('tableCodes.json')
      .then(res => {
        this.codesLists = res.data
      })
    }
  },
  created() {
    getListCode()
  }
  // created() {
  //   this.$http.post('users.json', {
  //     nome: 'Thiago',
  //     email: 'thiago@email.com'
  //   }).then(res => console.log(res))
  // }
}
</script>