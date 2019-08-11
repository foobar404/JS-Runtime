//VARIABLES
const container = document.querySelector("#codebox-container");
var textEditors = [];

//SYNCHRONOUS CODE
var editor1 = CodeMirror(container.children[0].children[0], {
  value: "for(var i = 1;i<=100000;i++){}",
  lineNumbers: true,
  autofocus: true,
  theme: "base16-light"
});
var editor2 = CodeMirror(container.children[1].children[0], {
  value: "for(var i = 1;i<=100000;i++){}",
  lineNumbers: true,
  theme: "base16-light"
});

textEditors.push(editor1, editor2);

// EVENT LISTENERS
// document.querySelector("#save").onclick = e => alert("saving");
document.querySelector("#run").onclick = e => runAndMeasure(e);
document.querySelector("#add").onclick = e => addCode(e);
document.querySelector("#dark").onclick = e => makeDark(e);
document.querySelector("#light").onclick = e => makeLight(e);

//FUNCTIONS
function makeDark(e) {
  var children = container.children;
  for (let child of children) {
    var textEditor = child.children[0];
    var codeMirror = textEditor.children[0];
    codeMirror.classList.remove("cm-s-base16-light");
    codeMirror.classList.add("cm-s-base16-dark");
  }
}

function makeLight(e) {
  var children = container.children;
  for (let child of children) {
    var textEditor = child.children[0];
    var codeMirror = textEditor.children[0];
    codeMirror.classList.remove("cm-s-base16-dark");
    codeMirror.classList.add("cm-s-base16-light");
  }
}

function addCode(e) {
  container.innerHTML += `<div class="codebox">
    <div contenteditable="true" class="codebox-text" placeholder="Enter your code here..."></div>
    <span class="output"></span>
  </div>`;

  var editor = CodeMirror(container.lastChild.children[0], {
    value: "for(var i = 1;i<=100000;i++){}",
    lineNumbers: true,
    theme: "base16-light"
  });

  textEditors.push(editor);

  window.scrollTo(0, document.body.scrollHeight);
}

async function runAndMeasure() {
  let elms = document.querySelectorAll(".codebox");

  elms.forEach(e => {
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
