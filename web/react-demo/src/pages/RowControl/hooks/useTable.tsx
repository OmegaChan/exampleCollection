import React from "react";
import type { ColumnsType } from "antd/es/table";
import { DataType, UseData } from "../type";

export const useTable = (props: UseData) => {
  const { data, setData } = props;

  const add = (_: DataType, index: number) => {
    const newData = [...data];
    const newItem = {
      key: Math.ceil(Math.random() * 1000) + "",
      tel: data[index].tel,
      rowSpan: 0
    };
    for (let i = index; i >= 0; i--) {
      if (newData[i].rowSpan !== 0) {
        newData[i].rowSpan++;
        break;
      }
    }
    newData.splice(index + 1, 0, newItem as DataType);
    setData(newData);
  };

  const del = (_: DataType, index: number) => {
    const newData = [...data];
    const nowRowSpan = newData[index]?.rowSpan;
    if (nowRowSpan > 1 && index < newData.length - 1) {
      // 存在分行的第一行
      newData[index + 1].rowSpan = nowRowSpan - 1;
    } else if (nowRowSpan === 0) {
      // 分行的下面几行某一行
      for (let i = index; i >= 0; i--) {
        if (newData[i].rowSpan !== 0) {
          newData[i].rowSpan--;
          break;
        }
      }
    }
    // 单行正常删除即可
    newData.splice(index, 1);
    setData(newData);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Home phone",
      // colSpan: 2,
      dataIndex: "tel",
      onCell: (dataRow: DataType) => {
        return {
          // 对于这列，他的rowSpan设置为0时
          // 该列即进行隐藏，某则值为多行则显示多少行
          // 首列即为锚点列，其他列正常显示
          rowSpan: dataRow?.rowSpan
        };
      }
    },
    {
      title: "Phone",
      // colSpan: 0,
      dataIndex: "phone",
      onCell: (dataRow: DataType) => {
        return {
          // 对于这列，他的rowSpan设置为0时
          // 该列即进行隐藏，某则值为多行则显示多少行
          // 首列即为锚点列，其他列正常显示
          rowSpan: dataRow?.rowSpan
        };
      }
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <a>{text}</a>
    },
    {
      title: "Age",
      dataIndex: "age"
    },
    {
      title: "Address",
      dataIndex: "address"
    },
    {
      title: "操作",
      dataIndex: "ope",
      width: 100,
      fixed: "right",
      render: (_, record, index) => (
        <div>
          <a onClick={() => add(record, index)}>添加</a>
          <a onClick={() => del(record, index)}>删除</a>
        </div>
      )
    }
  ];

  return {
    columns
  };
};
