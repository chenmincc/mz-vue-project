<template>
  <div class="main">
    <div class="center-view">
      <router-link to='/login' tag='div' class='top'>
        <img src="@/assets/images/ljdl.png" alt class="top-img">
        <p>立即登录</p>
      </router-link>
      <ul class="order">
        <li>
          <img src="@/assets/images/dydd.png" alt class="order-img">
          <!-- <span class="span"></span> -->
          <p class="dd">电影订单</p>
        </li>
        <li>
          <img src="@/assets/images/ptdd.png" alt class="order-img">
          <p class="dd">拼团订单</p>
        </li>
      </ul>
      <router-link to='/card' tag='div' class='card'>
        <img src="@/assets/images/mzk.png" alt class="card-img1">
        <span class="card-mzk">卖座卡</span>
        <img src="@/assets/images/left.png" alt class="card-img2">
      </router-link>
      <router-link to='/money' tag='div' class='card'>
        <img src="@/assets/images/ye.png" alt class="card-img1">
        <span class="card-mzk">余额</span>
        <div class="price">
          <i>￥</i>
          <span>0</span>
        </div>
        <img src="@/assets/images/left.png" alt class="card-img2">
      </router-link>
      <router-link to='/set' tag='div' class='card'>
        <img src="@/assets/images/sz.png" alt class="card-img1">
        <span class="card-mzk">设置</span>
        <img src="@/assets/images/left.png" alt class="card-img2">
      </router-link>
    </div>
  </div>
</template>

<style lang='less'>
.main {
  height: 100%;
  .center-view {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    font-size: 16px;
    background: #f4f4f4;
    margin-bottom: 59px;
    .top {
        text-align: center;
        margin-top: -44px;
        height: 200px;
        padding-left: 22px;
        padding-top: 64px;
        background: url(../../../assets/images/wd-background.png);
        background-size: cover;
        display: flex;
        align-items: center;
        color: #fff;
        .top-img {
          width: 63px;
          height: 63px;
          border-radius: 35px;
          margin-right: 20px;
          border: 2px solid #fff;
        }
    }
    .order {
      width: 100%;
      margin: 0 auto;
      display: flex;
      text-align: center;
      font-size: 13px;
      padding: 0;
      height: 79px;
      background: #fff;
      margin-bottom: 10px;
      align-items: center;
      li {
        position: relative;
        width: 50%;
        height: 49px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        .order-img {
          display: block;
          width: 26px;
          height: 26px;
        }
        .dd {
          color: #797d82;
        }
      }
    }
    .card {
      background: #fff;
      padding: 0 15px;
      height: 49px;
      display: flex;
      align-items: center;
      .card-img1 {
        width: 20px;
        height: 20px;
      }
      .card-mzk {
        margin-left: 15px;
        color: #191a1b;
        font-size: 15px;
        flex: 1;
      }
      .card-img2 {
        text-align: right;
        width: 6px;
        height: 10px;
      }
      .price {
        float: right;
        color: #797d82;
        padding-right: 14px;
        font-size: 15px;
        i {
          font-size: 11px;
        }
      }
    }
  }
}
</style>
