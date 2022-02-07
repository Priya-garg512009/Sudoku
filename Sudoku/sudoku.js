/*easy level sudoku board*/
const n = null;
var easyLevelboard = [
  [n, n, n, 2, 6, n, 7, n, 1],
  [6, 8, n, n, 7, n, n, 9, n],
  [1, 9, n, n, n, 4, 5, n, n],
  [8, 2, n, 1, n, n, n, 4, n],
  [n, n, 4, 6, n, 2, 9, n, n],
  [n, 5, n, n, n, 3, n, 2, 8],
  [n, n, 9, 3, n, n, n, 7, 4],
  [n, 4, n, n, 5, n, n, 3, 6],
  [7, n, 3, n, 1, 8, n, n, n]
];
const easylevelbutton = document.getElementById("easybtn");
function easy() {
  var index = 0;
  for (var i = 0; i < easyLevelboard.length; ++i) {
    for (var j = 0; j < easyLevelboard.length; ++j) {
      document.getElementById(index).value = easyLevelboard[i][j];
      if (easyLevelboard[i][j] != null) {
        document.getElementById(index).style.backgroundColor =
          "rgb(217, 218, 208)";
        document.getElementById(index).disabled = true;
      }
      ++index;
    }
  }
  document.getElementById("hardbtn").disabled = true;
  document.getElementById("mediumbtn").disabled = true;
}
/* invoke the easy button */
easylevelbutton.onclick = easy;

/* medium level sudoku board*/

var mediumLevelboard = [
  [9, n, 2, n, 6, n, 5, n, 7],
  [n, n, n, n, n, n, n, n, n],
  [3, 8, n, n, n, 5, n, 6, 4],
  [n, n, 5, n, 7, n, n, n, n],
  [1, n, n, n, 3, n, n, n, 8],
  [n, n, n, n, 2, n, 9, n, n],
  [7, 9, n, 3, n, n, n, 8, 6],
  [n, n, n, n, n, n, n, n, n],
  [8, n, 4, n, 1, n, 2, n, 3]
];
const mediumlevelbutton = document.getElementById("mediumbtn");
function medium() {
  var index = 0;
  for (var i = 0; i < mediumLevelboard.length; ++i) {
    for (var j = 0; j < mediumLevelboard.length; ++j) {
      document.getElementById(index).value = mediumLevelboard[i][j];
      if (mediumLevelboard[i][j] != null) {
        document.getElementById(index).style.backgroundColor =
          "rgb(217, 218, 208)";
        document.getElementById(index).disabled = true;
      }
      ++index;
    }
  }
  document.getElementById("hardbtn").disabled = true;
  document.getElementById("easybtn").disabled = true;
}
/* invoke the medium button*/
mediumlevelbutton.onclick = medium;

/*hard level sudoku board*/

var hardLevelboard = [
  [5, 7, n, n, n, 2, 9, n, n],
  [n, 6, 4, n, n, n, n, 8, n],
  [n, n, n, n, n, n, n, n, 1],
  [8, n, n, n, n, n, 6, 9, n],
  [n, n, n, n, n, n, n, n, n],
  [n, n, n, 8, 3, n, 1, n, 5],
  [n, 4, 1, 9, n, 5, n, n, n],
  [6, 3, 9, n, n, n, n, 7, n],
  [n, n, n, n, 2, 6, n, n, n]
];
const hardlevelbutton = document.getElementById("hardbtn");
function hard() {
  var index = 0;
  for (var i = 0; i < hardLevelboard.length; ++i) {
    for (var j = 0; j < hardLevelboard.length; ++j) {
      document.getElementById(index).value = hardLevelboard[i][j];
      if (hardLevelboard[i][j] != null) {
        document.getElementById(index).style.backgroundColor =
          "rgb(217, 218, 208)";
        document.getElementById(index).disabled = true;
      }

      ++index;
    }
  }
  document.getElementById("easybtn").disabled = true;
  document.getElementById("mediumbtn").disabled = true;
}
/* invoke the hard button*/
hardlevelbutton.onclick = hard;

/* check validation of sudoku*/
/* check the row first */

function validateRows() {
  for (var i = 0; i <= 80; i += 9) {
    var arr = [];
    var index = 0;
    for (var j = i; j < i + 9; ++j) {
      arr[index] = document.getElementById(j).value;
      index++;
    }
    var a = "";
    arr = arr.sort();
    for (var k = 0; k < arr.length - 1; ++k) {
      if (arr[k] == arr[k + 1]) {
        return "oops";
      } else {
        a = "nice";
      }
    }
  }
  return a;
}

/* check the col next */

function validateCols() {
  for (var i = 0; i < 9; i++) {
    var arr = [];
    var index = 0;
    for (var j = i; j <= i + 72; j += 9) {
      arr[index] = document.getElementById(j).value;
      index++;
    }
    var a = "";
    arr = arr.sort();
    for (var k = 0; k < arr.length - 1; ++k) {
      if (arr[k] == arr[k + 1]) {
        return "oops!";
      } else {
        a = "nice!";
      }
    }
  }
  return a;
}

/* finally check the boxes*/

function validateBoxes() {
  var zi = 0;
  for (var i = 0; i < 81; i += 3) {
    zi++;
    var arr = [];
    var index = 0;
    var z = 0;
    for (var j = i; j < i + 21; ++j) {
      ++z;
      arr[index] = document.getElementById(j).value;
      index++;
      if (z % 3 == 0) {
        j = j + 6;
      }
    }
    if (zi % 3 == 0) {
      i = i + 18;
    }
    var a = "";
    arr = arr.sort();
    for (var k = 0; k < arr.length - 1; ++k) {
      if (arr[k] == arr[k + 1]) {
        return "next time";
      } else {
        a = "good job";
      }
    }
  }
  return a;
}

/* validation function */

function validation() {
  if (
    validateBoxes() == "good job" &&
    validateCols() == "nice!" &&
    validateRows() == "nice"
  ) {
    return "solve";
  } else {
    return "not solve";
  }
}

/* invoke the validate button*/

const validateButton = document.getElementById("validbtn");
validateButton.onclick = () => {
  if (validation() == "solved") {
    alert("Hurre! you killed it");
  } else {
    alert("please again solve the sudoku. Better luck next time!");
  }
};

document.querySelector(".grid-table").addEventListener("click", (e) => {
  var selectedId = e.target.id;

  var colNo = selectedId % 9;
  var rowNo = Math.floor(selectedId / 9);
  white();
  highlightRow(selectedId, colNo);
  highlightColumn(selectedId, rowNo);
  highlightBox(selectedId);
  document.getElementById(selectedId).style.backgroundColor="rgb(67, 164, 243)";
});

/*highlighting all columns*/

function highlightColumn(selectedId, rowNo) {
  var colStart = selectedId - rowNo * 9;
  for (var i = colStart; i < colStart + 73; i += 9) {
    document.getElementById(i).style.backgroundColor = "rgb(136, 197, 246)";
  }
}

/*highlighting all rows*/

function highlightRow(selectedId, colNo) {
  var rowStart = selectedId - colNo;
  for (var i = rowStart; i < rowStart + 9; ++i) {
    document.getElementById(i).style.backgroundColor = "rgb(136, 197, 246)";
  }
}

/* keeping the cells white until selected*/

function white() {
  for (var i = 0; i < 81; ++i) {
    var a = document.getElementById(i).style.backgroundColor;
    var b = document.getElementById(i).disabled;
    if (b) {
      document.getElementById(i).style.backgroundColor = "rgb(217, 218, 208)";
    } else if (document.getElementById(i).value != "") {
      document.getElementById(i).style.backgroundColor = "rgb(20, 145, 246)";
    } else {
      document.getElementById(i).style.backgroundColor = "white";
    }
  }
}

function highlightBox(clickedId) {
  var boxRowStart = clickedId - (clickedId % 3);
  var boxColStart = boxRowStart - (Math.floor(clickedId / 9) % 3) * 9;
  var j = 0;
  for (var i = boxColStart; i < boxColStart + 21; ++i) {
    ++j;
    document.getElementById(i).style.backgroundColor = "rgb(136, 197, 246)";
    if (j % 3 == 0) {
      i = i + 6;
    }
  }
}