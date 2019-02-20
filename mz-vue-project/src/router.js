// router.js 就是 vue-router 的配置文件

// 1. 引入 vue
// 2. 引入 vue-router
// 3. 使用 vue.use(vue-router)
// 4. 路由配置
// new VueRouter({
//   routes: [

//   ]
// })
// 5. 暴露这个配置

import Vue from 'vue';
import VueRouter from 'vue-router';
// import Film from './views/Film.vue';
// import Cinema from './views/Cinema.vue';
// import Center from './views/Center.vue';
// import City from './views/City.vue';
// import Home from './views/Home.vue';
// import Login from './views/Login.vue';
// import Detail from './views/Detail.vue';
// import Tabs1 from './views/Tabs1.vue';
// import Tabs2 from './views/Tabs2.vue'

Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      // PS: 不是一级路由的话，path路径前面不要加 /
      // PS: 二级或二级以上的路由，他们的url地址，是会从一级路由开始一直做追加的。
      // localhost:8080/#/films
      children: [
        {
          path: 'films',
          component: () => import('./views/Film.vue'),
          children: [
            {
              path: 'nowPlaying',
              component: () => import('./views/Tabs1.vue')
            },
            {
              path: 'comingSoon',
              component: () => import('./views/Tabs2.vue')
            },
            {
              path: '',
              redirect: '/films/nowPlaying'
            }
          ]
        },
        {
          path: 'cinemas',
          component: () => import('./views/Cinema.vue')
        },
        {
          path: 'center',
          component: () => import('./views/Center.vue')
        },
        // 空的儿子
        // localhost:8080/#/  ->  localhost:8080/#/films
        {
          path: '',
          redirect: '/films'
        }
      ]
    },
    {
      path: '/city',
      component: () => import('./views/City.vue')
    },
    {
      // 详情页
      path: '/detail/:id',
      name: 'detail',
      component: () => import('./views/Detail.vue')
    },
    {
      path: '/login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/card',
      component: {
        render (h) {
          return h('div', '卖座卡的页面');
        }
      }
    },
    {
      path: '/money',
      component: {
        render (h) {
          return h('div', '钱的页面');
        }
      }
    },
    {
      path: '/set',
      component: {
        render (h) {
          return h('div', '设置的页面');
        }
      }
    },
    // 设置一个 通配符的 一级路由，当url地址无法与上面的规则匹配的时候，就会跟我匹配。
    {
      path: '*',
      redirect: '/films/nowPlaying'
    }
  ]
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  let nickname = sessionStorage.getItem('nickname');
  let list = ['/card', '/money', '/set']
  if (list.indexOf(to.path) > -1 && !nickname) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})
export default router;
