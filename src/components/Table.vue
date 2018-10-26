<template>
  <div>
  <input type="text" v-model="search">
<table class="table">
    <thead>
        <tr>
            <td>ID</td>
            <td @click="sort('name')">Name</td>
            <td @click="sort('location')">Location</td>
            <td @click="sort('currency')">Currency</td>
            <td></td>
        </tr>
    </thead>
    <tbody>

        <tr v-for="item in data" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.location }}</td>
            <td>{{ item.currency }}</td>
            <td @click="getTest(item)"> More </td>
        </tr>
        <tr>
          <td>Итог</td>
          <td>{{ total }}</td>
        </tr>
    </tbody>
</table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import _ from 'lodash'

export default {
  name: 'Table',
  data() {
    return {
      search: '',
      data: []
    }
  },
  computed: {
      ...mapGetters('Mock', [
          'mock'
      ]),
      filteredList: function() {
          var field = this.search;
          return this.mock.filter(function (elem) {
           
              if(field === '') return true;
              else return elem.id.indexOf(field) > -1;
          })
      },
      total: function() {
        let total = 0
          _.forEach(this.mock, (item) => {
            total += item.currency
          })
        return total
      }
  },
  methods: {
    ...mapActions('Mock', [
      'getMockInfo'
    ]),
    sort(value) {
      this.data = _.sortBy(this.mock, [value])
    },
    getTest(id) {
      this.$router.push({ name: 'more', params: { item: id } })
    }
  },
  created() {
    this.getMockInfo()

    this.data = JSON.parse( JSON.stringify(this.mock) )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table {
  margin: 20px auto
}
</style>
