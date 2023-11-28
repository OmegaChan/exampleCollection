import { useEffect, useState } from "react";
import { useMockApi } from 'chanhooks';
import { DataType } from "../type";

export const useData = () => {
  const [data, setData] = useState<Array<DataType>>([{
    key: '',
    name: '',
    age: 0,
    address: '',
  }]);
  const { promiseApi } = useMockApi();

  const mockData: Array<DataType> = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address:
        'Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  useEffect(() => {
    promiseApi<Array<DataType>>({
      mockData,
      time: 0,
    }).then((res: any) => {
      setData(res);
    });
  }, []);

  return {
    data,
    setData
  };
};
