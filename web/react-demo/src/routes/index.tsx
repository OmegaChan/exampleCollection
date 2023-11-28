import React from "react";
import RowControl from '../pages/RowControl';
import RecursionCom from '../pages/RecursionCom';
import DragCom from '../pages/DragCom';
import { useRoutes } from 'react-router-dom'


// 引入所需要路由的页面
export const useRouterConfig = () => {
  const router = [
    {
        path: '/rowControl',
        element: <RowControl />,
    },
    {
      path: '/recursionCom',
      element: <RecursionCom />,
    },
    {
      path: '/dragCom',
      element: <DragCom />,
    },
  ];
  const element = useRoutes(router);
  return {
    element
  }
}
