/**
 
 ZJ-TASK:

Shunday function yozing, u berilgan arrayni ichidagi numberlarni qiymatini hisoblab qaytarsin.
MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8
 */

function reduceNestedArray(arr: any[]): number {
	return arr.reduce((sum, value) => {
		if (Array.isArray(value)) {
			return sum + reduceNestedArray(value);
		} else if (typeof value === 'number') {
			return sum + value;
		} else {
			return sum;
		}
	}, 0);
}

console.log(reduceNestedArray([2, [3, 1, [5]]]));
