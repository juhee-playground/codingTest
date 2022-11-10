# 아침코테 #백준 #파이썬 #클래스2 #직사각형에서탈출

# 타이틀: 1085 직사각형에서 탈출
# 문제: 한수는 지금 (x, y)에 있다. 직사각형은 각 변이 좌표축에 평행하고, 왼쪽 아래 꼭짓점은 (0, 0), 오른쪽 위 꼭짓점은 (w, h)에 있다. 직사각형의 경계선까지 가는 거리의 최솟값을 구하는 프로그램을 작성하시오.

''' 
입력
첫째 줄에 x, y, w, h가 주어진다.

출력
첫째 줄에 문제의 정답을 출력한다.
'''


# 입력 예시
# 6 2 10 3

# 1 1 5 5

# 653 375 1000 1000

# 161 181 762 375

# 출력 예시
# 1

# 1

# 347

# 161

x,y,w,h = map(int, input().split())

# 전체 넓이의 - 자기 위치 x, 전체 높이의 - 자기 위치 y
# 자기위치 x - 0, 자기위치 y - 0

distances = [];

min = 0;

distances.append(w - x);
distances.append(h - y);
distances.append(x - 0);
distances.append(y - 0);

# 4개 중에 최소값을 구한다.
for i in range(len(distances)):
  if i == 0:
    min = distances[i];
    continue;

  if min > distances[i]:
    min = distances[i];

print(min);