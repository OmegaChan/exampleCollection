export const useStrAndObj = () => {
  const str2obj = (str: string) => {
    // 字符串转对象
    return (new Function("return " + str))();
  };

  const obj2str = (obj: Record<string, any>) => {
    // 对象转字符串
    // 返回一个将对象中的函数都转化为字符串的对象　不直接在原对象上面改
    const stringifyFunction = (obj: Record<string, any>) => {
      let newobj = JSON.parse(JSON.stringify(obj))
      for (let key in obj) {
        if (obj[key] instanceof Function) {
          newobj[key] = obj[key].toString().replace(/[\n\t\r]/g, '');
          continue
        }
        if (obj[key] instanceof Object) {
          newobj[key] = stringifyFunction(obj[key])
        }
      }
      return newobj
    }
    // 用于替代JSON.stringify函数
    let _object = stringifyFunction(obj) // 将对象中的函数转为字符串
    return JSON.stringify(_object) // 将对象转为字符串
  };

  return {
    str2obj,
    obj2str,
  }
}