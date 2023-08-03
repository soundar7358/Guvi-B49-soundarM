document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const foodCheckboxes = document.querySelectorAll('input[name="food"]:checked');
    const food = Array.from(foodCheckboxes).map(checkbox => checkbox.value);
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
  
    if (food.length < 2) {
      alert("Please choose at least 2 food options.");
      return; // Abort the submission
    }
  
    const table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow(table.rows.length);
  
    const cells = [firstName, lastName, address, pincode, gender, food.join(", "), state, country];
  
    cells.forEach((value, index) => {
      const cell = newRow.insertCell(index);
      cell.textContent = value;
    });
  
    // Reset the form after appending values to the table
    document.getElementById("myForm").reset();
  });
  