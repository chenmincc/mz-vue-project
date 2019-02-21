<template>
  <div class="cinema">
    <div class="top">
      <router-link tag="span" to="/city">
        {{ curCityName }}
        <i class="iconfont icon-xiangxia" style="font-size:10px"></i>
      </router-link>
      <p>影院</p>
      <img src="@/assets/images/fdj.png" alt="">
    </div>
    <div class="nav1">
      <div>
        <span>全程&nbsp;</span>
        <i class="iconfont icon-xiangxia" style="font-size:10px"></i>
      </div>
      <div>
        <span>最近去过&nbsp;</span>
        <i class="iconfont icon-xiangxia" style="font-size:10px"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    curCityName () {
      return this.$store.state.curCityName
    }
  }
}
</script>

<style lang="less">
.cinema {
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  background: #fff;
  .top {
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    height: 44px;
    align-items: center;
    width: 90%;
    margin: auto;
    span {
      font-size: 13px;
    }
    p {
      font-size: 17px;
    }
    img {
      width: 18px;
      height: 18px;
    }
  }
  .nav1 {
    height: 49px;
    display: flex;
    box-sizing: border-box;
    border-top: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
    justify-content: space-around;
    align-items: center;
    font-size: 15px;
    color: #191a1b;
  }
}
</style>
