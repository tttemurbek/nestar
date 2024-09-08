/**
 * 
 * ZS-TASK:

Shunday function yozing, u parametridagi arrayni ichidagi 1 marta kelgan elemnetni qaytarsin.
MASALAN: singleNumber([4, 2, 1, 2, 1]) return 4
 */

function singleNumber(input: number[]): number {
	let result = 0;
	for (let num of input) {
		result ^= num;
	}
	return result;
}

console.log(singleNumber([4, 1, 2, 1, 2]));
