function parseLyric(orignalLyric) {
    const lyricsArray = orignalLyric.split('\n')
    const rep = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/i
    const newLyric = []
    // console.log(lyrics)
    for (let lyric of lyricsArray) {
      // 转化为秒为单位的如[01:02.578] -> 625s 方便逻辑处理
      const result = lyric.match(rep)
      if(!result) continue
      const minuteTime = result[1]*60*1000
      const secondTime = result[2]*1000
      const millisecondTime = result[3].length === 3? result[3]*1 : result[3]*10
      const time = minuteTime + secondTime + millisecondTime
      // console.log(time)

      // 获取内容
      const content = lyric.replace(rep, '').trim()
      // console.log(content)

      // 等价于newLyric.push({time: time, content: content});
      newLyric.push({time, content})
    }
    return newLyric

}