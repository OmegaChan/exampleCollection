import { useEffect, useState } from "react";
import { useMockApi } from '../../../hooks/useMockApi';
import { DataType } from "../type";

export const useData = () => {
  const [data, setData] = useState<DataType>({
    id: '',
    pId: '',
    level: 0,
    text: '',
    recursionList: []
  });
  const { promiseApi } = useMockApi();

  const mockData: DataType = {
    id: '01',
    pId: '',
    level: 1,
    text: 'React + vue in level 1',
    recursionList: [{
        id: '020',
        pId: '01',
        level: 2,
        text: 'React + vue in level 2',
        recursionList: []
    }, {
        id: '021',
        pId: '01',
        level: 2,
        text: 'React + vue in level 2',
        recursionList: [
            {
                id: '030',
                pId: '021',
                level: 3,
                text: 'React + vue in level 3',
                recursionList: []
            }
        ]
    }],
  };

  useEffect(() => {
    promiseApi(mockData, 0).then((res: any) => {
      console.log("获取数据-re", res);
    //   let code: string = "";
    //   let idx: number = -1;
    //   res?.forEach((item: DataType, index: number) => {
    //     if (item.tel !== code) {
    //       code = item.tel;
    //       idx = index;
    //       item.rowSpan = 1;
    //     } else {
    //       res[idx].rowSpan += 1;
    //       item.rowSpan = 0;
    //     }
    //   });
      setData(res);
    });
  }, []);

  return {
    data,
    setData
  };
};
