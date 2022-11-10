# 아침코테 #백준 #파이썬 #새싹클래스 #대소문자바꾸기

# 타이틀: 2744 대문문자 바꾸기
# 문제: 영어 소문자와 대문자로 이루어진 단어를 입력받은 뒤, 대문자는 소문자로, 소문자는 대문자로 바꾸어 출력하는 프로그램을 작성하시오. 

''' 
입력
첫째 줄에 영어 소문자와 대문자로만 이루어진 단어가 주어진다. 단어의 길이는 최대 100이다.

출력
첫째 줄에 입력으로 주어진 단어에서 대문자는 소문자로, 소문자는 대문자로 바꾼 단어를 출력한다.

'''


# 입력 예시
# WrongAnswer

# 출력 예시
# wRONGaNSWER

word = list(input());
change = [];

for i in range(len(word)):
  if word[i].isupper():
    loewrChar = word[i].lower();
    change.append(loewrChar)
  elif word[i].islower():
    upperChar = word[i].upper();
    change.append(upperChar);

print(''.join(change));
