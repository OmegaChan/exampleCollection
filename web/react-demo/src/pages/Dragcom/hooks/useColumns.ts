import type { ColumnsType } from 'antd/es/table';
import { DataType } from '../type';

export const useColumns = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];

  const columnsHandle: ColumnsType<DataType> = [
    {
      key: 'sort',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];

  return {
    columns,
    columnsHandle,
  }
};
