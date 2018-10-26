<template>
  <div>
    <div class="datail-item">
      <p>Id</p>
      <p>{{ item.id }}</p>
    </div>
    <div class="datail-item">
      <p>Name</p>
      <p>{{ item.name }}</p>
    </div>
    <div class="datail-item">
      <p>Location</p>
      <p>{{ item.location }}</p>
    </div>
    <div class="datail-item">
      <p>Currency</p>
      <p>{{ item.currency }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import _ from 'lodash'

export default {
  props: ['item'],
  data() {
    return {
    }
  },
  computed: {

  },
  methods: {

  },
  created() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.datail-item {
  display: flex;
  margin: 5px auto;
}
.datail-item > p {
}
</style>
