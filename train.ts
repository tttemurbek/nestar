/**
 ZP-TASK:

shunday function yozing, u 2 ta array parametr qabul qilsin. Siz bu ikki arrayning qiymatlari o'xshash bo'lishini (ya'ni, ularning barcha elementlari bir xil bo'lishini) tekshirishingiz kerak.

MASALAN: 
areArraysEqual([1, 2, 3], [3, 1, 2]) // true
areArraysEqual([1, 2, 3], [3, 1, 2, 1]) // true
areArraysEqual([1, 2, 3], [4, 1, 2]) // false 
 
 */
function areArraysEqual(arr1: number[], arr2: number[]): boolean {
	const frequencyMap = (arr) => {
		const map = new Map();
		arr.forEach((num) => map.set(num, (map.get(num) || 0) + 1));
		return map;
	};

	const map1 = frequencyMap(arr1);
	const map2 = frequencyMap(arr2);

	for (let [key, value] of map1) {
		if ((map2.get(key) || 0) < value) {
			return false;
		}
	}
	return true;
}

console.log(areArraysEqual([1, 2, 3], [3, 2, 4, 3, 2, 1]));
