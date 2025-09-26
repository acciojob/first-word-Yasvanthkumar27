function firstWord(s) {
  // your code here
	if(!s) return "";
	let arr = s.trim().split(" ")
	return arr[0]
		

}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
