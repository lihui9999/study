<template>
  <div class="wrapper">
    <div class="position">
      <span class="position_title">消息</span>
      <span class=" iconfont position_notice">&#xe615;</span>
  </div> 
    <div class="message">
      <div class="message_item">
        <img src="../../assets/images/message.png" alt="">
        <div class="message_item_right">
          <div class="message_item-right_top">
            <div class="message_item-right_top-title">通知</div>
            <div class="message_item-right_top-time">下午2:00</div>
          </div>
          <p>您有个考试将要到期，请按时考试</p>
        </div>
      </div>
     <div class="message_item">
        <img src="../../assets/images/message.png" alt="">
        <div class="message_item_right">
          <div class="message_item-right_top">
            <div class="message_item-right_top-title">通知</div>
            <div class="message_item-right_top-time">下午2:00</div>
          </div>
          <p>您有个考试将要到期，请按时考试</p>
        </div>
      </div>
    </div>
  </div>
  <Docker :currentIndex="1"/>
</template>

<script>
import Docker from '../../components/Docker'
export default {
  name: 'Message',
  components: { Docker }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.wrapper {
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
.message {
    overflow-y: scroll;
    background: #FFF;
    padding-left: 0.155rem;
    padding-top: 0.22rem;
    box-sizing: border-box;
  &_item{
    display: flex;
    // padding-left: .155rem;
    // padding-top: .22rem;
    &_right{
      flex: 1;
      border-bottom: 1px solid #ccc;
      &_top{
         display: flex;
      }
      p{
     font-size: .15rem;
     font-family: Microsoft YaHei;
     color: #989898;
      }
    }
    img{
    width: .495rem;
    height: .48rem;
    margin-right: .08rem;
     margin-top: .12rem;
    }
  }
}
.message_item-right_top{
  display: flex;
  padding-top: .1rem;
}
.message_item-right_top div{
  flex: 1;
}
.message_item-right_top .message_item-right_top-time{
  text-align: center;
font-size: .12rem;
font-family: Microsoft YaHei;
color: #7A81AB;
}
.message_item-right_top .message_item-right_top-title{
font-size: .18rem;
font-family: Microsoft YaHei;
color: #606060;
}
</style>