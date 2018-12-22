<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">输入城市/景点/酒店</div>
    <div class="header-right">城市</div>
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
.header {
  display: flex;
  font-size: 0.18rem;
  font-weight: bold;
  line-height: 0.86rem;
  background: #00bcd4;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    margin-top: 0.12rem;
    line-height: 0.64rem;
    color: #ccc;
    margin-left: 0.12rem;
    background: #fff;
    border-radius: 0.1rem;
  }

  .header-right {
    width: 1.24rem;
    float: right;
  }
}
</style>