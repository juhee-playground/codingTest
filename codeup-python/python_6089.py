# 아침코테 #코드업 #파이썬 #기초100제 #종합 #수나열하기2

# 타이틀: 6089 : [기초-종합] 수 나열하기2
# 문제: 시작 값(a), 등비(r), 몇 번째인지를 나타내는 정수(n)가 입력될 때 n번째 수를 출력하는 프로그램을 만들어보자.

# 어떤 규칙에 따라 수를 순서대로 나열한 것을 수열(sequences)이라고 한다.


'''
예를 들어
2 6 18 54 162 486 ... 은
2부터 시작해 이전에 만든 수에 3을 곱해 다음 수를 만든 수열이다.

이러한 것을 수학에서는 앞뒤 수들의 비율이 같다고 하여
등비(비율이 같다의 한문 말) 수열이라고 한다. (등비수열 : geometric progression/sequence)

등비 수열을 알게된 영일이는 갑자기 궁금해졌다.
"그럼.... 13번째 나오는 수는 뭘까?"
영일이는 프로그램을 만들어 더 큰 수도 자동으로 계산하고 싶어졌다.

입력
시작 값(a), 등비의 값(r), 몇 번째 인지를 나타내는 정수(n)가
공백을 두고 입력된다.(모두 0 ~ 10)

출력
n번째 수를 출력한다.

'''

# 입력 예시
# 2 3 7

# 출력 예시
# 1458

startNum, r, lastIndex = input().split()
# 시작 값(a), 등비의 값(r), 몇 번째 인지를 나타내는 정수(n)가
startNum = int(startNum)
r = int(r)
lastIndex = int(lastIndex)
value = 0

n = startNum - (r * 1)

for i in range(lastIndex+1):
    if i == 1:
        value = r * i + n
    else:
        value = value * r

    if i == lastIndex:
        print(value)