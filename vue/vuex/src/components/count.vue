<template>
  <div class="count">
    {{count}} <!--$store = Vuex.Store -->
    <!-- <button @click="$store.commit('add', 20)">+</button> -->
    <!-- <button @click="$store.commit('minus')">-</button> -->
    <!-- <button @click="add(5)">+</button> -->
    <!-- <button @click="minus">-</button> -->
    <button @click="addAction(10)">+</button>
    <button @click="minusAction">-</button>
    <!-- {{$store.state.count}} -->
    {{getCount}}
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      // myCount: null
    }
  },
  // mounted () {
  //   this.myCount === this.$store.state.count
  // },

  // computed: {
  //   myCount () {
  //     return this.$store.state.count
  //   }
  // },

  // computed: mapState({
  //   myCount: state => state.count
  //   // myCount (state) {
  //   //   return state.count
  //   // }
  // }),

  // computed: mapState9['count'],

  computed: {
    ...mapState([
      'count'
    ]),
    ...mapGetters([
      'getCount'
    ])
  },

  methods: {
    // test () {
    //   this.myCount++
    // }
    ...mapMutations([
      'add',
      'minus'
    ]),
    ...mapActions([
      'addAction',
      'minusAction'
    ])
  }
}
</script>

<style>

</style>
