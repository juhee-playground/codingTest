// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ 
		input: process.stdin,
	});
	
	let numberOfAttendees = 0;
	let collectTimeList = [];
	let collectTime = "";
	
	function newTimeToNumber(timeArr) {
		let newTimeArr = [];
		timeArr.forEach(time => {
			let newTimeNumber = time.split(":")[0] + time.split(":")[1];
			newTimeArr.push(Number(newTimeNumber));
		});
		return newTimeArr;
	}
	
	function formatTime(time) {
		let timeString = "";
		timeString = time < 1000 ? "0" + String(time): String(time);
		return timeString.substring(0,2) + ":" + timeString.substring(2,5);
	}
	
	for await (const line of rl) {
		if(numberOfAttendees === 0) {
			numberOfAttendees = Number(line);
		}else {
			collectTimeList.push(line);
		}
		
		if(collectTimeList.length === numberOfAttendees) {

			let startTimeList = [];
			let endTimeList = [];
			// 함수...
			for(let i = 0; i < collectTimeList.length; i++) {
				let time = collectTimeList[i];
				startTimeList.push(time.split("~")[0]);
				endTimeList.push(time.split("~")[1]);
			}
			
			let newTimeStartList = newTimeToNumber(startTimeList);
			let newTimeEndList = newTimeToNumber(endTimeList);
			// N개 배열 중 중복된 것이 있는지 없는지 확인하기
			// 시작시간 중에 제일 큰 값 종료시간 중에 제일 작은값 비교해서 시작시간이 크면 -1 출력
			for(let i = 1; i < newTimeStartList.length; i++) {
				let donotCollectTime = (newTimeStartList[0] > newTimeEndList[i] && newTimeEndList[0] < newTimeStartList[i]);
				if(donotCollectTime) {
					collectTime = -1;
					console.log(collectTime);
					rl.close();
				}
			}
	
			const startTimeMax = Math.max(...newTimeStartList);
			const endTimeMin = Math.min(...newTimeEndList);
			if(startTimeMax > endTimeMin) {
				collectTime = -1;
			}else {
				collectTime = formatTime(startTimeMax) + " ~ " + formatTime(endTimeMin);
			}
			rl.close();
		}
	}
	process.exit();
})();
			
