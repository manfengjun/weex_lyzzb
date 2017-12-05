<template>
  <slider id="slider" interval="3000" auto-play="true">
    <div id="frame" v-for="img in imageList">
      <image class="image" resize="cover" :src="img.src" @load="onload"></image>
    </div>
  </slider>
</template>
<style scoped>
  .image {
    width: 750px;
    height: 400px;
  }
  #slider {
    
    top: 0px;
    left: 0px;
    right: 0px;
    height: 400px;
  }
  #frame {
    
    width: 750px;
    height: 400px;
    position: relative;
  }
</style>
<script>
  var modal = weex.requireModule('modal')
  export default {
    data () {
      return {
        imageList: [
          { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
        ]
      }
    },
    methods:{
        onload:function(e){
         
          
           modal.toast({
              message: this._parent
           })
        }
    }
    
  }
</script>