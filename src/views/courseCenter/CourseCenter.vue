<template>
 <div class="position">
     <span class="iconfont position_back" @click="handleBack">&#xe63c;返回</span>
     <span class="position_title">课程中心</span> 
     <span 
     class="iconfont position_notice"
     @click="handleSearch()"
     >&#xe627;</span>
  <span class="iconfont position_more">&#xe64d;</span>
  </div>
  <div class="course">
    <div class="course__title">
          <div 
          class="course__title__time"
          :class="{active: index == 1}"
          @click="changNav(1)"
          > 按发布时间排序</div>
          <div 
          class="course__title__person"
          :class="{active: index == 2}"
          @click="changNav(2)"
          >按学习人数排序</div>
    </div>
      <div 
      class="course__content__time"
      v-if="index == 1"
      ><Nearby /></div>
      <div 
      class="course__content__person"
      v-if="index == 2"
      > <Nearby /></div>
    </div>
</template>

<script>
import Nearby from '../home/Nearby'
export default {
  name: 'courseCenter',
    components: { Nearby},
    data(){
      return{
        index:1
      }
    },
    methods:{
      handleBack: function(){
       this.$router.back(-1)
    },
    handleSearch:function(){
      this.$router.push('/search')
    },
    // 菜单导航
    changNav(index){
     if(index==1){
       this.index=1
     }else{
       this.index=2
     }
    }
    }
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
.course{
  position:absolute;
  top: .64rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f2f2f2;
  &__title{
    display: flex;
    text-align: center;
    justify-items: center;
    line-height: .45rem;
    background: #fff;
    &__time{
    width: 50%;
    font-size: 0.16rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
     color: #606060;
    // color: #17B5ED;
    }
    &__person{
   width: 50%;
   font-size: .16rem;
   font-family: Microsoft YaHei;
   font-weight: 400;
   color: #606060;
    }
  }
}
.course__title .active{
    color:#17B5ED;
    border-bottom: 1px solid #17B5ED;
}
</style>