var fn = [0, 1, 2]
sum = 0;

while (fn[2] < 4000000) {

	if (fn[2] % 2 === 0) {
		sum += fn[2];
		fn[2] = fn[0] + fn[1];
		fn[0] = fn[1]
		fn[1] = fn[2]
	}
}

console.log(sum)