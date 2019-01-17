<template>
  <div>
    <div class="recommend-title">
      热门推荐
    </div>
    <ul>
      <li
          class = "item border-bottom"
          v-for = "item in list"
        :key    = "item.id"
      >
        <div class="item-img-wrapper">
          <img
              class = "item-img"
            :src    = "item.imgUrl"
              alt   = "酒店"
          >
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <div class="item-footer">
            <span class="item-price">￥1999 起</span>
            <span class="item-button">查看详情</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name : "HomeRecommend",
  props: {
    list: Array
  }
};
</script>


<style lang="stylus" scoped>
.recommend-title {
  margin-top : 0.2rem;
  line-height: 0.8rem;
  background : #eee;
  text-indent: 0.2rem;
  font-size  : 0.12rem;
}

.item {
  display : flex;
  height  : 1.9rem;
  overflow: hidden;

  .item-img {
    width  : 1.7rem;
    height : 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex   : 1;
    padding: 0.1rem;

    .item-title {
      line-height: 0.4rem;
      font-size  : 0.3rem;
    }

    .item-desc {
      padding-top: 0.1rem;
      font-size  : 0.2rem;
      color      : #ccc;
    }

    .item-footer {
      font-size: 0.2rem;

      .item-price {
        line-height: 0.6rem;
        color      : #ff8300;
        font-size  : 0.3rem;
      }

      .item-button {
        float        : right;
        padding-right: 0.2rem;
        cursor       : pointer;
        background   : #ff8300;
        padding      : 0.15rem;
        border-radius: 0.06rem;
        color        : #fff;
      }
    }
  }
}
</style>
