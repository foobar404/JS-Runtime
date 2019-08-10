document.querySelector("#save").onclick = e => {
  alert("click");
};

document.querySelector("#run").onclick = runAndMeasure(e);

function runAndMeasure() {
  //performance.now
  // let start = performance.now()

  // // Code goes here

  // let end = performance.now();
  // return `The script took ${start - end} miliseconds.`

  console.time();
  for (i = 0; i < 100000; i++) {
    // some code
  }
  console.timeEnd();

  // Code goes here
}
