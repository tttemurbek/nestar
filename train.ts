/**
 ZQ-TASK:

Shunday function yozing, u parametridagi array ichida 2 marta qaytarilgan sonlarni alohida araryda qaytarsin.
MASALAN: findDuplicates([1,2,3,4,5,4,3,4]) return [3, 4] 

 */

import { find } from 'rxjs';

function findDuplicates(arr: number[]): number[] {
	const newArr: { [key: number]: number } = {};
	const duplicates: number[] = [];

	for (const num of arr) {
		if (newArr[num]) {
			newArr[num]++;
		} else {
			newArr[num] = 1;
		}
	}

	for (const num in newArr) {
		if (newArr[num] > 1) {
			duplicates.push(Number(num));
		}
	}

	return duplicates;
}

console.log(findDuplicates([1, 2, 3, 4, 5, 6, 67, 7, 5]));
