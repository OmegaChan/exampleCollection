import { Ref } from "vue";

declare interface Window {
  _: any
  showData: Ref<boolean>
}

declare const _: _.LoDashStatic;