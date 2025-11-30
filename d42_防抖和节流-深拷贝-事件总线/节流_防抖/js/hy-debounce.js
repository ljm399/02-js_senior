function hydebounce(fn, delay, immediate = false) {
  let timer = null
  let isInvoke = false
  
  //不能用箭头函数,否则this执行hydebounce的this即window
  const _debounce = function (...argu) {
    //添加promise,不用删除什么,找个地方加层嵌套即可,然后返回值用resolve和reject包裹起来即可
    return new Promise((resolve, reject) => {
      try {
         //如果上次timer未在delay时间内执行,则清除上次的timer
         if(timer) clearTimeout(timer)
        let res = null
        //立刻执行功能
        if (immediate && !isInvoke) {

          //获取返回值
          res = fn.apply(this, ...argu)
          resolve(res)

          isInvoke = true
          return
        }

        timer = setTimeout(() => {
          res = fn.apply(this, argu)
          resolve(res)
          timer = null
        }, delay)
      } catch (error) {
        reject(error)
      }
    })

   
  }

  //取消功能
  _debounce.cancel = function () {
    clearTimeout(timer)
  }

  return _debounce
}