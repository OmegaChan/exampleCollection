import React from "react";
import { Table } from "antd";
import { useData } from "./hooks/useData";
import { useTable } from "./hooks/useTable";

const RowControl = () => {
    const { data, setData } = useData();

    const { columns } = useTable({
        data,
        setData
    });
    return <Table columns={columns} dataSource={data} bordered />;
}

export default RowControl;