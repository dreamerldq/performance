
const ERROR_RUNTIME = 1
const ERROR_SCRIPT = 2
const ERROR_STYLE = 3
const ERROR_IMAGE = 4
const ERROR_AUDIO = 5
const ERROR_VIDEO = 6
const ERROR_PROMISE = 7
const LOAD_ERROR_TYPE = {
  SCRIPT: ERROR_SCRIPT,
  LINK: ERROR_STYLE,
  IMG: ERROR_IMAGE,
  AUDIO: ERROR_AUDIO,
  VIDEO: ERROR_VIDEO
};
window.addEventListener("error", event => {
  const errorTarget = event.target
  // 捕获的错误有两种情况，一种是script执行的错误，一种是资源加载的错误。通过errorTarget来判断
  if (errorTarget !== window && errorTarget.nodeName && LOAD_ERROR_TYPE[errorTarget.nodeName.toUpperCase()]) {
    // 资源加载类型错误
    handleError(formatLoadError(errorTarget))
  } else {
    // script执行错误
    handleError(formatRuntimerError(event.message, event.filename, event.lineno, event.colno, event.error))
  }
}, true);

window.addEventListener("unhandledrejection", function (event) {
  handleError({
    type: ERROR_PROMISE,
    desc: event.reason.message,
    position: 'position',
  });
}, true);

function formatRuntimerError(message, filename, lineno, colno) {
  return {
    type: ERROR_RUNTIME,
    desc: message,
    position: `${filename}:${lineno}:${colno}`,
  };
}

function handleError(errorLog) {
  console.log("error", errorLog);
  window.heavy.sendError(errorLog);
}
function formatLoadError(errorTarget) {
  return {
    type: LOAD_ERROR_TYPE[errorTarget.nodeName.toUpperCase()],
    desc: `${errorTarget.src} NOT FOUND`,
    position: 'position',
  };
}

window.addEventListener('load', function () {
  setTimeout(function () {
    const time = window.heavy.getTimes();
    console.log('------------------------------------');
    console.log("TIME", time);
    console.log('------------------------------------');
    window.heavy.sendTime(time)
    // var data = handleNumber({ ajaxs: pineapple.ajaxs, dpi: pineapple.dpi(), time: time, network: pineapple.network() });
    // console.log("data", data);
    // window.heavy.send(data);
  }, 500);
});



class HeavyShower {
  constructor(url){
    this.url = url
  }
  sendError(data) {

    const img = new Image(0, 0);
    const errorInfoStr = JSON.stringify(data)
    img.src = `${this.url}/pa.gif?error=${errorInfoStr}`
  }
  sendTime(data) {
    const img = new Image(0, 0);
    const timeInfoStr = JSON.stringify(data)
    img.src = `${this.url}/pa.gif?data=${timeInfoStr}`
  }
  getTimes(){
    const timing = performance.timing;
    if (timing === undefined) {
      return false;
    }
    
    var times = {};
    //存在timing对象
    if (timing) {
      // 白屏时间，也就是开始解析DOM耗时
      times.firstPaintTime = performance.getEntriesByType('paint')[0] ? performance.getEntriesByType('paint')[0].startTime : 0

     
      // 页面加载总时长
      times.loadTime = timing.loadEventEnd - timing.navigationStart;
 
       // 用户可操作时间，DOM Ready 时间
       
      times.domReadyTime = timing.domContentLoadedEventEnd - timing.fetchStart;

      // 重定向的时间
       
      times.redirectTime = timing.redirectEnd - timing.redirectStart;

    
      
       // DNS解析耗时
       
      times.lookupDomainTime = timing.domainLookupEnd - timing.domainLookupStart;

      
      // SSL连接耗时
      const sslTime = timing.secureConnectionStart;
      times.connectSslTime = sslTime > 0 ? (timing.connectEnd - sslTime) : 0;
     

      
       // TCP连接耗时
       
      times.connectTime = timing.connectEnd - timing.connectStart;
       // 内容加载完成的时间
      
      times.requestTime = timing.responseEnd - timing.requestStart;
      // 读取页面第一个字节的时间
      times.TTFB = timing.responseStart - timing.fetchStart;
    }

    return times;
  }
}
export default HeavyShower