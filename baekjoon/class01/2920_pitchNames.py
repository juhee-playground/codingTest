# 아침코테 #백준 #파이썬 #클래스에센셜 #음계

# 타이틀: 2920 음계
# 문제: 다장조는 c d e f g a b C, 총 8개 음으로 이루어져있다. 이 문제에서 8개 음은 다음과 같이 숫자로 바꾸어 표현한다. c는 1로, d는 2로, ..., C를 8로 바꾼다.
# 1부터 8까지 차례대로 연주한다면 ascending, 8부터 1까지 차례대로 연주한다면 descending, 둘 다 아니라면 mixed 이다.
# 연주한 순서가 주어졌을 때, 이것이 ascending인지, descending인지, 아니면 mixed인지 판별하는 프로그램을 작성하시오.

# 

''' 
입력
첫째 줄에 8개 숫자가 주어진다. 이 숫자는 문제 설명에서 설명한 음이며, 1부터 8까지 숫자가 한 번씩 등장한다.

출력
첫째 줄에 ascending, descending, mixed 중 하나를 출력한다
'''


# 입력 예시
# 1 2 3 4 5 6 7 8

# 출력 예시
# ascending

numbers = list(map(int, input().split()));

for i in range(len(numbers)):
  if i < len(numbers)-1:
    if numbers[i] + 1 == numbers[i+1]:
      result = "ascending";
    elif numbers[i] - 1 == numbers[i+1]:
      result ="descending";
    else:
      result = "mixed";
      break;

print(result);
