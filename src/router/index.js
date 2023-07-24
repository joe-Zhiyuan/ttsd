import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
  // 重定向 解决点击左侧菜单刷新访问route
  {
    path: '/redirext',
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  }
]

// ？？？
const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
});

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher
}

export default router