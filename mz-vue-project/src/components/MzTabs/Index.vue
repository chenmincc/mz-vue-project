<template>
  <div class="nav">
    <ul class="nav-ul">
      <router-link tag='li' to='/films/nowPlaying' active-class="ac">
        <span>正在热映</span>
      </router-link>
      <router-link tag='li' to='/films/comingSoon' active-class="ac">
        <span>即将上映</span>
      </router-link>
    </ul>
  </div>
</template>

<style lang="less">
.nav {
  height: 49px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ededed;
  width: 100%;
  /* position: fixed;
      top: 44px; */
  background: #fff;
  .nav-ul {
    display: flex;
    align-items: center;
    width: 100%;
    li {
      width: 50%;
      color: #191a1b;
      text-align: center;
      font-size: 14px;
      cursor: pointer;
    }
    .ac {
      color: #ff5f16;
      span {
        display: block;
        height: 49px;
        width: 72px;
        margin: auto;
        line-height: 49px;
        /* background: red; */
        border-bottom: 2px solid #ff5f16;
      }
    }
  }
}
</style>
