<template>
  <b-col>
    <b-card class="w-100 mt-5 border-0 justify-content-center flex-column text-center align-center">
      <b-card-text>
        <h2>Quartos para alugar e apartamentos para dividir em toda Fortaleza!</h2>
        <h6>Alugue o seu quarto ideal por um preço baixo e sem abdicar da segurança e qualidade do Estadia Express!</h6>
      </b-card-text>
    </b-card>
    <card_bedroom :list-bedroom="listBedroom"/>
  </b-col>
</template>

<script>
import Card_bedroom from "@/components/card_bedroom/card_bedroom.vue";
export default {
  name: "home_page",
  components: {Card_bedroom},
  data() {
    return{
      listBedroom: [1, 2, 3 , 4, 5, 6, 7, 8],
    }
  },
}
</script>


<style scoped>
</style>