/**
 * 
 * ZU-TASK:

Shunday function yozing, u parametridagi array ichida takrorlanmagan raqamlar yig'indisini qaytarsin.
MASALAN: sumOfUnique([1,2,3,2]) return 4

@MITASK
 */

function sumOfUnique(input: number[]): number {
	const numCount: { [key: number]: number } = {};

	for (let i = 0; i < input.length; i++) {
		const num = input[i];
		numCount[num] = (numCount[num] || 0) + 1;
	}

	let sum = 0;
	for (let num in numCount) {
		if (numCount[num] === 1) {
			sum += parseInt(num);
		}
	}

	return sum;
}

console.log(sumOfUnique([1, 2, 3, 2]));
