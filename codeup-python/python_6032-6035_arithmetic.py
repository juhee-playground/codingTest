# 아침코테 #코드업 #파이썬 #기초100제


# 타이틀: 6032 [기초-산술연산] 정수 1개 입력받아 부호 바꾸기
# 문제: 입력된 정수의 부호를 바꿔 출력해보자.

''' 
참고 
단항(unary) 연산자인 -(negative)를 변수 앞에 붙이면 부호가 반대인 값이 된다. 


입력
정수 1개가 입력된다.

출력
부호를 바꿔 출력한다.

입력 예시   
-1

출력 예시
1 
'''

n = input()
n = int(n)
print(-n)


# 타이틀: 6033 [기초-산술연산] 문자 1개 입력받아 다음 문자 출력하기
# 문제: 문자 1개를 입력받아 그 다음 문자를 출력해보자.

''' 
영문자 'A'의 다음 문자는 'B'이고, 숫자 '0'의 다음 문자는 '1'이다.

참고
숫자는 수를 표현하는 문자로서 '0' 은 문자 그 자체를 의미하고, 0은 값을 의미한다.

힌트
아스키문자표에서 'A'는 10진수 65로 저장되고 'B'는 10진수 66으로 저장된다.
따라서, 문자도 값으로 덧셈을 할 수 있다. 어떤 문자의 값에 1을 더하면 그 다음 문자의 값이 된다.

입력
문자 1개가 입력된다.

출력
그 다음 문자를 출력한다.

입력 예시   
a

출력 예시
b
'''

n = ord(input())
print(chr(n+1))

# 타이틀: 6034 [기초-산술연산] 정수 2개 입력받아 차 계산하기
# 문제: 정수 2개(a, b)를 입력받아 a에서 b를 뺀 차를 출력하는 프로그램을 작성해보자.

''' 
참고
수 - 수는 차(subtraction)가 계산된다.

입력
2개의 정수가 공백으로 구분되어 입력된다.

출력
첫 번째 정수에서 두 번째 정수를 뺀 차를 출력한다.

입력 예시   
123 -123

출력 예시
246
'''

a, b = input().split()
res = int(a) - int(b)
print(res)


# 타이틀: 6035 [기초-산술연산] 실수 2개 입력받아 곱 계산하기
# 문제: 실수 2개(f1, f2)를 입력받아 곱을 출력하는 프로그램을 작성해보자.

''' 
참고
수 * 수는 곱(multiplication)이 계산된다.

입력
2개의 실수가 공백으로 구분되어 입력된다.

출력
첫 번째 실수와 두 번째 실수를 곱한 값을 출력한다.

입력 예시   
0.5 2.0

출력 예시
1.0
'''

a, b = input().split()
res = float(a) * float(b)
print(res)