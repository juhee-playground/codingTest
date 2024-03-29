# 아침코테 #백준 #파이썬 #새싹클래스 #학점계산

# 타이틀: 2754 학점계산
# 문제: 어떤 사람의 C언어 성적이 주어졌을 때, 평점은 몇 점인지 출력하는 프로그램을 작성하시오.

# A+: 4.3, A0: 4.0, A-: 3.7
# B+: 3.3, B0: 3.0, B-: 2.7
# C+: 2.3, C0: 2.0, C-: 1.7
# D+: 1.3, D0: 1.0, D-: 0.7
# F: 0.0

''' 
입력
첫째 줄에 C언어 성적이 주어진다. 성적은 문제에서 설명한 13가지 중 하나이다.

출력
첫째 줄에 C언어 평점을 출력한다.
'''

# 입력 예시
# A0

# 출력 예시
# 4.0

grade = input()

def switch(grade):
  score = {"A":4.0, "B":3.0, "C":2.0, "D": 1.0 , "F": 0.0 }.get(grade[0])

  if(len(grade) > 1):
    if grade[1] == "+":
      score += 0.3
    elif grade[1] == "-":
      score -= 0.3
      
  print(score);
  
switch(grade)