<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-12">
        <b-card>
          <b-form-group label="Categoria:">
            <b-form-input type="text" size="sm"
              v-model="tableCodesObj.categories"
              placeholder="Categoria"></b-form-input>
          </b-form-group>
          <b-form-group label="Comandos:">
            <b-form-textarea type="text" size="sm"
              v-model="tableCodesObj.commands"
              placeholder="Comandos"></b-form-textarea>
          </b-form-group>
          <b-form-group label="Descrição:">
            <b-form-textarea size="sm"
              v-model="tableCodesObj.descriptions"
              placeholder="Descrição"></b-form-textarea>
          </b-form-group>
          <b-button @click="saveCode"
            size="sm" variant="primary">Salvar</b-button>
        </b-card>
      </div>
    </div>

    <hr>


    <div class="row bg-dark text-white">
      <div class="col-2 border">Categoria</div>
      <div class="col-4 border">Comandos</div>
      <div class="col-4 border">Descrição</div>
      <div class="col-2 border">Opções</div>
    </div>

    <div class="row" v-for="(list, id) in codeListsArray" :key="id">
      <div class="col-2 border">
        {{list.categories}}
      </div>
      <div class="col-4 border">
          <pre>{{list.commands}}</pre>
      </div>
      <div class="col-4 border">
        {{list.descriptions}}
      </div>
      <div class="col-2 border">
        <b-button variant="warning" size="sm"
          @click="loadCode(id)">Alterar</b-button>
        <b-button variant="danger" size="sm" class="ml-2"
          @click="deleteCode(id)">Excluir</b-button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      codeListsArray: [],
      id: null,
      tableCodesObj: {
        categories: '',
        commands: '',
        descriptions: '',
        examples: ''
      }
    }
  },
  methods: {
    clear() {
      this.tableCodesObj.categories = ''
      this.tableCodesObj.commands = ''
      this.tableCodesObj.descriptions = ''
      this.tableCodesObj.examples = ''
      this.id = null
    },
    loadCode(id) {
      this.id = id
      this.tableCodesObj = { ...this.codeListsArray[id] }
    },
    deleteCode(id) {
      this.$http.delete(`/tableCodesObj/${id}.json`)
        .then(() => {
          this.clear()
          this.getListCode()
        })
    },
    saveCode() {
      // this.$http.post('tableCodesObj.json', this.tableCodesObj)
      //   .then(() => {
      //     this.clear()
      //     this.getListCode()
      //   })
      const typeSave = this.id ? 'patch' : 'post'
      const finalUrl = this.id ? `/${this.id}.json` : '.json'
      this.$http[typeSave](`/tableCodesObj${finalUrl}`, this.tableCodesObj)
        .then(() => {
          this.clear()
          this.getListCode()
        })
    },
    getListCode() {
      this.$http('tableCodesObj.json')
      .then(res => {
        this.codeListsArray = res.data
      })
    }
  },
  created() {
    this.getListCode()
  }
}
</script>