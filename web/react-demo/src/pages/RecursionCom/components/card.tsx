import React, { useMemo } from "react";
import { PlusSquareOutlined } from '@ant-design/icons';
import { CardReProps, DataType } from '../type';

const CardRe = (props: CardReProps) => {
    const { dataNow, dataAll, setData } = props;

    const content: string = useMemo(() => {
        return dataNow?.text
    }, [dataNow]);

    const dfs = (itemObj: DataType, val: string, itemNew: DataType) => {
        // 深度遍历寻找目标父元素
        if (itemObj?.id === val) {
            itemObj.recursionList.push(itemNew);
            return;
        }
        _.forEach(itemObj?.recursionList ?? [], item => {
            console.log('dfsid', item?.id);
            if (item?.id === val) {
                item.recursionList.push(itemNew);
                return;
            }
            dfs(item, val, itemNew);
        });
    };

    const addReCursion = () => {
        const itemNew: DataType = {
            id: (Math.random() * 1000).toString(),
            pId: dataNow?.id,
            level: dataNow?.level + 1,
            text: `React + vue in level ${dataNow?.level + 1}`,
            recursionList: [],
        }
        const dataCopy = _.cloneDeep(dataAll);
        dfs(dataCopy, dataNow?.id, itemNew);
        setData(dataCopy);
    }

    const reCom = _.map((dataNow?.recursionList || []), (item) => {
        return (
            <CardRe
                key={item?.id}
                dataNow={item}
                dataAll={dataAll}
                setData={setData}
            />
        );
    });

    return (
        <div className="h-15 bg-slate-100 rounded border-2 my-2">
            <div className="ml-2 cursor-pointer" onClick={() => addReCursion()}>
                {
                    dataNow?.level < 3 ? (
                        <>
                            <PlusSquareOutlined />嵌套组
                        </>
                    ) : null
                }
            </div>
            <div className="ml-2">
                {
                    content
                }
                {
                    reCom
                }
            </div>
        </div>
    )
}

export default CardRe;