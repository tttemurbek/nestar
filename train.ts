/**
 ZT-TASK:

Shunday function yozing, u parametridagi string ichida 1 martadan ortiq qaytarilmagan birinchi harf indeksini qaytarsin.
MASALAN: firstUniqueCharIndex(“stamp”) return 0

@MITASK
 */

function firstUniqueCharIndex(s: string): number {
	const charCount: { [key: string]: number } = {};

	for (let char of s) {
		charCount[char] = (charCount[char] || 0) + 1;
	}

	for (let i = 0; i < s.length; i++) {
		if (charCount[s[i]] === 1) {
			return i;
		}
	}

	return -1;
}

console.log(firstUniqueCharIndex('stampsta'));
