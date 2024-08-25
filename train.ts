/**
 ZN-TASK:

Shunday function yozing, uni array va number parametri bolsin. Ikkinchi parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4]
 */

function rotateArray(arr: number[], index: number): number[] {
	if (index >= arr.length) {
		return arr;
	}

	const firstPart = arr.slice(0, index);
	const secondPart = arr.slice(index);

	return [...secondPart, ...firstPart];
}

const result = rotateArray([1, 2, 3, 4, 5, 6], 4);
console.log(result); // Output: [5, 6, 1, 2, 3, 4]
