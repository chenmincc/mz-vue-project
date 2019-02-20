<template>
  <div class="details">
    <!-- 详情页 id是 {{ $route.params.id }} -->
    <div class="detailBanner">
      <img :src="detailList.dataImg" alt>
    </div>
    <div class="film-detail">
      <div class="col">
        <div class="film-name">
          <span class="name">{{ detailList.dataName}}</span>
          <span class="item">2D</span>
        </div>
        <div class="film-grade">
          <span class="grade">{{ detailList.dataScore}}</span>&nbsp;
          <span class="grade-text">分</span>
        </div>
      </div>
      <div class="film-category grey-text1">科幻</div>
      <div class="film-premiere-time grey-text1">2019-02-05上映</div>
      <div class="film-nation-runtime grey-text1">{{ detailList.dataCountry}} | {{ detailList.dataTime}}</div>
      <div
        class="test grey-text1"
      >太阳即将毁灭，人类在地球表面建造出巨大的推进器，寻找新家园。然而宇宙之路危机四伏，为了拯救地球，为了人类能在漫长的2500年后抵达新的家园，流浪地球时代的年轻人挺身而出，展开争分夺秒的生死之战。</div>
      <div class="toggle">
        <i class="iconfont icon-xiangxia" style="font-size:10px"></i>
      </div>
    </div>
    <div class="actor">
      <div class="actors-title-bar">
        <span class="actors-title-text">演职人员</span>
      </div>
      <div class="actor-list">
        <ul>
          <li>
            <img src="../assets/images/dy.jpg" alt>
            <span class="actors-name">郭帆</span>
            <span class="actors-role">导演</span>
          </li>
          <li>
            <img src="../assets/images/yy.jpg" alt>
            <span class="actors-name">屈楚萧</span>
            <span class="actors-role">刘启</span>
          </li>
          <li>
            <img src="../assets/images/yy1.jpg" alt>
            <span class="actors-name">赵今麦</span>
            <span class="actors-role">韩朵朵</span>
          </li>
          <li>
            <img src="../assets/images/yy3.jpg" alt>
            <span class="actors-name">李光洁</span>
            <span class="actors-role">王磊</span>
          </li>
          <li>
            <img src="../assets/images/yy1.jpg" alt>
            <span class="actors-name">赵今麦</span>
            <span class="actors-role">韩朵朵</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="photos">
      <div class="photos-title">
        <span class="photos-title-text">剧照</span>
        <span class="photos-to-all">全部(6)
          <i class="iconfont icon-quanju_liebiaojiantou" style="font-size: 13px;"></i>
        </span>
      </div>
      <div class="photos-list">
        <ul>
          <li>
            <img src="../assets/images/jz1.jpg" alt>
          </li>
          <li>
            <img src="../assets/images/jz2.jpg" alt>
          </li>
          <li>
            <img src="../assets/images/jz1.jpg" alt>
          </li>
          <li>
            <img src="../assets/images/jz2.jpg" alt>
          </li>
        </ul>
      </div>
    </div>
    <a class="a" style="height: 49px; position: fixed; bottom: 0px; width: 100%;">
      <div class="goSchedule">选座购票</div>
    </a>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      detailList: []
    }
  },
  created () {
    axios.post('http://localhost:3000/films/update1', {
      id: this.$route.params.id
    }).then((response) => {
      var res = response.data;
      if (res.code === 0) {
        // 成功：
        this.detailList = res;
      } else {
        alert(res.msg);
      }
      console.log(res);
      // console.log(this.detailList);
    })
  }
}
</script>

<style lang="less">
.details {
  background: #f4f4f4;
  overflow-x: hidden;
  .detailBanner {
    img {
    width: 100%;
    height: 56vw;
    // transform: translateY(-50%);
  }
  }

  .film-detail {
    padding: 15px;
    padding-top: 12px;
    background-color: #fff;
    .col {
      height: 27px;
      .film-name {
        width: 256px;
        float: left;
        .name {
          color: #191a1b;
          font-size: 18px;
          height: 24px;
          line-height: 24px;
          margin-right: 7px;
        }
        .item {
          font-size: 9px;
          color: #fff;
          background-color: #d2d6dc;
          height: 14px;
          line-height: 14px;
          padding: 0 2px;
          border-radius: 2px;
          display: inline-block;
        }
      }
      .film-grade {
        float: right;
        width: calc(100% - 256px);
        text-align: right;
        color: #ffb232;
        .grade {
          font-size: 18px;
          font-style: italic;
        }
        .grade-text {
          font-size: 10px;
        }
      }
    }
    .grey-text1 {
      font-size: 13px;
      color: #797d82;
      margin-top: 4px;
      line-height: 19px;
    }
    .test {
      width: calc(100vw - 30px);
      margin-top: 12px;
      // opacity: 0;
      // position: absolute;
      // top: 1px;
      // margin-left: -10000px;
      font-size: 13px;
      height: 38px !important;
      overflow: hidden;
    }
    .toggle {
      display: flex;
      justify-content: center;
      line-height: 16px;
    }
  }
  .actor {
    margin-top: 10px;
    background-color: #fff;
    .actors-title-bar {
      width: 100%;
      padding: 15px;
      .actors-title-text {
        font-size: 16px;
        text-align: left;
        color: #191a1b;
      }
    }
    .actor-list {
      height: 140px;
      overflow-x: auto;
      overflow-y: hidden;
      ul {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        width: 100%;
        margin: 0;
        padding-left: 15px;
        list-style: none;
        li {
          width: 85px;
          min-width: 85px;
          // position: relative;
          margin-right: 10px;
          img {
            width: 100%;
            // position: absolute;
            top: 50%;
          }
          .actors-name {
            padding-top: 10px;
            font-size: 12px;
            color: #191a1b;
            width: 85px;
            height: 18px;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: block;
            text-align: center;
          }
          .actors-role {
            font-size: 10px;
            color: #797d82;
            display: block;
            text-align: center;
          }
        }
      }
    }
  }
  .photos {
    margin-top: 10px;
    margin-bottom: 60px;
    background-color: #fff;
    .photos-title {
      width: 100%;
      padding: 15px;
      .photos-title-text {
        font-size: 16px;
        text-align: left;
        color: #191a1b;
        display: inline-block;
        height: 22.5px;
        line-height: 22px;
      }
      .photos-to-all {
        font-size: 13px;
        color: #797d82;
        float: right;
        margin-right: 36px;
        // display: inline-block;
        height: 22.5px;
        line-height: 22px;
      }
    }
    .photos-list {
      height: 115px;
      background: rgb(255, 255, 255);
      overflow-x: auto;
      overflow-y: hidden;
      ul {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        width: 100%;
        margin: 0;
        padding-left: 15px;
        list-style: none;
        li {
          width: 150px;
          min-width: 150px;
          cursor: pointer;
          display: block;
          float: left;
          margin-right: 10px;
          width: auto !important;
          img {
            display: block;
            width: 150px;
          }
        }
      }
    }
  }
  .a {
    position: fixed;
    bottom: 0px;
    width: 100%;
    color: #333;
    text-decoration: none;
    height: 49px;
    cursor: auto;
    .goSchedule {
      position: fixed;
      bottom: 0;
      left: 0;
      height: 49px;
      width: 100%;
      text-align: center;
      background-color: #ff5f16;
      color: #fff;
      font-size: 16px;
      line-height: 49px;
    }
  }
}
</style>
