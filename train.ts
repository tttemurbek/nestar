/**
 ZK-TASK:

Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
MASALAN: printNumbers() 
 
 */

function printNumbers(): any {
	let number = 1;
	const interval = setInterval(() => {
		console.log(number);
		number++;

		if (number > 5) {
			clearInterval(interval);
		}
	}, 1000);

	setTimeout(() => {
		clearInterval(interval);
		console.log('Finished');
	}, 6000);
}

printNumbers();
