function solution(board, moves) {
    var answer = 0;
    let reverseBoard = [];
    let pickUp = [];

    // 보드를 세로로 뒤집기
    for(let i = 0; i < board.length; i++) {
        reverseBoard[i] = [];
        for(let j = 0; j < board[0].length; j++) {
            if(board[j][i] !== 0) {
                reverseBoard[i].push(board[j][i]);    
            }
        }
    }
    for(let j = 0; j < board[0].length; j++) {
        reverseBoard[j].reverse()
    }

    // moves로 한개씩 꺼내기
    for(let i = 0; i < moves.length; i++) {
        let boardIndex = moves[i] - 1;
        let popDoll = reverseBoard[boardIndex].pop();

        // 뽑을 인형이 있는지 확인하기
        if(!popDoll) continue;
        // pickUp이 비어있는지 확인하기
        if(!pickUp) {
             pickUp.push(popDoll);
             continue;
        }
        // 뽑은 인형을 앞서 뽑았던 인형과 비교하기
        let disappearDoll = compareWithPerious(pickUp, popDoll);
        if(disappearDoll) {
            answer += 2;
        }
    }
    return answer;
}

function compareWithPerious(pickUp, popDoll) {
    if(pickUp[pickUp.length-1] === popDoll) {
        // 같으면 앞에 넣은 것 빼주고
        pickUp.splice([pickUp.length-1], 1);
        return true;
    }else {
        // 뽑을 인형이 있으면 배열에 추가하기
        pickUp.push(popDoll);
        return false;
    }
}