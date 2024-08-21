/***
 ZL-TASK:

Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab” 
 
 */

function stringToKebab(str: string) {
	const changed =
		str &&
		str
			.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
			.map((x) => x.toLowerCase())
			.join('-');

	return changed;
}

console.log(stringToKebab('i love kebab'));
