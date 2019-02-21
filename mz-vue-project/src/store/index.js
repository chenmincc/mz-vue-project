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
    curCityName: '深圳',

    // 城市数据列表
    cityData: []
  },

  getters: {
    filterCityData (state) {
      let hash = {};
      let i = 0;
      let res = [];

      state.cityData.forEach(item => {
        // 1、得到当前城市的首字母
        let firstLetter = item.pinyin.substr(0, 1).toUpperCase();
        // console.log(firstLetter);
        // 2. 判断当前城市的 首字母是循环过程中第一次出现，还是多次出现。
        if (hash[firstLetter]) {
          // 存在
          let index = hash[firstLetter] - 1;
          res[index].list.push(item)
        } else {
          // 不存在
          hash[firstLetter] = ++i;
          let obj = {};
          obj.py = firstLetter;
          obj.list = [item];
          res.push(obj)
        }
      })

      let temp = res.sort((a, b) => {
        return a.py.charCodeAt() - b.py.charCodeAt();
      })

      return temp;
    },

    // 右侧显示字母的数据
    filterLetters (state, getters) {
      return getters.filterCityData.map(item => {
        return item.py;
      })
    },

    // 热门城市
    hotCity (state) {
      var tem = state.cityData.filter(item => {
        return item.isHot === 1
      })
      return tem
    }

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
    },
    // 修改 cityData
    chgCityData (state, payload) {
      state.cityData = payload
    }
  }
})

export default store;
