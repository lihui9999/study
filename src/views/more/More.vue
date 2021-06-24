<template>
  <div class="wrapper">
    <div class="position">
      <span class="position__title">更多</span>
  </div> 
  <div class="container">
    <div class="more">
     <div class="more__item">
       <div class="iconfont more__item__icon orangeIcon">&#xe62c;</div>
       <div class="more__item__text">培训签到</div>
     </div>
     <div class="more__item">
        <div class="iconfont more__item__icon blueIcon">&#xe621;</div>
       <div class="more__item__text">扫码阅读</div>
     </div>
     <div class="more__item">
        <div class="iconfont more__item__icon greenIcon">&#xe64b;</div>
       <div class="more__item__text">统计分析</div>
     </div>
     <div class="more__item">
        <div class="iconfont more__item__icon redIcon">&#xe691;</div>
       <div class="more__item__text">人员管理</div>
     </div>
     <div class="more__item">
        <div class="iconfont more__item__icon redIcon">&#xe629;</div>
       <div class="more__item__text">隐患排查</div>
     </div>
          <div class="more__item">
        <div class="iconfont more__item__icon blueIcon">&#xe614;</div>
       <div class="more__item__text">问卷调查</div>
     </div>
          <div class="more__item">
        <div class="iconfont more__item__icon orangeIcon">&#xe600;</div>
       <div class="more__item__text">培训活动</div>
     </div>
       <div class="more__item">
        <div class="iconfont more__item__icon redIcon">&#xe60b;</div>
       <div class="more__item__text">积分商城</div>
     </div>
    </div>
     <div class="more">
      <div class="more__item">
       <div class="iconfont more__item__icon blueIcon">&#xe665;</div>
       <div class="more__item__text">流程审批</div>
     </div>
    </div>
    </div>
  </div>
  <Docker :currentIndex="2"/>
</template>

<script>
import Docker from '../../components/Docker'
export default {
  name: 'More',
  components: { Docker },
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  background: #ffffff;
  }
.position {
  position: relative;
  height: .64rem;
  background-color: #2282be;
  margin: 0 auto;
  @include ellipsis;
  .position__title{
    color: #ffffff;
    font-size: .17rem;
    position: absolute;
    left: 50%;
    margin-left: -.17rem;
    top: .34rem;
  }
}
.more{
    display: flex;
    flex-wrap: wrap;
    height: 1.53rem;
    padding-left: 0.12rem;
    padding-right: 0.12rem;
    box-sizing: border-box;
    // justify-content: center;
    text-align: center;
    border-bottom: .01rem solid #ccc;
  &__item{
    width: 25%;
    box-sizing: border-box;
    padding-top: .12rem;
    padding-bottom: .12rem;
    &__text{
    font-size: .2rem;
    transform: scale(.5, .5);
    transform-origin: center top;
    font-family: Microsoft YaHei;
    color: #606060;
    }
    &__icon{
      margin: .07rem 0 .02rem 0;
      font-size: .18rem;
    }
  }
}
.greenIcon{
 color: #15d825;
}
.orangeIcon{
 color: #F38900;
}
.redIcon{
 color: #FF0000;
}
.blueIcon{
  color: #31A8F3;
}
</style>