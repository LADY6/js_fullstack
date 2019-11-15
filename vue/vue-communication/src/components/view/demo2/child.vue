<template>
  <div class='child'>
    <h2>子组件</h2>
    <p>从父组件接收到的数据是:</p>
    <div>
      String: <span class='red'>{{sendMsg}}</span>
    </div>
    <div>
      Number: <span class='red'>{{sendNum}}</span>
    </div>
    <ul class='red'>
        <li v-for='item in sendObj' :key='item.id'>{{item.name}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  props: {
    sendMsg: {
      type: String,
      require: true
    },
    sendNum: {
      type: Number,
      require: false
    },
    sendObj: {
      // 声明验证类型
      validator (val) {
        if (
          Object.prototype.toString.call(val) === '[object Array]' ||
          Object.prototype.toString.call(val) === '[object Object]'
        ) {
        }
      }
    }
  }
}
</script>

<style>
.red {
  color: red;
}
</style>
