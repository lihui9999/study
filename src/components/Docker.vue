<template>
  <div class="docker">
    <div
      v-for="(item, index) in dockerList"
      :class="{'docker__item': true, 'docker__item--active': index === currentIndex}"
      :key="item.icon"
    >
      <router-link :to='item.to'>
        <div class="iconfont" v-html="item.icon" />
        <div class="docker__title">{{item.text}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  props: ['currentIndex'],
  setup() {
    const dockerList = [
      {icon: '&#xe6cb;', text: '首页', to: {name: 'Home'}},
      {icon: '&#xe765;', text: '消息', to: {name: 'Message'}},
      {icon: '&#xe670;', text: '更多', to: {name: 'More'}},
      {icon: '&#xe763;', text: '我的', to: {name: 'PersonalInfo'}},
    ];
    return { dockerList }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  // height: .49rem;
  border-top: .01rem solid $content-bgColor;
  &__item {
    flex: 1;
    text-align: center;
    a {
      color: $content-fontcolor;
      text-decoration: none;
    }
    .iconfont {
      margin: .07rem 0 .02rem 0;
      font-size: .18rem;
    }
    &--active {
      a {
        color: #2282be;
      }
    }
  }
  &__title {
    font-size: .2rem;
    transform: scale(.5, .5);
    transform-origin: center top;
  }
}
</style>
