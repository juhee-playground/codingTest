// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let testCount = 0;
let input = [];
let output = [];

rl.on("line", function(line) {
	// 입력하기
	if(testCount === 0) {
		testCount = line;
	}else {
		input.push(line);
	}
	
	// console.log(testCount, input)
	
	if(input.length === testCount) {
		// console.log('그만');
		 rl.close();
	}
}).on("close", function() {
	for(let i = 0; i < input.length; i++) {
		let seasonCoupon = Number(input[i].split(' ')[0]);
		let normalCoupon = Number(input[i].split(' ')[1]);
		let totalCoupon = seasonCoupon + normalCoupon;
		
		let availableSeasonCoupon = ~~(seasonCoupon/5);
		let availableCoupon = ~~(totalCoupon/12)
		// console.log(seasonCoupon, totalCoupon);
		if(seasonCoupon < 5) {
			output.push(0);
		}else {
			if(availableSeasonCoupon >= availableCoupon) {
				output.push(availableCoupon)
			}else if(availableSeasonCoupon < availableCoupon) {
				output.push(availableSeasonCoupon);
			}
		}
	}
	
	for(let i = 0; i < output.length; i++) {
		console.log(output[i]);
	}
	process.exit();
});