<template>
  <div>
    <router-link to="/city" tag="div" class="city-fixed">
      <span>{{ curCityName }}</span>
      <i class="iconfont icon-xiangxia" style="font-size:10px"></i>
    </router-link>
    <MzBanner></MzBanner>
    <mzTabs></mzTabs>

    <router-view></router-view>
  </div>
</template>

<script>
import MzBanner from '@/components/MzBanner/Index.vue';
import MzTabs from '@/components/MzTabs/Index.vue';
// import axios from 'axios';
// import MzFooter from '../components/MzFooter/Index.vue';

export default {
  components: {
    MzBanner,
    MzTabs
    // MzFooter
  },

  computed: {
    curCityName () {
      return this.$store.state.curCityName
    }
  }
};
</script>

<style lang="less">
.city-fixed {
  position: absolute;
  top: 18px;
  left: 7px;
  color: rgb(194, 194, 194);
  z-index: 10;
  font-size: 13px;
  background: rgba(0,0,0,.2);
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
  padding: 0 5px;
  color:#fff;
  span{
    margin-right: 2px;
  }
}
</style>
