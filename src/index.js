import "./styles.css";

let Turn = 0;
let width = 0;
let id;
var element = document.getElementById("insideBar");

const col = document.querySelectorAll(".col");

function populateCell(cell) {
  if (Turn % 2 === 0) {
    if (cell.innerHTML === "") {
      cell.innerHTML = "X";
      cell.style.backgroundColor = "rgb(124, 252, 0)";
      Turn++;
    } else {
      alert("Pick other cell");
    }
  } else {
    if (cell.innerHTML === "") {
      cell.innerHTML = "O";
      cell.style.backgroundColor = "rgb(250, 128, 114)";
      Turn++;
    } else {
      alert("Pick other cell");
    }
  }
}

function click() {
  for (var x = 0; x < col.length; x++) {
    col[x].addEventListener("click", function () {
      populateCell(this, col[x]);
      barClear();
      barMovement();
    });
    if (Turn > 8) {
      checkResult();
    }
  }
}

click();

function clearTable() {
  document.getElementById("taulukko").innerHTML = "";
}

function checkResult() {
  let roundWin = false;
  let table = document.getElementById("board");
  for (let i = 0; i < 5; i++) {
    let a = table.rows[i].cells[0].innerHTML;

    let b = table.rows[i].cells[1].innerHTML;

    let c = table.rows[i].cells[2].innerHTML;

    let d = table.rows[i].cells[3].innerHTML;

    let e = table.rows[i].cells[4].innerHTML;

    if (a === "" || b === "" || c === "" || d === "" || e === "") {
      continue;
    }
    if (a === b && b === c && c === d && d === e) {
      roundWin = true;

      break;
    }
  }
  for (let i = 0; i < 5; i++) {
    let a = table.rows[0].cells[i].innerHTML;

    let b = table.rows[1].cells[i].innerHTML;

    let c = table.rows[2].cells[i].innerHTML;

    let d = table.rows[3].cells[i].innerHTML;

    let e = table.rows[4].cells[i].innerHTML;

    if (a === "" || b === "" || c === "" || d === "" || e === "") {
      continue;
    }
    if (a === b && b === c && c === d && d === e) {
      roundWin = true;

      break;
    }
  }
  let a = table.rows[0].cells[0].innerHTML;

  let b = table.rows[1].cells[1].innerHTML;

  let c = table.rows[2].cells[2].innerHTML;

  let d = table.rows[3].cells[3].innerHTML;

  let e = table.rows[4].cells[4].innerHTML;

  if (a === b && b === c && c === d && d === e) {
    roundWin = true;
  }
  let f = table.rows[0].cells[4].innerHTML;

  let g = table.rows[1].cells[3].innerHTML;

  let h = table.rows[2].cells[2].innerHTML;

  let i = table.rows[3].cells[1].innerHTML;

  let j = table.rows[4].cells[0].innerHTML;

  if (f === g && g === h && h === i && i === j) {
    roundWin = true;
  }

  if (roundWin === true) {
    if (Turn % 2 === 0) {
      Turn = 0;
      alert("Player 2 won!");
      clearTable();
    } else {
      Turn = 0;
      alert("Player 1 won!");
      clearTable();
    }
    return;
  }
}

function barMovement() {
  id = setInterval(frame, 100);
  function frame() {
    if (width >= 100) {
      Turn++;
      barClear();
    } else {
      width++;
      element.style.width = width + "%";
    }
  }
}

function barClear() {
  width = 0;
  clearInterval(id);
  element.style.width = width + "%";
}
