function hyajax({
  url,
  method = "get",
  data = {},
  headers = {},
  timeout = 1000
  //不需要success和failure，因为Promise封装了
= {}}) {
  return new Promise((resolve, reject) => {
    //1,创建对象
    const xhr = new XMLHttpRequest();
    //2,监听数据
    xhr.onload = function () {
      //正常状态码是在200-300之间
      if (xhr.status >= 200 && xhr.status < 300) {
       resolve(xhr.response);
      } else {
        reject({ status: xhr.status, message: xhr.statusText });
      }
    }
  


    //3,设置类型
    // 这里是响应后端返回的数据类型，这里用的是json格式,区别下面
    xhr.responseType = "json";
    xhr.timeout = timeout;

    //4,open方法
    if( method.toLowerCase() === "get"){
      const params = []
      for (const key in data) {
        params.push(`${key}=${data[key]}`)
      }
      url = url + "?" + params.join("&")
      xhr.open(method, url);
      xhr.send();
    } else {
      xhr.open(method, url)
      // 设置请求头，告诉后端我们发送的是json格式的数据
      xhr.setRequestHeader("Content-type", "application/json");

      xhr.send(JSON.stringify(data));
    }

    //为了调用者可以用xhr里面的方法如abort()，所以这里返回xhr对象
    return xhr;
  })
}
