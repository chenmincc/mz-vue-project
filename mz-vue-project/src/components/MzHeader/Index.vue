<template>
  <header class="mz-header">
    <div class="title">
      <span @click="back">×</span>
      <div>{{ title }}</div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    // 标题
    title: {
      type: String,
      default: '卖座电影'
    }
  },

  methods: {
    back () {
      this.$router.push('/film/nowPlaying')
    }
  }
}
</script>

<style lang="less">
.mz-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  overflow: hidden;
  z-index: 3000;
  background-color: #fff;
  display: flex;

  .title {
    text-align: center;
    font-size: 17px;
    color: #191a1b;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 16px;
    padding-right: 16px;
    span{
      float: left;
      font-size: 20px;
    }
  }
}
</style>
