<template>
  <b-row class="d-flex flex-row justify-content-center">
    <b-col v-for="i in listBedroom" lg="6" class="m-3 card-bedroom p-0">
      <div class="card-image w-100 h-50">
        <img src="../../assets/images/bedroom.jpeg" alt="key" class="image-bedroom">
      </div>
      <b-col class="h-50 justify-content-lg-between">
        <div class="w-100 h-50">
          <div>R$ 1200,00</div>
          <div>Quarto privativo</div>
          <div>Maraponga</div>
          <div>Descricao</div>
        </div>
        <b-button class="w-100">Detalhes</b-button>
      </b-col>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    name: "card_bedroom",
    props: {
      listBedroom: {
        type: Array,
        required: true
      }
    },
    data() {
      return{

      }
    },

  }

</script>

<style scoped>
  .card-bedroom{
    width: 300px;
    height: 500px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  .card-image{
    height: 230px;
    background-color: transparent;
  }

  .image-bedroom{
    width: 100%;
    height: 230px;
    object-fit: cover;
    background-repeat: no-repeat;
  }



</style>