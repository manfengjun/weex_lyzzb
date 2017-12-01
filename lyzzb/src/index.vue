<template>
  <div class="wrapper">
    <text class="button" @click="jump">Jump</text>
  </div>
</template>
<script>
  var navigator = weex.requireModule('navigator')
  var modal = weex.requireModule('modal')
  export default {
    methods: {
      jump (event) {
        console.log('will jump')
var bundleUrl = this.$getConfig().bundleUrl;
bundleUrl = new String(bundleUrl);
var nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
console.log(nativeBase + 'ceshi.js')

        navigator.push({
          url: nativeBase + 'ceshi.js',
          animated: "true"
        }, event => {
          modal.toast({ message: 'callback: ' + event })
        })
      }
    }
  };
</script>
<style scoped>
  .wrapper {
    flex-direction: column;
    justify-content: center;
  }
  .button {
    font-size: 60px;
    width: 450px;
    text-align: center;
    margin-top: 30px;
    margin-left: 150px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-width: 2px;
    border-style: solid;
    color: #666666;
    border-color: #DDDDDD;
    background-color: #F5F5F5
  }
</style>
