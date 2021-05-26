function solution(record) {
  var answer = [];
  let arr = [];
  let actObj = { "Enter" : "들어왔습니다.", "Leave" : "나갔습니다." }
  let userIdObj = {};
  let isChange = false;
  // 기록을 돌린다.
  record.forEach(item => {
      // who, what을 저장한다
      const [act, uid, nick] = item.split(" ");
      if(act !== "Leave") {
          // 채팅방에서 나갔을 때 빼고 uid와 nick 매칭 해놓기
          userIdObj[uid] = nick;    
      }

      // console.log(uid, act, actObj[act]);
      if(act !== "Change") {
          let string = `${uid}님이 ${actObj[act]}`;
          arr.push(string);    
      }
  });
  answer = arr.map(item => {
      let uid = item.split("님")[0];
      return item.replace(uid, userIdObj[uid]);
  });
  
  return answer;
}