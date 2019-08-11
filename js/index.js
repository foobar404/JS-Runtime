var output = document.querySelector(".output");

document.querySelector("#save").onclick = e => {
  alert("this actually doesn't save shit yet");
};
document.querySelector("#run").onclick = e => runAndMeasure(e);

document.querySelector("#add").onclick = e => addCode(e);

function addCode(e) {
  var container = document.querySelector("#codebox-container");

  container.innerHTML += `<div class="codebox">
    <textarea class="codebox-text" placeholder="Enter your code here..."></textarea>
    <span class="output"></span>
  </div>`;
}

//connection
function runAndMeasure() {
  let elms = document.querySelectorAll(".codebox");
  elms.forEach(e => {
    let code = e.children[0].value; //textarea
    let out = e.children[1]; //span output

    //performance.now
    let start = performance.now();

    try {
      eval(code);
    } catch (err) {
      out.innerHTML = err;
    }

    let end = performance.now();
    let rtn = Math.floor(end - start);
    out.textContent = `The script took ${rtn} miliseconds.`;
  });
}

// for(var i = 1;i<=100000;i++){
// }
