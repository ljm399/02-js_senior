function deepCopy(originValue, map = new WeakMap()) {
  //优化 let map = new WeakMap();每次递归都要创建新的map,所有把map放到函数的参数上

  // 0, 如果是symol类型(symobl是值),
  if (typeof originValue === 'symbol') {
    return Symbol(originValue.description); 
  }

  // 1.如果是原始类型，直接返回
  if(!isObject(originValue)) return originValue;

  // 2.如果是set类型(不能和下面的位置互换)
  if (originValue instanceof Set) {
    const newSet = new Set();
    for (const value of originValue) {
      newSet.add(deepCopy(value));//递归
    }
    return newSet
  }

  // 3. 如果是函数类型,不需要深拷贝,直接返回
  if (typeof originValue === 'function') return originValue;

  // 4.如果是数组/对象，创建一个空的对象或者数组
  const newObj = Array.isArray(originValue) ? [] : {};
  
  // 5. 解决循环引用的问题
  if (map.get(originValue)) return map.get(originValue)
  map.set(originValue, newObj);//目的是为了上一句

  // 只能遍历普通的key
  for (const key in originValue) {
    newObj[key] = deepCopy(originValue[key], map);//递归
  }

  // 遍历symbol类型的key
  const symbolKeys = Object.getOwnPropertySymbols(originValue);
  if (symbolKeys.length > 0) {
    for(const key of symbolKeys) {
      newObj[Symbol(key.description)] = deepCopy(originValue[key], map)
    }
  }
  return newObj;
}