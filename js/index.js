//VARIABLES
const container = document.querySelector("#codebox-container");

// EVENT LISTENERS
// document.querySelector("#save").onclick = e => alert("saving");
document.querySelector("#run").onclick = e => runAndMeasure(e);
document.querySelector("#add").onclick = e => addCode(e);

CodeMirror(container.children[0].children[0],{
  value:"for(var i = 1;i<=100000;i++){}",
  lineNumbers: true,
  autofocus:true
});
CodeMirror(container.children[1].children[0],{
  value:"for(var i = 1;i<=100000;i++){}",
  lineNumbers: true
});



//FUNCTIONS
function addCode(e) {
  container.innerHTML += `<div class="codebox">
    <div contenteditable="true" class="codebox-text" placeholder="Enter your code here..."></div>
    <span class="output"></span>
  </div>`;

  CodeMirror(container.lastChild.children[0],{
    value:"for(var i = 1;i<=100000;i++){}",
    lineNumbers: true
  });
}

function runAndMeasure() {
  let elms = document.querySelectorAll(".codebox");
  elms.forEach(e => {
    console.log(e.children)
    let code = e.children[0].innerText; //code
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

// TEST CODE
/*
 for(var i = 1;i<=100000;i++){}


  for(var i = 1;i<=900000;i++){
 }
*/
