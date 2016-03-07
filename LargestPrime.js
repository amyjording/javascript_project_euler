var verifyPrime = function(number) {
	if (number % 2 === 0) {
		return false;
	}

	var max = Math.sqrt(number);
	for (i=3; i<=max; i+=2) {
			if (number % i === 0) {
				return false;
			}
	}

	return true;
};

var n = 600851475143;
var results = [];

for (i=2; i<Math.floor(Math.sqrt(n)); i++) {
	if (n % i === 0) {
		results.push(i);
	}
}

var prime = [];

for (j=0; j<results.length, j++) {
	if (isPrime(results[j]) === true) {
		prime.push(results[j]);
	}
}

var largestPrime = Math.max.apply(0, prime);
console.log(largestPrime);