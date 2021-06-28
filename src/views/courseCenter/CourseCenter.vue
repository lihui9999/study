<template>
 <div class="position">
     <span class="iconfont position_back">&#xe63c;返回</span>
     <span class="position_title">课程中心</span> 
     <span class="iconfont position_notice">&#xe627;</span>
     <span class="iconfont position_more">&#xe64d;</span>
  </div>
  <div class="wrapper">
    <div class="course">
        <div class="course__titme">
            
        </div>
        <div class="course__person"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'courseCenter',
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.position {
  position: relative;
  height: .64rem;
  background-color: #2282be;
  margin: 0 auto;
  @include ellipsis;
  .position_notice {
    position: absolute;
    right: 0.53rem;
    top: .34rem;
    font-size: 0.21rem;
    color: #fff;
  }
  .position_more{
    position: absolute;
    right: 0.14rem;
    top: .34rem;
    font-size: 0.21rem;
    color: #fff;
  }
  .position_back{
    color: #ffffff;
    font-size: 0.17rem;
    position: absolute;
    left: 7%;
    margin-left: -0.17rem;
    top: 0.34rem;
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
</style>