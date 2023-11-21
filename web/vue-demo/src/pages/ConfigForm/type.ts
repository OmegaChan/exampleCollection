export enum TypeEle {
  Input = 'Input',
  Select = "Select",
}

interface Option {
  label: string
  value: string
}

export interface InputItem {
  label: string
  ele: TypeEle
  value: string
  placeholder?: string
  options?: Array<Option>
}

export interface BtnItem {
  text: string
  callBack: () => void
}

export interface ConfigData {
  inputList: Array<InputItem>
  btnList: Array<BtnItem>
}