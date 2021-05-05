const toggler = () => {
	let string = document.getElementById("input").value;
	let word = string.split('');
	let length = string.length;
	const array1 = [];
	const a = [];

	for (i = 0; i <= length - 1; i++) {
		array1.push(word[i]);

	}

	for (j = 0; j <= length - 1; j++) {
		if (j % 2 != 0) { a[j] = array1[j].toUpperCase(); }
		else if (j % 2 == 0) {
			a[j] = array1[j].toLowerCase();
		}
	}
	let result = a.join('');

	document.getElementById("output").innerHTML = result;
}

function copy() {
	var copyText = document.querySelector("#output");
	copyText.select();
	document.execCommand("copy");
}

// document.querySelector("#copy").addEventListener("click", copy);