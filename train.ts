/*
  
 ZM-TASK:

Shunday function yozing, u function parametrga berilgan raqamlarni orqasiga ogirib qaytarsin.
MASALAN: reverseInteger(123456789) return 987654321

@MITASK
 */

function reverseInteger(num: number) {
	const changed = num.toString().split('').reverse().join('');
	const changed2 = parseInt(changed);

	return changed2;
}

console.log(reverseInteger(123456789));
