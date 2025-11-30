//容易导致调用时出现回调地狱，所以使用Promise封装
function hyajax({
  url,
  method = "get",
  data = {},
  headers = {},
  success,
  failure 
= {}}) {
  //1,创建对象
  const xhr = new XMLHttpRequest();
  //2,监听数据
  xhr.onload = function () {
    //正常状态码是在200-300之间
    if (xhr.status >= 200 && xhr.status < 300) {
      success && success(xhr.response);
    } else {
      failure && failure({ status: xhr.status, message: xhr.statusText });
    }
  }

  //3,设置类型
  xhr.responseType = "json";

  //4,open方法
  xhr.open(method, url)

  //5,send方法
  xhr.send()
}


