import React from "react";
import CardRe from './components/card';
import { useData } from './hooks/useData';

const RecursionCom = () => {
    const { data, setData } = useData();

    return (
        <div className="w-96">
            <CardRe
                dataNow={data}
                dataAll={data}
                setData={setData}
            />
        </div>
    );
}

export default RecursionCom;