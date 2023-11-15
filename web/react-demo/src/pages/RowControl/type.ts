export interface DataType {
    key: string;
    name: string;
    age: number;
    tel: string;
    phone: number;
    address: string;
    rowSpan: number;
}
  
export interface UseData {
    data: Array<DataType>;
    setData: (obj: Array<DataType>) => void;
}
  