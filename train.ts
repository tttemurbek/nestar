/**
ZR-TASK:

Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
MASALAN: countNumberAndLetters(“string152%\¥”) return {number:3, letter:6}
 */

function countNumberAndLetters(smth: string): any {
	let countNum = 0;
	let countStr = 0;
	let result = {
		number: countNum,
		letter: countStr,
	};

	for (let i = 0; i < smth.length; i++) {
		if (!isNaN(Number(smth[i])) && smth[i] !== ' ') {
			countNum++;
		}

		if (/[a-zA-Z]/.test(smth[i])) {
			countStr++;
		}
	}

	result.number = countNum;
	result.letter = countStr;

	return result;
}

console.log(countNumberAndLetters('string152%¥'));
