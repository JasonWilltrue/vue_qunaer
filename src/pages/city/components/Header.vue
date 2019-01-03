<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe650;</div>
    </router-link>
  </div>

</template>



<script>
export default {
  name: "CityHeader"
};
</script>



<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.header {
  font-size  : 0.4rem;
  height     : 0.86rem;
  line-height: 0.86rem;
  overflow   : hidden;
  text-align : center;
  color      : #fff;
  background : $bgColor;
  position   : relative;

  .header-back {
    position  : absolute;
    left      : 0;
    top       : 0;
    width     : 0.64rem;
    text-align: center;
    font-size : 0.4rem;
    color     : #fff;
  }
}
</style>