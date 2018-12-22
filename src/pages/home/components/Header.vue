<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe650;</div>
    </div>
    <div class="header-input"><span class="iconfont search-icon">&#xe6a3;</span>输入城市/景点/酒店</div>
    <div class="header-right">城市<span class="iconfont arrow-icon">&#xe600;</span></div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

// scoped  只对当前组件样式有效
// 手机端 只能用rem尺寸
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.header {
  display: flex;
  font-size: 0.18rem;
  font-weight: bold;
  line-height: 0.86rem;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    margin-top: 0.12rem;
    line-height: 0.64rem;
    color: #ccc;
    margin-left: 0.12rem;
    padding-left: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;

    .search-icon {
      font-size: 0.2rem;
      padding-right: 0.05rem;
    }
  }

  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;

    .arrow-icon {
      margin-left: 0.1rem;
      font-size: 0.2rem;
    }
  }
}
</style>