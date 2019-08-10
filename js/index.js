var output = document.querySelector("#output");

document.querySelector("#save").onclick = e => {
  alert("click");
};
document.querySelector("#run").onclick = e => {
  output.innerHTML = runAndMeasure(e);
};

document.querySelector("#add").onclick = e => {};

function runAndMeasure() {
  var code = document.querySelector("#sandbox").value;

  //performance.now
  let start = performance.now();

  try {
    eval(code);
  } catch (err) {
    output.innerHTML = err;
  }

  let end = performance.now();
  return `The script took ${end - start} miliseconds.`;
}

//var newBlock document.createElement("textarea")
