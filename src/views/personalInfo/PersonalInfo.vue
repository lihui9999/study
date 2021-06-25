<template>
  <div class="wrapper">
    <div class="header">
      <img
        class="header__avatar"
        src="http://www.dell-lee.com/imgs/avatar.jpg"
      />
      <div class="header__info">
        <div class="header__info__user"><span>姓名:</span><span>张三</span></div>
        <div class="header__info__id"><span>部门:</span><span>工程部</span></div>
      </div>
      <div class="iconfont header__icon">&#xe61f;</div>
    </div>
  <div class="list">
      <div class="list__item">
        <div class="list__item__icon iconfont">&#xe61c;</div>
        <div class="list__item__test">学习档案</div>
        <div class="list__item__arrow iconfont">&#xe61f;</div>
      </div>
       <div class="list__item">
        <div class="list__item__icon iconfont pinkIcon">&#xe786;</div>
        <div class="list__item__test">离线学习</div>
        <div class="list__item__arrow iconfont">&#xe61f;</div>
      </div>
         <div class="list__item">
        <div class="list__item__icon iconfont blueIcon">&#xe683;</div>
        <div class="list__item__test">我的笔记</div>
        <div class="list__item__arrow iconfont">&#xe61f;</div>
      </div>
         <div class="list__item">
        <div class="list__item__icon iconfont redIcon">&#xe63b;</div>
        <div class="list__item__test">我的学习</div>
        <div class="list__item__arrow iconfont">&#xe61f;</div>
      </div>
    </div> 
   <div class="list">
      <div class="list__item">
        <div class="list__item__icon iconfont orangeIcon">&#xe634;</div>
        <div class="list__item__test">我的收藏</div>
        <div class="list__item__arrow iconfont">&#xe61f;</div>
      </div>
       <div class="list__item">
        <div class="list__item__icon iconfont greenIcon">&#xe628;</div>
        <div class="list__item__test">我的评价</div>
        <div class="list__item__arrow iconfont">&#xe61f;</div>
      </div>
         <div class="list__item">
        <div class="list__item__icon iconfont blueIcon">&#xe608;</div>
        <div class="list__item__test">修改密码</div>
        <div class="list__item__arrow iconfont">&#xe61f;</div>
      </div>
        <div class="list__item">
        <div class="list__item__icon iconfont purpleIcon">&#xe64c;</div>
        <div class="list__item__test">系统设置</div>
        <div class="list__item__arrow iconfont">&#xe61f;</div>
      </div>
    </div> 
  </div>
  <Docker :currentIndex="3"/>
</template>
<script>
import Docker from '../../components/Docker'
export default {
  name: 'PersonalInfo',
  components: { Docker },
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  background: $dark-bgColor;
}
.header {
  position: relative;
  height: 1.5rem;
  background-image: url(../../assets/images/person.png);
  padding-top: .4rem;
  &__info {
    margin: 1.1rem 0.18rem 0 0.18rem;
    height: 0.76rem;
    background: #FFF;
    border-radius: 0.08rem;
    &__user {
      font-size: .14rem;
      color: #262628;
     margin-left: 0.61rem;
      line-height: .43rem;
      color: #7A81AB;
    }
    &__id {
      font-size: .14rem;
     color: #7A81AB;
    margin-left: 0.61rem;
    }
  }
  &__icon{
    position: absolute;
    right: 10%;
    top: 94%;
    color: #7A81ABFF;
  }
  &__avatar {
    position: absolute;
    left: 15%;
    top: 1.65rem;
    transform: translateX(-50%);
    width: .44rem;
    height: .44rem;
    border-radius: 50%;
  }
}
.header__info__user span ,.header__info__id span{
  padding-left: .06rem;
}
.list {
    margin: 0.5rem 0.18rem 0.18rem 0.18rem;
  background: $bgColor;
  border-radius: .08rem;
  &__item {
    display: flex;
    padding: .2rem;
    line-height: .22rem;
    font-size: .14rem;
    color: #7A81AB;
    border-bottom: .01rem solid #F1EDEDFF;
    &__icon {
      margin-right: .12rem;
      text-align: center;
      color: #2fbd0b;
      font-size: .22rem;
    }
    &__test {
      flex: 1;
    }
    &__arrow {
      color: #7A81ABFF;
    }
  }
}
.wrapper .list:last-child{
    margin: 0 .18rem 0.2rem .18rem;
}
.wrapper .list .list__item:last-child{
      border-bottom: 0;
}
.pinkIcon{
 color:  #F63D87;
font-size: .22rem;
}
.blueIcon{
  color: #112DD1FF;
  font-size: .21rem;
}
.redIcon{
  color: #F924DDFF;
  font-size: .22rem;
}
.orangeIcon{
  color: #FE970FFF;
   font-size: .22rem;
}
.greenIcon{
  color: #17EA07FF;
  font-size: .22rem;
}
.purpleIcon{
  color: #7405DBFF;
 font-size: .22rem;
}
</style>