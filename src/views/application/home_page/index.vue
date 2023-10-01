<template>
  <b-col>

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
      listBedroom: [1, 2, 3 , 4, 5, 6, 7 ,8],
    }
  },
}
</script>


<style scoped>
</style>