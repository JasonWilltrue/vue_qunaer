<template>
  <div>
    <div class="recommend-title">
      周末去哪儿🐫
    </div>
    <ul>
      <li
          v-for = "item in weekendList"
        :key    = "item.id"
      >
        <div class="item-img-wrapper">
          <img
              class = "item-img"
            :src    = "item.imgUrl"
              alt   = "景点"
          >
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      weekendList: [
        {
          id    : "001",
          imgUrl: 
            "http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg",
          title: "京城周末撒欢",
          desc : "在帝都过周末，不仅仅是城中游！"
        },
        {
          id    : "002",
          imgUrl: 
            "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
          title: "京城有好泉",
          desc : "细数北京温泉，温暖你的冬天"
        },
        {
          id    : "003",
          imgUrl: 
            "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
          title: "寻找北京的皇城范儿",
          desc : "数百年的宫廷庙宇，至今依旧威严霸气"
        }
      ]
    };
  }
};
</script>


<style lang="stylus" scoped>
.recommend-title {
  line-height: 0.8rem;
  background : #eee;
  text-indent: 0.2rem;
  font-size  : 0.12rem;
}

.item-img-wrapper {
  overflow      : hidden;
  height        : 0;
  padding-bottom: 31.9%;

  .item-img {
    transition    : opacity 400ms;
    width         : 100%;
    vertical-align: middle;
  }
}

.item-info {
  padding: 0.1rem 0.2rem 0.1rem 0.2rem;

  .item-title {
    line-height: 0.4rem;
    font-size  : 0.3rem;
  }

  .item-desc {
    line-height: 0.44rem;
    font-size  : 0.2rem;
    color      : #616161;
  }
}
</style>