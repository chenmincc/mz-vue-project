<template>
  <div class="cinema">
    <div class="top">
      <span>
        深圳
        <i class="iconfont icon-xiangxia" style="font-size:10px"></i>
      </span>
      <p>影院</p>
      <img src="../../assets/images/fdj.png" alt="">
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

<style lang="less">
.cinema {
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
  }
}
</style>
