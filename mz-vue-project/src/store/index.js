// 仓库文件
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 创建仓库
let store = new Vuex.Store({
  // 选项对象

  // 状态 - 项目中需要用的数据（需要在多个组件中使用的数据）
  state: {
    // 当前定位or切换的城市名称
    curCityName: '深圳'
  },

  mutations: {
    // key: value
    /**
     * 修改curCityName
     * @param {Object} state 就是当前仓库的 state
     * @param {Object} payload 提交的载荷（参数）
     */
    chgCityName (state, payload) {
      state.curCityName = payload.name
    }
  }
})

export default store;
