import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '../views/Nav.vue'
import Home from '../views/Home.vue'
import Explore from '../views/Explore.vue'
import Special from '../views/Special.vue'
import Recommoned from '../views/Recommoned.vue'
import Follow from '../views/Hot.vue'
import QuestionWaiting from '../views/QuestionWaiting.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'home',
    component: Nav,
	children:[
		{
		    path: '/',
			redirect: 'home'
	    },
	    {
		    path: 'home',
			// 路由懒加载 不点击 不加载
			component: () => import('../views/Home.vue'),
			children: [
				{
					path: '/',
					redirect: 'recommoned'
				},
				{
					path: 'recommoned',
					component: () => import('../views/Recommoned.vue')
				},
				{
					path: 'follow',
					component: () => import('../views/Follow.vue')
				},
				{
					path:'hot',
					component: () => import('../views/Hot.vue')
				}
			]
	    },
		{
			path: 'explore',
			component: () => import('../views/Explore.vue')
		},
		{
			path: 'special/all',
			component: () => import('../views/Special.vue')
		},
		{
			path: 'question/waiting',
			component: () => import('../views/QuestionWaiting.vue')
		}
	]
  },
  {
    path: '/login',
    // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
