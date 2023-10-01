<template>
      <b-row class="toolbar">
        <v-toolbar class="shadow-sm justify-content-evenly">
          <v-toolbar-title class="p-5">Estadia Express</v-toolbar-title>
            <b-form-input class="w-50" placeholder="Pesquise pelo seu quarto">
            </b-form-input>
            <v-btn icon @click="">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
         <div class="flex-row d-flex">
           <b-button class="m-1">Entrar</b-button>
           <b-button class="m-1">Anunciar quarto</b-button>
         </div>
        </v-toolbar>
        <b-col class="container-fluid">
          <router-view/>
        </b-col>
      </b-row>
</template>

<style scoped>
  .toolbar{
    padding-bottom: 1rem;
  }
</style>

<script>

export default {
  components: {
  },
  data() {
    return {}
  },
}
</script>