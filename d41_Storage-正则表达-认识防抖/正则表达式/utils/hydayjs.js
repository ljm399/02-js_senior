function formatTime(timestamp, fmtString) {//timestamp时间戳
  const date = new Date(timestamp);//将时间戳转换Date对象,主要是为了使用Date对象的方法
  // console.log(date)//Thu May 12 2022 05:20:00

  // const year = date.getFullYear();//获取年份
  // const month = date.getMonth() + 1;//获取月份, 月份是从0开始的，所以要加1
  // const day = date.getDate();//获取日
  // const hour = date.getHours();//获取小时
  // const minute = date.getMinutes();//获取分钟
  // const second = date.getSeconds();//获取秒

  // //正则
  // const yearRe = /y+/; //匹配年份，一个或多个y
  // const monthRe = /M+/; //匹配月份，一个或多个M

  // const dayRe = /d+/; //匹配日，一个或多个d

  // const hourRe = /h+/; //匹配小时，一个或多个h
  // const minuteRe = /m+/; //匹配分钟，一个或多个m
  // const secondRe = /s+/; //匹配秒，一个或多个s
  
  // 优化写法(结合正则和获取时间)
  const dateObj = {
    'y+': date.getFullYear(), //年份
    'M+': date.getMonth() + 1, //月份， 月份是从0开始的，所以要加1
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分钟
    's+': date.getSeconds(), //秒
  }

  for (const key in dateObj) {
    const keyReg = new RegExp(key)//将key转换成正则表达式对象
    if (keyReg.test(fmtString)) {
      const value = (dateObj[key] + '').padStart(2, '0')//+''是为了确保整体式字符串
      fmtString = fmtString.replace(keyReg, value)//替换字符串中的正则表达式匹配到的内容为value
    }
  }
  return fmtString;
}
console.log(formatTime(1652304000000, 'yyyy-MM-dd hh:mm:ss'))//2022-05-12 05:20:00