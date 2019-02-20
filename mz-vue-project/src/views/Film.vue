<template>
  <div>
    <MzBanner></MzBanner>
    <mzTabs></mzTabs>
    <router-view></router-view>
    <!-- <mzFooter></mzFooter> -->
    <!-- <div class="main">
      <div class="main-ul"> -->
        <!-- <ul class="main-ul"> -->
          <!-- <router-link v-for="item in tabsList" :key="item._id"  class="main-ul-li" tag="li" :to="{name:'detail',params:{id:item._id}}">
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
            <div class="right">购票</div>
          </router-link> -->
        <!-- </ul> -->
      <!-- </div>
    </div> -->
  </div>
</template>

<script>
import MzBanner from '../components/MzBanner/Index.vue';
import MzTabs from '../components/MzTabs/Index.vue';
// import axios from 'axios';
// import MzFooter from '../components/MzFooter/Index.vue';

export default {
  components: {
    MzBanner,
    MzTabs
    // MzFooter
  }
  // data () {
  //   return {
  //     tabsList: []
  //   }
  // },
  // created () {
  //   axios.get('http://localhost:3000/films/search', {
  //     params: {
  //       pageSize: 12
  //     }
  //   }).then((res) => {
  //     let data = res.data;
  //     if (data.code === 0) {
  //       this.tabsList = data.data;
  //     } else {
  //       alert('网络异常，请稍后重试');
  //     }
  //   })
  // }
};
</script>
