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
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
        {
          id    : "002",
          imgUrl: 
            "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          desc: "汽车票"
        },
        {
          id    : "003",
          imgUrl: 
            "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          desc: "飞机票"
        },
        {
          id    : "004",
          imgUrl: 
            "http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
          desc: "动植物园"
        },
        {
          id    : "005",
          imgUrl: 
            "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
          desc: "一日游"
        },
        {
          id    : "006",
          imgUrl: 
            "http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png",
          desc: "自然风光"
        },
        {
          id    : "007",
          imgUrl: 
            "http://img1.qunarzz.com/piao/fusion/1811/f6/e54fad3ea337b02.gif",
          desc: "公园"
        },
        {
          id    : "008",
          imgUrl: 
            "http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png",
          desc: "网红地实例速度其二吧v"
        },
        {
          id    : "009",
          imgUrl: 
            "http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png",
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