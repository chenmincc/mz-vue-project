<template>
  <div>
    <mzCinemaTop></mzCinemaTop>
    <div class="MzFilmAdress">
      <div class="MzFilmAdress-item" v-for='item in cinemaList' :key="item._id">
        <div class="cinemaName">
          <p>{{ item.name }}</p>
          <span>{{ item.address }}</span>
        </div>
        <div class="distance">
          <span>{{ item.price }}</span>
          <p>{{ item.distance }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MzCinemaTop from '@/components/MzCinemaTop/Index.vue';
import axios from 'axios';

export default {
  data () {
    return {
      cinemaList: []
    }
  },
  components: {
    MzCinemaTop
  },
  created () {
    axios.get('http://localhost:3000/cinema/search', {
      params: {
        pageSize: 12
      }
    }).then((res) => {
      let data = res.data;
      if (data.code === 0) {
        this.cinemaList = data.data;
      } else {
        alert('网络异常，请稍后重试');
      }
    })
  }
}
</script>

<style lang="less">
.MzFilmAdress{
  // flex: 1;
  // overflow-y: auto;
  padding-top: 94px;
}
.MzFilmAdress-item {
  height: 45px;
  padding: 15px;
  border-bottom: 1px solid #ededed;
  .cinemaName {
    width: calc(100% - 100px);
    text-align: left;
    padding-right: 15px;
    float: left;
    font-size: 15px;
    color: #191a1b;
    p {
      line-height: 22px;
    }
    span {
      display: block;
      color: #797d82;
      font-size: 12px;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-top: 10px;
    }
  }
  .distance {
    width: 70px;
    text-align: right;
    float: right;;
    span {
      color: #ff5f16;
      font-size: 15px;
      line-height: 22px;
    }
    p {
      color: #797d82;
      font-size: 12px;
      margin-top: 10px;
    }
  }
}
</style>
