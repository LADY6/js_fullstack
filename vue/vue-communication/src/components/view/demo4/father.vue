<template>
  <div class="container">
    <h2>父组件</h2>
    <child1 :title="onTitle"></child1>
    <child2 @test="getTitle"></child2>
  </div>
</template>

<script>
import child1 from './child1'
import child2 from './child2'
export default {
  data () {
    return {
      onTitle: ''
    }
  },
  components: {
    child1,
    child2
  },
  methods: {
    getTitle (e) {
      this.onTitle = e
    }
  }
}
</script>

<style>

</style>
