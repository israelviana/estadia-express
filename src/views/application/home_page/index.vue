<template>
  <b-col>
    <b-card class="w-100 mt-5 border-0 justify-content-center flex-column text-center align-center">
      <b-card-text>
        <h2>Quartos para alugar e apartamentos para dividir em toda Fortaleza!</h2>
        <h6>Alugue o seu quarto ideal por um preço baixo e sem abdicar da segurança e qualidade do Estadia Express!</h6>
      </b-card-text>
    </b-card>
    <b-col class="p-4">
      <div class="container" >
        <img id="home-img" src="../../../assets/images/roomsG.jpeg" alt="home"/>
      </div>
    </b-col>
    <b-card-text class="w-100 mt-5 border-0 justify-content-center flex-column text-center align-center">
      <h2>Confira abaixo nossos principais quartos!</h2>
    </b-card-text>
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
.container {
  padding: 0 2rem 0 2rem;
  width: 100%;
  height: auto;
  max-width: 100%;
  display: block;
}

.container img {
  width: 100%;
  height: auto;
  display: block;
}
</style>