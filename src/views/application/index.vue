<template>
      <b-row class="toolbar">
        <v-toolbar class="shadow-sm w-100" style="justify-content: center !important;">
          <v-toolbar-title class="p-5" @click="goToHome" style="cursor: pointer">Estadia Express</v-toolbar-title>
          <b-form-input class="w-50" placeholder="Pesquise pelo seu quarto">
          </b-form-input>
          <v-btn icon @click="" class="p-3">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <div class="flex-row d-flex">
            <b-button class="m-1" @click="goToPageBedrooms">Ver quartos</b-button>
            <b-button class="m-1">Entrar</b-button>
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

  :deep(.v-toolbar__content){
    justify-content: center;
  }
</style>

<script>

export default {
  components: {
  },
  data() {
    return {}
  },
  methods:{
    goToPageBedrooms(){
      this.$router.push('../application/bedrooms').catch(() => {})
    },
    goToHome(){
      this.$router.push('../application/home_page').catch(()=> {})
    }
  }
}
</script>