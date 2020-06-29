const handleError = errObj => {
  console.log("------------------------------------");
  console.log("AAA", errObj);
  console.log("------------------------------------");
};
window.onerror = function(message, source, lineno, colno, error) {
  const errObj = {
    message,
    source,
    lineno,
    colno,
    error,
    url: window.location.href
  };
  handleError(errObj);
};

window.addEventListener("error", event => {
  console.log("------------------------------------");
  console.log("ERROR_EVENT", event);
  console.log("------------------------------------");
});

window.addEventListener("unhandledrejection", function(event) {
  console.log(event);
  console.warn(
    "WARNING: Unhandled promise rejection. Shame on you! Reason: " +
      event.reason
  );
});
