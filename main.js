var elForm = document.querySelector('.form');
var elInput1 = document.querySelector('.input1');
var elInput2 = document.querySelector('.input2');
var elBtn1 = document.querySelector('.btn1');
var elBtn2 = document.querySelector('.btn2');
var elBtn3 = document.querySelector('.btn3');
var elOl = document.querySelector('.ol');
var massive = [];

elForm.addEventListener('submit', function(evt){
	evt.preventDefault();
})
elBtn1.addEventListener('click', function(){
	if (elInput1.value.trim() === '') {
		alert("To'ldiring");
		elInput1.value = '';
	} else if (massive.indexOf(elInput1.value) !== -1) {
		alert("Bu mahsulot ro'yxatda mavjud");
		elInput1.value = '';
	}
	else {
		massive.unshift(elInput1.value);
		elInput1.value = '';
		console.log(massive);

		elOl.textContent = '';
		massive.forEach(function(thing) {
			var li = document.createElement('li');
			li.textContent = thing;
			elOl.appendChild(li);
		});
	}
})

elBtn2.addEventListener('click', function(){
	if (elInput1.value.trim() === '') {
		alert("To'ldiring");
		elInput1.value = '';
	} else if (massive.indexOf(elInput1.value) !== -1) {
		alert("Bu mahsulot ro'yxatda mavjud");
		elInput1.value = '';
	}
	else {
		massive.push(elInput1.value);
		elInput1.value = '';
		console.log(massive)

		elOl.textContent = '';
		massive.forEach(function(thing) {
			var li = document.createElement('li');
			li.textContent = thing;
			elOl.appendChild(li);
		});
	}
})
elBtn3.addEventListener('click', function(){
	var num = Number(elInput2.value);

	if (num > massive.length -1 || num < 1) {
		alert("Bunday element mavjud emas");
	} else {
		massive.splice(num < -1, 1);

		 elInput1.value = '';
		console.log(massive);

		elOl.textContent = '';
		massive.forEach(function(thing) {
			var li = document.createElement('li');
			li.textContent = thing;
			elOl.appendChild(li);
		});
	}
})