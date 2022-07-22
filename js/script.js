const buttons = document.getElementsByClassName('btn');
const equation = document.getElementsByClassName('blue-text');

for (let item of buttons) {
	console.log(item.innerHTML);
}

for (let item of buttons) {
	item.addEventListener('click', () => {
		if (item.innerHTML[0] === '=') {
			let answer = eval(equation[0].innerHTML);
			if (answer) {
				equation[0].innerHTML = answer;
			} else {
				equation[0].innerHTML = 'Error';
			}
		} else if (item.innerHTML[0] === 'C') {
			equation[0].innerHTML = '';
		} else {
			let temp = document.createTextNode(item.innerHTML[0]);
			equation[0].appendChild(temp);
		}
	});
}
