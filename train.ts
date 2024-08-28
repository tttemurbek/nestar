/**
 ZO-TASK:

Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin. Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true 
 
 */

import { emitWarning } from 'process';

function areParenthesesBalanced(smth: string) {
	let count1 = 0;
	let count2 = 0;

	for (let i = 0; i < smth.length; i++) {
		if (smth[i] === '(') {
			count1++;
		}
	}

	for (let i = 0; i < smth.length; i++) {
		if (smth[i] === ')') {
			count2++;
		}
	}

	if (count1 === count2) {
		return true;
	} else return false;
}

console.log(areParenthesesBalanced('string()ichida(qavslar)soni()balansda'));
