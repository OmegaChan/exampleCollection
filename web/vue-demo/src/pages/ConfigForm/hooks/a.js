const str2obj = (str) => {
  // 字符串转对象
  return (new Function("return " + str))();
}

const obj2str = (obj) => {
  // 对象转字符串
  // 返回一个将对象中的函数都转化为字符串的对象　不直接在原对象上面改
  const stringifyFunction = (obj) => {
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
  console.log(_object)
  return JSON.stringify(_object) // 将对象转为字符串
}

const objNow = {
  a: 12,
  b: () => {
    console.log('123');
  },
  c: {
    d: 34
  }
}

const strNew = obj2str(objNow);
console.log({ strNew });
const objNew = str2obj(strNew);
console.log({ objNew });
eval(objNew?.b)();