const COMMON_URL = 'http://localhost:8888'
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
    desc: event.reason,
    stack: 'no stack'
  });
}, true);

function formatRuntimerError(message, filename, lineno, colno, error) {
  return {
    type: ERROR_RUNTIME,
    desc: message + ' at ' + filename + ':' + lineno + ':' + colno,
    stack: error && error.stack ? error.stack.replace(/\n/gi, "") : 'no stack' // IE <9, has no error stack
  };
}

function handleError(errorLog) {
  console.log("error",errorLog);
  window.heavy.sendError(errorLog);
}
function formatLoadError(errorTarget) {
  return {
    type: LOAD_ERROR_TYPE[errorTarget.nodeName.toUpperCase()],
    desc: errorTarget.baseURI + '@' + (errorTarget.src || errorTarget.href),
    stack: 'no stack'
  };
}

class HeavyShower{
  sendError(data){
    var ts = new Date().getTime().toString();
    var img = new Image(0, 0);
    const errorInfoStr = JSON.stringify(data)
    img.src = `${COMMON_URL}?error=${errorInfoStr}&ts=${ts}`
  }
}
window.heavy = new HeavyShower()