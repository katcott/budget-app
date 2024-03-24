function addField (argument) {
    var myTable = document.getElementById("tblExpenses1");
    var currentIndex = myTable.rows.length;
    var currentRow = myTable.insertRow(-1);

    var descBox = document.createElement("input");
    descBox.setAttribute("name", "td1Desc" + currentIndex);

    var budgetedBox = document.createElement("input");
    budgetedBox.setAttribute("name", "td1BC" + currentIndex);

    var actualBox = document.createElement("input");
    actualBox.setAttribute("name", "td1AC" + currentIndex);

    var addRowBox = document.createElement("input");
    addRowBox.setAttribute("type", "button");
    addRowBox.setAttribute("value", "Add");
    addRowBox.setAttribute("onclick", "addField();");
    addRowBox.setAttribute("class", "button");

    var currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(descBox);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(budgetedBox);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(actualBox);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(addRowBox);
}