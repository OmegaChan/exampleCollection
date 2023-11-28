import React from "react";
import { Tag } from 'antd';
import DragTable from './components/DragTable';
import DragTableHandle from './components/DragTableHandle';

const Dragcom = () => {

  return (
    <>
      <div>
        <Tag color="#87d068">可拖拽表格</Tag>
        <DragTable />
      </div>
      <div className="mt-5">
        <Tag color="#87d068">可拖拽带手柄表格</Tag>
        <DragTableHandle />
      </div>
    </>
  );
}

export default Dragcom;