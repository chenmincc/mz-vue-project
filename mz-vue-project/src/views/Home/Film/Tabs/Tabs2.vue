<template>
  <div class="main">
    <div class="main-ul">
      <!-- <ul class="main-ul"> -->
      <router-link
        v-for="item in tabsList"
        :key="item._id"
        class="main-ul-li"
        tag="li"
        :to="{name:'detail',params:{id:item._id}}"
      >
        <div class="left">
          <img :src="item.imgUrl" alt>
        </div>
        <div class="center">
          <div class="film-name">
            <span class="name">{{ item.name }}</span>
            <span class="item">2D</span>
          </div>
          <div class="film-grade">
            <span class="label">观众评分</span>
            <span class="grade">{{ item.score }}</span>
          </div>
          <div class="film-action">
            <span class="label">{{ item.starring }}</span>
          </div>
          <div class="film-detail">
            <span class="label">{{ item.country }} | {{ item.time }}</span>
          </div>
        </div>
        <div class="right">预购</div>
      </router-link>
      <!-- </ul> -->
    </div>
  </div>
</template>

<script>
// import MzBanner from '../components/MzBanner/Index.vue';
// import MzTabs from '../components/MzTabs/Index.vue';
import axios from 'axios';
// import MzFooter from '../components/MzFooter/Index.vue';

export default {
  components: {
    // MzBanner,
    // MzTabs
    // MzFooter
  },
  data () {
    return {
      tabsList: []
    }
  },
  created () {
    axios.get('http://localhost:3000/films/search', {
      params: {
        pageSize: 20
      }
    }).then((res) => {
      let data = res.data;
      if (data.code === 0) {
        this.tabsList = data.data;
      } else {
        alert('网络异常，请稍后重试');
      }
    })
  }
};
</script>

<style lang="less">
.main {
  flex: 1;
  overflow: auto;
  padding-bottom: 50px;
  .main-ul {
    margin-left: 15px;
    margin-bottom: 0;
    li {
      padding: 15px 15px 15px 0;
      height: 94px;
      position: relative;
      border-bottom: 1px solid #ededed;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      /* width: 100%; */
      display: flex;
      align-items: center;
      .left {
        float: left;
        width: 66px;
        height: 94px;
        img {
          display: block;
          width: 66px;
          height: 90px;
        }
      }
      .center {
        float: left;
        width: calc(100% - 136px);
        padding: 0 10px;
        /* background: pink; */
        .film-name{
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          .name {
            max-width: calc(100% - 25px);
            color: #191a1b;
            font-size: 16px;
            height: 22px;
            line-height: 22px;
            margin-right: 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .item {
            font-size: 12px;
            color: #fff;
            background-color: #d2d6dc;
            height: 14px;
            line-height: 14px;
            padding: 0 2px;
            border-radius: 2px;
            vertical-align: middle;
          }
        }
        .film-grade,
        .film-action,
        .film-detail {
          width: 100%;
          height: 22px;
          line-height: 22px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          .label {
            font-size: 13px;
            margin-top: 4px;
            color: #797d82;
          }
        }
        .film-grade .grade {
          color: #ffb232;
          font-size: 14px;
          margin-left: 4px;
        }
      }
      .right {
        float: right;
        line-height: 25px;
        height: 25px;
        width: 50px;
        color: #ff5f16;
        font-size: 13px;
        text-align: center;
        border: 1px solid #ff5f16;
        border-radius: 2px;
        position: relative;
        border-radius: 4px;
      }
    }
  }
}
</style>
