import React from 'react';
import { Tag } from 'antd';
import { useRouterConfig } from './routes';

function App() {
  const { element } = useRouterConfig();
  return (
    <>
      <h1 className="text-3xl font-bold">
        子应用-react
      </h1>
      <div className="my-3">
        <Tag color="#87d068">子应用(基于React + vite)</Tag>
      </div>
      {
        element
      }
    </>
  )
}

export default App
