<template>
  <div>
    <div class="recommend-title">
      周末去哪儿🐫
    </div>
    <ul>
      <li
          v-for = "item in list"
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
  name : "HomeWeekend",
  props: {
    list: Array
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