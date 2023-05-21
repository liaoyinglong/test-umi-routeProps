// 运行时配置
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
import { useAppData } from '@@/exports';
import { RunTimeLayoutConfig } from '@@/plugin-layout/types';

import { RouteProps } from '@/routeProps';
import { useMemo } from 'react';

export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout: RunTimeLayoutConfig = () => {
  const appData = useAppData();
  const { routes } = appData;

  const routeMap = useMemo(() => {
    type Route = (typeof routes)[string];
    const map = new Map<string, Route>();
    Object.values(routes).forEach((item) => {
      // 内部属性
      if ((item as any).isLayout) {
        return;
      }
      if (item.path) {
        map.set(item.path!, item);
        if (!item.path.startsWith('/')) {
          map.set(`/${item.path}`, item);
        }
      }
    });

    return map;
  }, [routes]);

  console.log({
    routeMap,
    appData,
  });

  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',

    menu: {
      locale: false,
      request() {
        const res = [
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

        function merge(arr: typeof res) {
          arr.forEach((item) => {
            const route = routeMap.get(item.path);
            if (route) {
              // 这里要做的 merge 只是把配置 的 routeProp 里的属性合并到 服务端返回的数据中
              const routeProps = route as RouteProps;
              // 最后面再放 item 是为了只添加 routeProps 里的属性，不覆盖服务端返回的数据
              Object.assign(item, routeProps.menuData, item);
            }
            if (item.children) {
              merge(item.children as never);
            }
          });
        }
        merge(res);

        return res as never;
      },
    },
  };
};
export function patchRoutes({ routes, routeComponents }: any) {
  Object.values(routes).forEach((route) => {
    if (!route.path?.startsWith('/')) {
      route!.path = `/${route!.path}`;
    }
    if (route.routeConfig?.layout === false) {
      // worked
      delete route.parentId;
    }
  });
  console.log('patchRoutes', routes, routeComponents);
}

export function patchClientRoutes(arg: any) {
  console.log('patchClientRoutes', arg);
}
