var name;
var surname;
var schoolName;
var nVotes;

/*colori*/
const GRIGIO = "rgb(127, 127, 127)";
const BIANCO = "rgb(255, 255, 255)";
const ROSSO = "rgb(255, 0, 0)";
const BLU = "rgb(0, 0, 255)";

function change() {
  document.getElementById("compile").remove();
  document.getElementById("sub").classList.toggle("hide");
}

function changeSave() {
  save();
  document.getElementById("compile").remove();
  document.getElementById("sub").classList.toggle("hide");
  table();
}

function save() {
  name = document.getElementById("na").value;
  console.log("nome: " + name);
  surname = document.getElementById("sur").value;
  console.log("surname: " + surname);
  schoolName = document.getElementById("scho").value;
  console.log("school-name: " + schoolName);
  nVotes = document.getElementById("vote").value;
  console.log("number-votes: " + nVotes);
}

function table() {
  var refDiv = document.getElementById("sub");
  var tabella = document.createElement("table");
  var riga, cella;
  refDiv.appendChild(tabella);
  tabella.style.margin = "20px auto";
  tabella.style.borderSpacing = "0px";
  for (var i = 0; i < nVotes; i++) {
    riga = document.createElement("tr");
    tabella.appendChild(riga);
    riga.style.height = "40px";
    for (var j = 0; j < 2; j++) {
      cella = document.createElement("td");
      cella.style.width = "120px";
      riga.appendChild(cella);
    }
  }
}
