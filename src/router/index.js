import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import App from "../App"

Vue.use(VueRouter)


import home from "../pages/home/home.vue";
import details from "../pages/details/details.vue";
import business from "../pages/business/business.vue";
import my from "../pages/my/my.vue";
import footerGuide from "../components/footerGuide/footerGuide.vue";
import login from "../pages/login/login"
import detail from "../pages/detail/detail"

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: App, //顶层路由，对应index.html
      children: [ //二级路由。对应App.vue
      //地址为空时跳转home页面
        {
          path:'',
          redirect: '/home'
        },
        {
          path:"/home",
          component:home,
          name:"home",
          meta:{
            showFooter:true
          }
        },
        {
          path:"/footerGuide",
          component:footerGuide,
          name:"footerGuide",
        },
        {
          path:"/details",
          component:details,
          name:"details",
          meta:{
            showFooter:true
          }
        },
        {
          path:"/business",
          component:business,
          name:"business",
          meta:{
            showFooter:true
          }
        },
        {
          path:"/my",
          component:my,
          name:"my",
          meta:{
            showFooter:true
          }
        },

        {
          path:"/login",
          component:login,
          name:"login",

        }
        ,

        {
          path:"/detail",
          component:detail,
          name:"detail",

        }


      ]


    }
  ]
})
