<!--
 * @Author: chenxiugen@zuoyebang.com
 * @Date: 2022-06-14 19:52:18
 * @LastEditTime: 2022-06-15 10:28:19
 * @LastEditors: 陈秀根
 * @Description: 
 * 
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="../../assets/logo.png" @click="test" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";

@Component<App>({
  components: {
    HelloWorld,
  },
  created() {
    console.info("created....", this.a);
    this.test();
  },
})
export default class App extends Vue {
  private test() {
    console.info("test111");
  }
  private a = 1;
}
</script>

<style lang="less">
#app {
  font-size: 16px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
