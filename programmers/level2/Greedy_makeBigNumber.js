function solution(number, k) {
    let answer = "";
    let stringToNumber = [];
    let max = { number: null, index: 0 }

    // 제일 큰 숫자 찾기
    for(let i = 0; i < number.split("").length; i++) {
      let num = Number(number.split("")[i]);
      stringToNumber.push(num);
        
      if (!max.number) {
        max.number = num;
        max.index = i;
      };

      if (max.number < num) {
        max.number = num;
        max.index = i
      }
    }

    // 큰 숫자의 왼쪽의 수, 오른쪽에 있는 숫자 나누기
    let leftNumbers = stringToNumber.slice(0, max.index);
    let rightNumbers = stringToNumber.slice(max.index+1, number.length);
    // console.log(stringToNumber, leftNumbers, rightNumbers);
    let sortLeft = [];
    let sortRight = [];
    
    // K개 제거
    let removeCount = 0;
    let isSame = false;
    // left개수가 k보다 작을 경우 
    if(leftNumbers.length <= k) {
        k = k - leftNumbers.length;
        leftNumbers = [];
    }else {
        // left 개수가 k보다 클 경우
        sortLeft = leftNumbers.sort();
        sortLeft = sortLeft.slice(0, k);
        for(let i = 0; i < leftNumbers.length; i++) {
            if(k === 0) {
                continue;
            }
            console.log("sort", sortLeft, leftNumbers, leftNumbers[i]);
            if(sortLeft.includes(leftNumbers[i])) {
                leftNumbers.splice(i, 1);
                console.log(leftNumbers);
                i = i > 2 ? i - 2 : i -1;
                k--;
            }
        }
    }
    console.log("중간 전검", k, leftNumbers);
    
    // 오른쪽 개수와 k의 개수보다 작거나 같으면 오른쪽 싹 날리기
    if(rightNumbers.length <= k) {
        k = k - rightNumbers.length;
        rightNumbers = [];
    }else {
    // 오른쪽 개수가 클 경우
        // left 개수가 k보다 클 경우
        sortRight = rightNumbers.sort();
        sortRight.slice(0, k);
        console.log("sort right", sortRight);
        for(let i = 0; i < rightNumbers.length; i++) {
            if(sortRight.includes(rightNumbers[i])) {
                rightNumbers.splice(i, 1);
            }
        }
    }
    
    
    
    
    
//     for(let i = 0; i < stringToNumber.length-1; i++) {

//         let curr = stringToNumber[i];
//         let next = stringToNumber[i+1];
        
        
//         // removeSmall(prev, curr, next, i);
//         console.log(i, " : ",  curr, next);
//         // i--;
        
//         // // 둘 중 작은거 제거
//         if(k === removeCount) {
//             console.log("the end");
//             return stringToNumber.join("");
//         }
//         if(curr < next) {
//             stringToNumber.splice(i, 1);
//             console.log("현재꺼 제거", stringToNumber.join(""));
//             removeCount++;
//             if(isSame) {
//                 stringToNumber.splice(i-1, 1);
//                 console.log("그 앞에도 제거", stringToNumber.join(""));
//                 removeCount++;
//             }
//             i--;
//             continue;
            
            
//         }else if(curr > next) {
//             stringToNumber.splice(i+1, 1);
//                 console.log("다음꺼 제거", stringToNumber.join(""));
//             i--;
//             removeCount++;
//             continue;
//         }else {
//             isSame = true;
//         }
//     }
    
//     if(k === removeCount) {
//         console.log("the end");
//         return stringToNumber.join("");
//     }
    
    // return stringToNumber.join("");
    answer = leftNumbers.join("") + max.number + rightNumbers.join("");
    // answer = number;
    return answer;
}

function findAndRemoveMinNumber(arr) {
    let min = { number: null, index: 0 };
    for(let i = 0; i < arr.length; i++) {
      let num = arr[i];
      if (!min.number) {
        min.number = num;
        min.index = i;
      };
        
      if (min.number > num) {
        min.number = num;
        min.index = i;
      }
    }
    arr = arr.splice(min.index, 1);
    return arr;
}