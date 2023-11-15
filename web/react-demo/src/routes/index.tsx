import React from "react";
import RowControl from '../pages/RowControl'
import { useRoutes } from 'react-router-dom'


// 引入所需要路由的页面
export const useRouterConfig = () => {
  const router = [
    {
        path: '/rowControl',
        element: <RowControl />,
    },
  ];
  const element = useRoutes(router);
  return {
    element
  }
}
