<template>
  <div>
    <div class="swiper-container mz-banner">
      <!-- <router-link to="/city" tag="div" class="city-fixed">
        <span>深圳</span>&nbsp;
        <i class="iconfont icon-xiangxia" style="font-size:10px"></i>
      </router-link> -->
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in bannerList" :key="item._id">
          <img :src="item.imgUrl" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      // 轮播图的数据
      bannerList: [],
      mySwiper: null
    }
  },
  methods: {
    initSwiper () {
      // 对某个代码不校验 eslint 的规则
      /* eslint-disable */
      this.mySwiper = new Swiper(".swiper-container", {
        autoplay: true,
        loop: true,
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }
      });
      /* eslint-enable */
    }
  },
  created () {
    axios.get('http://localhost:3000/banner/search', {
      // parpams 才是 get 的参数
      params: {
        pageSize: 12
      }
    }).then((res) => {
      // !!!! res 不是 后台返回给你的数据，真正后台给你返回的数据在 res.data 上面
      let data = res.data;
      if (data.code === 0) {
        this.bannerList = data.data;
        // 1. 数据更新之后，对轮播图做个更新

        // 2. 数据更新之后，再做 new Swiper (PS: 数据的更新到页面真实DOM的更新还需要一点点时间)  $nextTick() 这个函数能确保真实dom的更新
        this.$nextTick(() => {
          this.initSwiper();
        })
      } else {
        alert('网络异常，请稍后重试');
      }
    })
  }

}
</script>
<style lang="less">
.mz-banner {
  height: 56vm;
  img {
    width: 100%;
    height: 100%;
  }
  // .swiper-pagination-bullet {
  //     position: absolute;
  //     bottom: 10px;
  //     left: 50%;
  //     transform: translateX(-50%);
      // .swiper-pagination{
      //   width: 5px!important;
      //   height: 5px!important;
      //   border: 1px solid hsla(0,0%,100%,.8)!important;
      //   background: hsla(0,0%,100%,0)!important;
      //   opacity: 1!important;
      // }
  // }
}
</style>
