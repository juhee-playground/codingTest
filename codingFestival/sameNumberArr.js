// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
let output = 0;

rl.on("line", function(line) {
	// 입력하기
	input.push(line);
	if(input.length === 2) {
		// console.log("입력 그만 받아~", input);
		 rl.close();
	}
}).on("close", function() {
	let numberListLen = 0;
	let collectCount = 0;
	let numberList = [];
	
	numberListLen = input[0].split(' ')[0];
	collectCount = Number(input[0].split(' ')[1]);
	
	numberList = input[1].split(' ');
	
	let count = 1;
	let i = 0;
	// 코드 시작
	// console.log(numberListLen);
	for(let i = 0; i < numberListLen; i++) {
		// start 와 end 가 
		// 0, 3
		// 2, 5
		// 4, 7
		let startIndex = (i === 0) ? i : i * (collectCount-1);
		let endIndex = (i === 0) ? collectCount : startIndex + collectCount;

		let sliceArr = numberList.slice(startIndex, endIndex);
		// console.log( sliceArr);
		// if(startIndex < numberListLen && endIndex > numberList) {
		if(sliceArr.length <= 1) {
			console.log(output);
			process.exit();
		}
		output++;
	}

});