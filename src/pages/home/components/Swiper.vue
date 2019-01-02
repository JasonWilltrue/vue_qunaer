<template>
  <div clsss="wrapper">
    <swiper
      :options = "swiperOption"
        v-if   = "showSwiper"
    >
      <!-- slides -->
      <swiper-slide
          v-for = "item in list"
        :key    = "item.id"
      >
        <img
            class = "swiper-img"
          :src    = "item.imgUrl"
        /></swiper-slide>
      <!-- Optional controls -->
      <div
        class = "swiper-pagination"
        slot  = "pagination"
      ></div>
    </swiper>
  </div>

</template>


<script>
export default {
  name : "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop      : true
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }
    };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
  }
};
</script>


<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: red !important;

  .wrapper {
    overflow      : hidden;
    width         : 100%;
    height        : 0;
    padding-bottom: 31.25%;
    background    : #eee;
  }
}

.swiper-img {
  width: 100%;
}
</style>