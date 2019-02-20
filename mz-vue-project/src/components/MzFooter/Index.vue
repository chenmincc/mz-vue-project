<template>
  <footer class="mz-footer">
    <router-link to="/films" active-class="active">
      <i class="iconfont icon-dianying"></i>
      <span>电影</span>
    </router-link>
    <router-link to="/cinemas" active-class="active">
      <i class="iconfont icon-yingyuana"></i>
      <span>影院</span>
    </router-link>
    <!-- <a href="#">
      <i class="iconfont icon-sales"></i>
      <span>9.9拼团</span>
    </a> -->
    <router-link to="/center" active-class="active">
      <i class="iconfont icon-mine"></i>
      <span>我的</span>
    </router-link>
  </footer>
</template>

<style lang="less">
  .mz-footer {
    width: 100%;
    height: 49px;
    /* background: red; */
    padding: 0;
    margin: 0;
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    router-link, a {
      line-height: 28px;
      color: #797d82;
      display: flex;
      text-decoration: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      i {
        font-size: 21px;
        }
      span {
        font-size: 10px;
        line-height: 12px;
        word-break: keep-all;
        }
      &.active {
        color: #ff5f16;
        }
    }
  }

</style>
