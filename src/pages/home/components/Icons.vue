<template>
  <div class="icons">
    <div class="icon">
      <div class="icon-img">
        <img
          class = "icon-img-content"
          src   = "https://gw.alicdn.com/tfs/TB1pN01wsUrBKNjSZPxXXX00pXa-210-126.png_110x10000.jpg_.webp"
        />
      </div>
      <p class="icon-title">热门景点</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class = "icon-img-content"
          src   = "https://gw.alicdn.com/tfs/TB1pN01wsUrBKNjSZPxXXX00pXa-210-126.png_110x10000.jpg_.webp"
        />
      </div>
      <p class="icon-title">热门景点</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class = "icon-img-content"
          src   = "https://gw.alicdn.com/tfs/TB1pN01wsUrBKNjSZPxXXX00pXa-210-126.png_110x10000.jpg_.webp"
        />
      </div>
      <p class="icon-title">热门景点</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class = "icon-img-content"
          src   = "https://gw.alicdn.com/tfs/TB1pN01wsUrBKNjSZPxXXX00pXa-210-126.png_110x10000.jpg_.webp"
        />
      </div>
      <p class="icon-title">热门景点</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class = "icon-img-content"
          src   = "https://gw.alicdn.com/tfs/TB1pN01wsUrBKNjSZPxXXX00pXa-210-126.png_110x10000.jpg_.webp"
        />
      </div>
      <p class="icon-title">热门景点</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class = "icon-img-content"
          src   = "https://gw.alicdn.com/tfs/TB1pN01wsUrBKNjSZPxXXX00pXa-210-126.png_110x10000.jpg_.webp"
        />
      </div>
      <p class="icon-title">热门景点</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "HomeIcons"
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.icons {
  overflow      : hidden;
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
      position   : absolute;
      bottom     : 0;
      left       : 0;
      right      : 0;
      height     : 0.44rem;
      line-height: 0.44rem;
      text-align : center;
      color      : $titleColor;
    }
  }
}
</style>
