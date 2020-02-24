---
title: "TIL - S 회사 알고리즘 테스트 "
date: "2020-02-24T17:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL-algorithm-s-company/"
category: "TIL"
tags:
  - "Python"
  - "Algorithm"
  - "Code Kata"

description: "Algorithm test"
---

며칠전에 한국과자를 랜덤박스 형식으로 포장하여 수출하는 회사의 백엔드 면접을 보았다. 딱히 질문은 없었고, 알고리즘 테스트를 바로 진행하였는데 문제는 손코딩(!)으로 진행이 되었다는 것이다.</br>
문제 또한 기초라고 하나, 전혀 생각해보지 못하여 한시간동안 쩔쩔매다 코드 낙서만 한 상태로 제출한 것이 너무나 아쉬워 집에서 한번 풀어보게 되었다. 문제는 다음과 같았다.

## 문제

```Python
n 이라는 숫자 매개변수가 주어지면,아래와 같은 마름모를 출력하여야 합니다.
단, 문자열 곱하기는 사용 할 수 없습니다.

예:
n = 1
          *
n = 2
          *
         ***
          *
n = 3
          *
         ***
        *****
         ***
          *
n = 4
          *
         ***
        *****
       *******
        *****
         ***
          *
```

현장에서는 풀지 못하였으나, 내가 시도하려는 결과값은 벡터 리스트를 만들어 출력을 하려는 것이었으므로, 그 기반으로 문제를 풀었다. 답은 다음과 같다.

### Python

```Python
from math import floor

def test(n):
    num = n * 2 - 1
    half = floor(num/2)
    results = []
    zeros = [' ' for z in range(num)]
    for i in range(half+1):
        results.append(zeros[:])

    for i, n in enumerate(results):
        if i <= half:
            for j in range(i+1):
                n[half] = '*'
                n[half-j], n[half+j] = ('*','*')

    leftovers = results[:half]
    for i in reversed(range(half)):
        results.append(leftovers[i])

    for i, n in enumerate(results):
        print(''.join(n))
```

한동안 알고리즘 안풀어서 사고능력이 많이 떨어진듯 하다. 반성하자!!
