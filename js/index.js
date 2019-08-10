var output = document.querySelector("#output");
document.querySelector("#save").onclick = e => {
  alert("click");
};

document.querySelector("#run").onclick = e => {
  document.querySelector("#output").innerHTML = runAndMeasure(e);
};

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

// function fib(n) {
//     let result;
//     if (n === 1 || n === 2) {
//       result = 1;
//     } else {
//       result = fib(n - 1) + fib(n - 2);
//     }
//     return result;
//   }

//   console.log(fib(35));
