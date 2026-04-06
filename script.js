function insert_Row() {
    //Write your code here
	let table = document.getElementById("sampleTable");
	// Insert row at the top (index 0)
    const newRow = table.insertRow(0);

    // Create cells
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Set values
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";

	// table.innerHTML = `
	// 	<tr>
	// 	<td>New Cell1</td> 
	// 	<td>New Cell2</td>
	// 	</tr>
	// ` + table.innerHTML;
  
}
