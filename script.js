
function submitData() {
    let username = document.getElementById("usernameInput").value.trim();
    if (username === "") {
        alert("Please enter a name!");
        return;
    }

    // Display username in h1
    document.getElementById("usernameDisplay").innerText = `Hello, ${username}!`;

    // Show the table
    document.getElementById("userTable").style.display = "table";

    // Insert username into table
    let tableBody = document.querySelector("#userTable tbody");
    let rowCount = tableBody.rows.length; // Get current row count
    let row = document.createElement("tr");

    let sNoCell = document.createElement("td");
    sNoCell.innerText = rowCount + 1;
    row.appendChild(sNoCell);

    let nameCell = document.createElement("td");
    nameCell.innerText = username;
    row.appendChild(nameCell);

    tableBody.appendChild(row);

    // Clear input field
    document.getElementById("usernameInput").value = "";
}