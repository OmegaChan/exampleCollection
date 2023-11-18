export interface DataType {
    id: string
    pId: string
    level: number
    text: string
    recursionList: Array<DataType>
}

export interface CardReProps {
    dataNow: DataType
    dataAll: DataType
    setData: (data: DataType) => void
}