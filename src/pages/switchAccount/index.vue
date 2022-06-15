<!--
 * @Author: chenxiugen@zuoyebang.com
 * @Date: 2022-06-14 19:52:18
 * @LastEditTime: 2022-06-14 21:26:28
 * @LastEditors: 陈秀根
 * @Description: 
 * 
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="~@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
