<template>
  <div class="child">
    <h3>兄弟组件1</h3>
    <!-- <div>
      这是从父组件拿来的数据: {{title}}
    </div> -->
    <div>
      这是传过来的: {{msg}}
    </div>
  </div>
</template>

<script>
import Bus from '@/assets/bus'
export default {
  // props: ['title']
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    Bus.$on('test', (data) => {
      this.msg = data
    })
  }
}
</script>

<style>

</style>
