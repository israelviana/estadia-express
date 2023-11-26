<script >

import Card_bedroom from "@/components/card_bedroom/card_bedroom.vue";
export default {
  name: "bedrooms",
  components: {Card_bedroom},
  data() {
    return{
      listBedroom: [1, 2, 3 , 4, 5, 6, 7, 8],
    }
  }
}
</script>

<template>
  <b-col>
    <b-col>
      <card_bedroom :list-bedroom="listBedroom"/>
    </b-col>
  </b-col>

</template>

<style scoped>

</style>