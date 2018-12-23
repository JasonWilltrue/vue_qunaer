<template>
  <div clsss="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide
          v-for = "item in swiperList"
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
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop      : true

        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      },
      swiperList: [
        {
          id    : "001",
          imgUrl: 
            "https://img1.qunarzz.com/vc/a4/29/dd/4a0734b77f675da2a8ca4a9879.jpg"
        },
        {
          id    : "002",
          imgUrl: 
            "https://img1.qunarzz.com/vc/30/e6/6c/7236d07f50947d523bcdeadae8.jpg"
        },
        {
          id    : "003",
          imgUrl: 
            "https://img1.qunarzz.com/vc/f5/10/9c/b647d3ee724a720ce0fa6101f0.jpg"
        },
        {
          id    : "004",
          imgUrl: 
            "https://img1.qunarzz.com/vc/d4/d0/62/a6b7c23c1b251dfc874ce66efa.jpg"
        }
      ]
    };
  },
  computed: {},
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
  }
};
</script>


<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet.swiper-pagination-bullet-active {
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
