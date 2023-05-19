// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
      request() {
        return [
          {
            path: '/home',
            name: '首页',
            children: [
              {
                path: '/home/list',
                name: '列表',
              },
              {
                path: '/home/list2',
                name: '列表2',
              },
            ],
          },
        ];
      },
    },
  };
};
