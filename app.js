const addButton = document.querySelector('.add-button');
const subtractButton = document.querySelector('.subtract-button');
const multiplyButton = document.querySelector('.multiply-button');
const divideButton = document.querySelector('.divide-button');

const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');

const output = document.querySelector('.display-number');



const add = () => {
	const newValue = Number(input1.value) + Number(input2.value);
	output.textContent = newValue
};

addButton.addEventListener('click', add);

const subtract = () => {
	const newValue = Number(input1.value) - Number(input2.value);
	output.textContent = newValue
}

subtractButton.addEventListener('click', subtract);

const multiply = () => {
	const newValue = Number(input1.value) * Number(input2.value);
	output.textContent = newValue
}

multiplyButton.addEventListener('click', multiply);