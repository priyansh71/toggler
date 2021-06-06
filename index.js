const toggler = () => {
	let string = document.getElementById("input").value;
	let word = string.split('');
	let length = string.length;
	const array1 = [];
	const a = [];

	for (b = 0; b <= length - 1; b++) {
		if (word[b] == " ") {
			word[b + 1] = " ";
			length++;
		}
	}
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

// function toggle(){
// 	document.getElementById("output").style.touchAction = "none";
// }

function copy() {
	var copyText = document.querySelector("#output");
	copyText.select();
	document.execCommand("copy");
	let a = document.getElementById("output").value;
	if (a == null || a == " " || a.length == 0) {
	
		document.getElementById("toggle").innerText = "Please enter valid text!";
		document.getElementById("toggle").style.color = "#110000";
	}else {
		document.getElementById("toggle").innerText = "Copying successful!";
	}
}