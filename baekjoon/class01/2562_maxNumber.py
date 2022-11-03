# 아침코테 #백준 #파이썬 #새싹클래스 #최댓값

# 타이틀: 최댓값
# 문제: 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.

# 

''' 
입력
첫째 줄부터 아홉 번째 줄까지 한 줄에 하나의 자연수가 주어진다. 주어지는 자연수는 100 보다 작다.

출력
첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 몇 번째 수인지를 출력한다.
'''


# 입력 예시
# 3
# 29
# 38
# 12
# 57
# 74
# 40
# 85
# 61

# 출력 예시
# 85
# 8

arr = [];

for i in range(9):
  number = int(input());
  arr.append(number);

maxNumber = 0;
maxIndex = 0;

for i in range(len(arr)):
  if arr[i] > maxNumber: 
    maxNumber = arr[i];
    maxIndex = i + 1;

print(maxNumber);
print(maxIndex);
