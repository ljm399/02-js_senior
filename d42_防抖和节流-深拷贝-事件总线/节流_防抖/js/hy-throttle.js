function hythrottle(fn, interval, { leading = true, trailing = false} = {}) {
  let startTime = 0; // 记录开始时间
  let timer = null; // 记录定时器
  let res = null;

  const _throttle =  function(...argu) {
   return new Promise((resolve, reject) => {
    try {
      const nowTime = new Date().getTime(); 

      if(!leading && startTime === 0) {
        startTime = nowTime; 
      }

      const waitTime  = interval - (nowTime - startTime); 
      if(waitTime <= 0) {
        res = fn.apply(this, argu)
        resolve(res)

        startTime = nowTime
        timer = null; // 重置定时器
        return
      }

      // 判断是否需要执行尾部
      if(trailing && !timer) {
        timer = setTimeout(() => {
          res = fn.apply(this, argu)
          resolve(res)

          // startTime = nowTime; //不能是nowTime,否则会连续执行两次
          startTime = new Date().getTime()
          timer = null
        }, waitTime)
      }
    } catch (error) {
      reject(error)
    }
   })

  }
  //取消功能
  _throttle.cancel = function() {
    // if(timer) clearTimeout(timer)
    //或
    timer && clearTimeout(timer)

    // 重置状态,即回到第一次点击状态
    startTime = 0

    timer = null;
  }

  return _throttle;
}