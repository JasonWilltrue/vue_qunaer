<template>
  <div class="icons">
    <swiper>
      <swiper-slide
          v-for = "(page,index) in pages"
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
  name: "HomeIcons",
  data() {
    return {
      iconsList: [
        {
          id    : "001",
          imgUrl: 
            "https://gw.alicdn.com/tfs/TB1pN01wsUrBKNjSZPxXXX00pXa-210-126.png_110x10000.jpg_.webp",
          desc: "景点门票"
        },
        {
          id    : "002",
          imgUrl: 
            "https://gw.alicdn.com/tfs/TB1pN01wsUrBKNjSZPxXXX00pXa-210-126.png_110x10000.jpg_.webp",
          desc: "汽车票"
        },
        {
          id    : "003",
          imgUrl: 
            "https://gw.alicdn.com/tfs/TB1pN01wsUrBKNjSZPxXXX00pXa-210-126.png_110x10000.jpg_.webp",
          desc: "飞机票"
        },
        {
          id    : "004",
          imgUrl: 
            "https://gw.alicdn.com/tfs/TB1pN01wsUrBKNjSZPxXXX00pXa-210-126.png_110x10000.jpg_.webp",
          desc: "动植物园"
        },
        {
          id    : "005",
          imgUrl: 
            "https://gw.alicdn.com/tfs/TB1pN01wsUrBKNjSZPxXXX00pXa-210-126.png_110x10000.jpg_.webp",
          desc: "一日游"
        },
        {
          id    : "006",
          imgUrl: 
            "https://gw.alicdn.com/tfs/TB1pN01wsUrBKNjSZPxXXX00pXa-210-126.png_110x10000.jpg_.webp",
          desc: "自然风光"
        },
        {
          id    : "007",
          imgUrl: 
            "https://gw.alicdn.com/tfs/TB1pN01wsUrBKNjSZPxXXX00pXa-210-126.png_110x10000.jpg_.webp",
          desc: "公园"
        },
        {
          id    : "008",
          imgUrl: 
            "https://gw.alicdn.com/tfs/TB1pN01wsUrBKNjSZPxXXX00pXa-210-126.png_110x10000.jpg_.webp",
          desc: "网红地实例速度其二吧v"
        },
        {
          id    : "009",
          imgUrl: 
            "https://gw.alicdn.com/tfs/TB1pN01wsUrBKNjSZPxXXX00pXa-210-126.png_110x10000.jpg_.webp",
          desc: "全部"
        }
      ]
    };
  },
  computed: {
    //计算属性
    pages() {
      const pages = [];
      this.iconsList.forEach((item, index) => {
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
        margin-top: 0.2rem;
      }
    }

    .icon-title {
      position    : absolute;
      bottom      : 0;
      left        : 0;
      right       : 0;
      height      : 0.44rem;
      line-height : 0.44rem;
      text-align  : center;
      color       : $titleColor;
      padding-left: 0.3rem;
      ellipsis();
    }
  }
}
</style>
