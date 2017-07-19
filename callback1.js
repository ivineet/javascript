//callback usage

function greeting(name){
	console.log('Hi, '+ name);
}

function test(callback){
	var name='John';
	
	callback(name);
}

test(greeting);