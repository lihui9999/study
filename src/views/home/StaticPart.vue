<template>
 <div class="position">
    <span class="position_title">首页</span> 
    <span class="iconfont position_notice">&#xe615;</span>
  </div> 
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img
      class="banner__img"
      src="../../assets/images/banner.png"
    /></div>
      <div class="swiper-slide"><img
      class="banner__img"
      src="../../assets/images/banner.png"
    /></div>
      <div class="swiper-slide"><img
      class="banner__img"
      src="../../assets/images/banner.png"
    /></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
  <div class="search input" 
  contenteditable="true"
  @click="handelInput"
  >
    <span class="iconfont">&#xe627;</span>
  <span class="search__text">搜索课程</span>
  </div>
  <div class="icons__top">
   <div
      class="icons__top__item"
      @click="handleCourseCenter()"
    >
        <img
        class="icons__top__item__img"
        src="../../assets/images/课程中心.png"
      />
      <p class="icons__top__item__desc">课程中心</p>
    </div>
       <div
      class="icons__top__item"
    >
        <img
        class="icons__top__item__img"
        src="../../assets/images/我的学习.png"
      />
      <p class="icons__top__item__desc">我的学习</p>
    </div>
       <div
      class="icons__top__item"
    >
        <img
        class="icons__top__item__img"
        src="../../assets/images/模拟考试.png"
      />
      <p class="icons__top__item__desc">模拟考试</p>
    </div>
     <div
      class="icons__top__item"
    >
        <img
        class="icons__top__item__img"
        src="../../assets/images/在线练习.png"
      />
      <p class="icons__top__item__desc">在线练习</p>
    </div>
  </div>
  <div class="icons__bottom">
    <div
      class="icons__bottom__item"
    >
   <img
        class="icons__bottom__item__img"
        src="../../assets/images/学习计划.png"
      />
      <p class="icons__bottom__item__desc">学习计划</p>
    </div>
        <div
      class="icons__bottom__item"
    >
   <img
        class="icons__bottom__item__img"
        src="../../assets/images/我的考试.png"
      />
      <p class="icons__bottom__item__desc">我的考试</p>
    </div>
        <div
      class="icons__bottom__item"
    >
   <img
        class="icons__bottom__item__img"
        src="../../assets/images/政策法规.png"
      />
      <p class="icons__bottom__item__desc">政策法规</p>
    </div>
  <div
      class="icons__bottom__item"
    >
   <img
        class="icons__bottom__item__img"
        src="../../assets/images/安全文库.png"
      />
      <p class="icons__bottom__item__desc">安全文库</p>
    </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'StaticPart',
  methods:{
    handleCourseCenter: function(){
       this.$router.push('/courseCenter')
    }

  },
    mounted() {
      new Swiper ('.swiper-container', {
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        //如果需要自动切换海报
       autoplay:2000//时间 毫秒
      })
    },
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.swiper-container{
  height: 2rem;
  width: 100%;
  .swiper-wrapper{
    .swiper-slide{
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 2rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
.position {
  position: relative;
  height: .64rem;
  background-color: #2282be;
  margin: 0 auto;
  @include ellipsis;
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
  border:1px solid #ddd;
  outline: none;
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
.icons__top {
  display: flex;
  flex-wrap: wrap;
  margin-top: .1rem;
  background: #fcfcfc;
  border-radius:.075rem;
  margin-left: .11rem;
  margin-right: .11rem;
  &__item {
    width: 25%;
    &__img {
      display:block;
      width: .5rem;
      height: .5rem;
      margin: 0 auto;
      padding-top: .1rem;
    }
    &__desc {
      margin: .04rem 0 .085rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.icons__bottom {
  display: flex;
  flex-wrap: wrap;
  margin-top: .12rem;
  margin-left: .12rem;
  margin-right: .12rem;
  &__item {
   width: 22%;
   background: #fcfcfc;
   margin-right: .14rem;
   border-radius: .075rem;
    &__img {
      display:block;
      width: .5rem;
      height: .5rem;
      margin: 0 auto;
      padding-top: .1rem;
    }
    &__desc {
      margin: .04rem 0 .085rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.icons__bottom__item:last-child{
margin-right: 0;
}
</style>