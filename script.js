const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let priceElement=document.querySelectorAll(".price")
	let total=0;

	priceElement.forEach(function(priceElement){
		total+=parseFloat(priceElement.textContent);
	})

	const existingTotalRow = document.querySelector('#total-row');
    if (existingTotalRow) {
        existingTotalRow.remove();
    }
	const newRow = document.createElement('tr');
    newRow.setAttribute('id', 'total-row');

	const totalLabel = document.createElement('td');
    totalLabel.textContent = 'Total = ';
    const totalPriceCell = document.createElement('td');
    totalPriceCell.textContent = total;
	newRow.appendChild(totalLabel);
    newRow.appendChild(totalPriceCell);
    const table = document.querySelector('table');
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

