import { MenuDataItem } from '@ant-design/pro-components';

export interface RouteProps {
  menuData?: MenuDataItem &
    Setting & {
      redirect?: string;
    };
}

/**
 * @see https://pro.ant.design/zh-CN/docs/advanced-menu
 */
export interface Setting {
  /**
   * @name false 时不展示顶栏
   */
  headerRender?: false;
  /**
   * @name false 时不展示页脚
   */
  footerRender?: false;
  /**
   * @name false 时不展示菜单
   */
  menuRender?: false;
  /**
   * @name false 时不展示菜单顶栏
   */
  menuHeaderRender?: false;

  /**
   * @name 固定顶栏
   **/
  fixedHeader?: boolean;

  /**
   * @name 固定菜单
   */
  fixSiderbar?: boolean;

  /**
   * @name theme for nav menu
   * @name 导航菜单的主题
   */
  navTheme?: 'dark' | 'light' | 'realDark' | undefined;
  /**
   * @name nav menu position: `side` or `top`
   * @name 导航菜单的位置
   * @description side 为正常模式，top菜单显示在顶部，mix 两种兼有
   */
  layout?: 'side' | 'top' | 'mix';
  /**
   * @name 顶部导航的主题，mix 模式生效
   */
  headerTheme?: 'dark' | 'light';
}
