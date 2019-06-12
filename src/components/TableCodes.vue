<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-12 mb-2">
        <b-button variant="outline-primary" size="sm" class="float-right"
          :pressed.sync="formLoad">Inserir</b-button>
      </div>
      <div class="col-12" v-if="formLoad">
        <b-card class="form-insert bg-secondary">
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

    <!-- <input type="text" v-model="search" placeholder="Search table" class="w-100 mb-5" /> -->

    <table class="table table-sm table-striped table-dark table-hover">
      <thead>
        <tr>
          <th class="category">Categoria</th>
          <th class="commands">Comandos</th>
          <th class="description">Descrição</th>
          <th class="options">Opções</th>
        </tr>
      </thead>
      <tbody v-for="(list, id) in codeListsArray" :key="id">
        <tr>
          <th><pre class="font-system">{{list.categories}}</pre></th>
          <th><pre>{{list.commands}}</pre></th>
          <th><pre class="font-system">{{list.descriptions}}</pre></th>
          <th>
            <b-button variant="warning" size="sm"
              @click="loadCode(id, true)">Alterar</b-button>
            <b-button variant="danger" size="sm" class="ml-2"
              @click="deleteCode(id)">Excluir</b-button>
          </th>
        </tr>
      </tbody>
    </table>

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
      },
      formLoad: false,
      search: ''
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
      this.formLoad = true;
    },
    deleteCode(id) {
      this.$http.delete(`/tableCodesObj/${id}.json`)
        .then(() => {
          this.clear()
          this.getListCode()
        })
    },
    saveCode() {
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

<style lang="scss" scoped>
  @import '../scss/style';
  table {
    font-size: .875rem;

    .options {
      width: 140px;
    }
    pre {
      white-space: pre-line;
      &.font-system {
        font-family: $font-system;
      }
    }
  }
</style>