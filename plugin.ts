import { IApi } from '@umijs/max';

export default (api: IApi) => {
  // api.modifyRoutes((memo) => {
  //   Object.keys(memo).forEach((key) => {
  //     const item = memo[key];
  //
  //     try {
  //       const r = require(item.__absFile);
  //       console.log(r.routeConfig);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   });
  //
  //   return memo;
  // });
};
