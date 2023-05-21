import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  model: {},
  initialState: {},
  request: {},
  routeProps: {},
  // routes: [
  //   {
  //     path: '/home',
  //     name: '首页',
  //     routes: [
  //       {
  //         path: '/home/list',
  //         name: '列表',
  //         component: '@/pages/home/list',
  //       },
  //       {
  //         path: '/home/list2',
  //         name: '列表2',
  //         component: '@/pages/home/list2',
  //       },
  //     ],
  //   },
  //   {
  //     path: '/login',
  //     component: '@/pages/login',
  //     layout: false,
  //   },
  // ],
  mfsu: false,
  layout: {
    title: '@umijs/max',
  },
  npmClient: 'pnpm',
});
