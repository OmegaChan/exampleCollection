import { useEffect, useState } from "react";
import { useMockApi } from '../../../hooks/useMockApi';
import { DataType } from "../type";

export const useData = () => {
  const [data, setData] = useState<Array<DataType>>([]);
  const { promiseApi } = useMockApi();

  const mockData = [
    {
      key: "178",
      name: "John Brown",
      age: 32,
      tel: "0571-22098909",
      phone: 18889898989,
      address: "New York No. 1 Lake Park"
    },
    {
      key: "267",
      name: "Jim Green",
      tel: "0571-22098333",
      phone: 18889898888,
      age: 42,
      address: "London No. 1 Lake Park"
    },
    {
      key: "3456",
      name: "Joe Black",
      age: 32,
      tel: "0575-22098909",
      phone: 18900010002,
      address: "Sydney No. 1 Lake Park"
    },
    {
      key: "45",
      name: "Jim Red",
      age: 18,
      tel: "0575-22098909",
      phone: 18900010002,
      address: "London No. 2 Lake Park"
    },
    {
      key: "5090",
      name: "Jake White",
      age: 18,
      tel: "0575-22098909",
      phone: 18900010002,
      address: "Dublin No. 2 Lake Park"
    }
  ];

  useEffect(() => {
    promiseApi(mockData, 0).then((res: any) => {
      let code: string = "";
      let idx: number = -1;
      res?.forEach((item: DataType, index: number) => {
        if (item.tel !== code) {
          code = item.tel;
          idx = index;
          item.rowSpan = 1;
        } else {
          res[idx].rowSpan += 1;
          item.rowSpan = 0;
        }
      });
      setData(res);
    });
  }, []);

  return {
    data,
    setData
  };
};
