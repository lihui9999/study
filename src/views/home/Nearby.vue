<template>
  <div class="nearby">
    <span class="nearby__title">中国中铁河南分公司集团铁路架桥机安全操作规程</span>
     <span class="nearby__new">NEW</span>
     <div class="nearby__number">
       <div class="nearby__number__item">
          <img class="nearby__number__item-img" src="../../assets/images/study.png" alt=""/>
         <span class="nearby__number__item-study">学习人数:</span>
         <span class="nearby__number__item-total study-total">9999人</span>
       </div>
       <div class="nearby__number__item">
         <img class="nearby__number__item-img collection-img"  src="../../assets/images/collection.png" alt=""/>
         <span class="nearby__number__item-collection">收藏人数:</span>
         <span class="nearby__number__item-total collection-total" >9999人</span>
       </div>      
     </div>
   <div class="nearby__comments">
      <div class="nearby__comments__tags">
      <div class="nearby__comments__tag"> <span>评论: </span><span>20条</span></div> 
        <div class="nearby__comments__tag"> <span>评分: </span><span class="iconfont star">&#xe6ce;</span><span class="iconfont star">&#xe6ce;</span><span class="iconfont star">&#xe6ce;</span><span class="iconfont star">&#xe6ce;</span><span class="iconfont star">&#xe6ce;</span></div> 
          <div class="nearby__comments__tag"> <span>发布时间: </span><span>2021年6月21号</span></div> 
      </div>
      <div class="nearby__comments__img"><img  src="../../assets/images/slice.png" ></div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'Nearby',
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.nearby {
  position: relative;
  margin-top: .12rem;
  padding-left: .16rem;
  padding-right: .16rem;
  background-color: #fcfcfc;
  padding-top: .12rem;
  padding-bottom: .12rem;
  &__title {
    font-size: .16rem;
    font-family: MicrosoftYaHeiLight;
    color: #606060;
    margin-right: 0.14rem;
    display: block;
  }
  &__new{
    position: absolute;
    display: block;
    width: 0.25rem;
    height: 0.15rem;
    background: #fe970f;
    color: #ffff;
    text-align: center;
    line-height: .15rem;
    border-radius: .04rem;
    top: .12rem;
    right: .12rem;
    font-size: .09rem;
  }
  &__number{
     margin: .06rem 0 0.08rem 0;
     display: flex;
      height: .34rem;
      line-height: .34rem;
      border-top: 1px solid #cccc;
      border-bottom: 1px solid #cccc;
      text-align: center;
     &__item{
       flex: 1;
      border-right: 1px solid #ccc;
     }
     &__item-img,&__item-study,&__item-collection,&__item-total{
    display: inline-block;
    box-sizing: border-box;
    vertical-align: middle;
     }
     &__item-study, &__item-collection{
       color: #7a81ab;
       font-size: .12rem;
       padding-right: .02rem;
     }
     &__item-img{
         width: 0.175rem;
         height: 0.16rem;
       padding-right: .02rem;
     }
     &__item:last-child{
       border-right: 0;
     }
  }
  &__comments{
    display: flex;
    &__tags{
      flex: 1;
    line-height: 0.28rem;
    padding-top: .12rem;
    }
  }
}
.collection-img{
  width: .18rem;
  height: .18rem;
}
.nearby__comments__tag span{
     padding: .06rem .02rem .06rem 0;
    font-size: .12rem;
   font-family: Microsoft YaHei;
   color: #7A81AB;
    @include ellipsis;
}
.nearby__comments__img img{
  width: 1.91rem;
}
.study-total{
    padding-left: .02rem;
    color: #2282be;
}
.collection-total{
    padding-left: .02rem;
    color: #fe970f;
}
.nearby__comments__tag .star{
  font-size: .2rem;
  color: #ccc;
}
</style>