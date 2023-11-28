export interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

export interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  'data-row-key': string;
}