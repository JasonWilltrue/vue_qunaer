<template>
  <div class="icons">
    <swiper>
      <swiper-slide
          v-for = "(page,index) in list"
        :key    = 'index'
      >
        <div
            class = "icon"
            v-for = "item in page"
          :key    = "item.id"
        >
          <div class="icon-img">
            <img
                class = "icon-img-content"
              :src    = "item.imgUrl"
            />
          </div>
          <p class="icon-title">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>


<script>
export default {
  name : "HomeIcons",
  props: {
    list: Array
  },
  computed: {
    //计算属性
    pages() {
      const pages = [];
      console.log(this.list);
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages; //pages返回二维数组[[1,2,3],[1]]
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
@import '~@/assets/styles/mixins.styl';

.icons >>> .swiper-container {
  height        : 0;
  padding-bottom: 50%;

  .icon {
    position      : relative;
    overflow      : hidden;
    width         : 25%;
    float         : left;
    padding-bottom: 25%;
    height        : 0;
    font-size     : 0.18rem;

    .icon-img {
      position  : absolute;
      top       : 0;
      left      : 0;
      right     : 0;
      bottom    : 0.44rem;
      text-align: center;
      box-sizing: border-box;

      .icon-img-content {
        width     : 1.5rem;
        height    : 1.5rem;
        margin-top: 0.2rem;
      }
    }

    .icon-title {
      position   : absolute;
      bottom     : 0;
      left       : 0;
      right      : 0;
      height     : 0.44rem;
      line-height: 0.44rem;
      text-align : center;
      color      : $titleColor;
      ellipsis();
    }
  }
}
</style> 