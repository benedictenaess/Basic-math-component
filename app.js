const addButton = document.querySelector('.add-button');
const subtractButton = document.querySelector('.subtract-button');
const multiplyButton = document.querySelector('.multiply-button');
const divideButton = document.querySelector('.divide-button');

const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');

const output = document.querySelector('.display-number');

const add = () => {
	const inputNum1 = Number(input1.value);
	const inputNum2 = Number(input2.value);

	const newValue = inputNum1 + inputNum2;
	output.textContent = newValue
};

addButton.addEventListener('click', add);