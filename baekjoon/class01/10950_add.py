# 아침코테 #백준 #파이썬 #새싹클래스 #반복문 #사칙연산

# 타이틀: 10950 A + B - 3
# 문제: 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.


''' 
입력
첫째 줄에 테스트 케이스의 개수 T가 주어진다.

각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
각 테스트 케이스마다 A+B를 출력한다.
'''


# 입력 예시
# 5
# 1 1
# 2 3
# 3 4
# 9 8
# 5 2

# 출력 예시
# 2
# 5
# 7
# 17
# 7

n = int(input())
data = [];

for i in range(n) :
  data.append([]);
  for j in range(2) :
      data[i].append(0);
    
for i in range(n) :
  data.append([])
  a,b = input().split()
  a = int(a)
  b = int(b)
  
  data[i][0] = a
  data[i][1] = b

for i in range(n) :
  print(data[i][0] + data[i][1])
