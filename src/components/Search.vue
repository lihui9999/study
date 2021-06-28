<template>
    <div class="wrapper">
   <div class="position">
    <span class="position_title">首页</span> 
    <span class="iconfont position_notice">&#xe615;</span>
  </div> 
    <div class="search">
    <span class="iconfont">&#xe627;</span>
    <span class="search__text">搜索课程</span>
  </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  background: #f2f2f2;
}
.position {
  position: relative;
  height: .64rem;
  background-color: #2282be;
  margin: 0 auto;
  .position_notice {
    position: absolute;
    right: .13rem;
    top: .34rem;
    font-size: 0.21rem;
    color: #fff;
  }
  .position_title{
    color: #ffffff;
    font-size: .17rem;
    position: absolute;
    left: 50%;
    margin-left: -.17rem;
    top: .34rem;
  }
}
.search {
  width: 3.555rem;
 line-height: 0.175rem;
  opacity: 0.76;
  position: absolute;
  top: 0.68rem;
  background:#ffffff;
  color: $search-fontColor;
  border-radius: .015rem;
  left: 50%;
  margin-left: -1.777rem;
  z-index: 1;
  .iconfont {
    display: inline-block;
    padding-left:  .16rem;
    font-size: .18rem;
    color: #2282be;
    padding-top: .036rem;
  }
  &__text {
    display: inline-block;
    font-size: .12rem;
    position: absolute;
    left: 50%;
    margin-left: -0.25rem;
    padding-top: .018rem;
  }
}
</style>
