document.querySelector("#save").onclick = e => {
  alert("click");
};

document.querySelector("#run").onclick = runAndMeasure(e);

function runAndMeasure() {
  //performance.now
  let start = performance.now();

  // Code goes here

  let end = performance.now();
  return `The script took ${start - end} miliseconds.`;
}
