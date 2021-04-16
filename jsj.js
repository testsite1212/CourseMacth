document.getElementById('entry').onclick = function () {
	let login = document.getElementById('login').value;
	let out = document.getElementById('out');

	if (login === 'Укр мова') { 
		out.innerHTML = 'Вправа 678';
	}

	else if (login === 'Математика') { 
		out.innerHTML = 'Вправа ***';
	}

	else if (login === 'Англ мова') { 
		out.innerHTML = 'Вправа 632';
	}

	else if (login === '8-A') { 
		out.innerHTML = 'Not make';
	}
	
	else {
		out.innerHTML = 'Fail';
	}
}