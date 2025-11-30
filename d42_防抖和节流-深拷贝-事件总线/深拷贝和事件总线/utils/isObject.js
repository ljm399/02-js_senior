function isObject(value) {
  const valueType = typeof value;
  //逻辑运算符: &&: 若左侧表达式为true，则返回右侧表达式的值；否则直接返回左侧表达式的值。
  // || : 若左侧表达式为true，则返回左侧表达式的值；否则直接返回右侧表达式的值。
  //这里返回的是布尔值,而不是具体的值
  return (value !== null) && (valueType === 'object' || valueType === 'function');
  
}