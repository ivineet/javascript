var sentence = "the quick brown fox jumped over the lazy dog";

var arr = sentence.split(" ");

function empty(str1){
	if(str1 === "" || str1 === " " || str1 === null || str1 === undefined){
		return true;
	}
	return false;
}

var strrev = function(str1){
	if(empty(str1))
		return "empty string";

	var t = str1.split("");
	var length = Math.floor(t.length/2);
	var j = t.length-1;

	for(var i = 0; i < length; ++i){
		temp = t[i];
		t[i] = t[j];
		t[j] = temp;
		--j;
	}
	
	return t.toString();	
}

console.log(arr);

for(var i=0; i < arr.length; i++){
	console.log(strrev(arr[i].toString()));
}

//console.log(arr.toString().reverse());