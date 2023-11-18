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
      setData(res);
    });
  }, []);

  return {
    data,
    setData
  };
};
