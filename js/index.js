//VARIABLES
const container = document.querySelector("#codebox-container");
let theme = "base16-light";

//SYNCHRONOUS CODE
CodeMirror(container.children[0].children[0], {
  value: "for(var i = 1;i<=100000;i++){}",
  lineNumbers: true,
  autofocus: true,
  theme: theme
});
CodeMirror(container.children[1].children[0], {
  value: "for(var i = 1;i<=100000;i++){}",
  lineNumbers: true,
  theme: theme
});

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
  theme = "base16-dark";
}

function makeLight(e) {
  var children = container.children;
  for (let child of children) {
    var textEditor = child.children[0];
    var codeMirror = textEditor.children[0];
    codeMirror.classList.remove("cm-s-base16-dark");
    codeMirror.classList.add("cm-s-base16-light");
  }

  theme = "base16-light";
}

function addCode(e) {
  var codebox = document.createElement("div");
  codebox.classList.add("codebox");
  var codebox_text = document.createElement("div");
  codebox_text.classList.add("codebox-text");
  var output = document.createElement("span");
  output.classList.add("output");
  codebox.appendChild(codebox_text);
  codebox.appendChild(output);
  container.appendChild(codebox);

  CodeMirror(codebox_text, {
    value: "for(var i = 1;i<=100000;i++){}",
    lineNumbers: true,
    theme: theme
  });

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
