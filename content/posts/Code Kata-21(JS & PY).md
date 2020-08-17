---
title: "Code Kata-21(PY) "
date: "2020-08-17T16:54:32.169Z"
template: "post"
draft: false
slug: "/posts/Code-Kata-21(PY)/"
category: "TIL"
tags:
  - "Python"
  - "Algorithm"
  - "Code Kata"
  - "Wecode"
  - "위코드"

description: "Code Kata day21"
---

#### 오랫만에 알고리즘 문제를 한번 풀어보고 싶어서 프로그래머스에 나와있는 `2019 카카오 개발자 겨울 인턴십 - 크레인 인형뽑기 게임`을 풀어보았다.

## [문제 링크](https://programmers.co.kr/learn/courses/30/lessons/64061)

### 솔루션
```Python
def solution(board, moves):
    result = 0
    basket = []
    grid = {}
    # x, y 축 변환
    for y, values in enumerate(board):
        values_len = len(values)
        for x in range(values_len):
            idx = x + 1
            if values[x] > 0:
                if idx not in grid:
                    grid[idx] = [values[x]]
                else:
                    grid[idx].append(values[x])
    # 변환된 x, y 축에 따라 바구니에 인형 넣기
    for move in moves:
        last_idx = len(basket) - 1
        last_n = basket[last_idx] if last_idx > -1 else None
        if len(grid[move]):
            if grid[move][0] == last_n:
                basket.pop(last_idx)
                grid[move].pop(0)
                result = result + 2
            else:
                basket.append(grid[move].pop(0))
    return result
```

이차원 배열은 `[y-axis][x-axis]` 이라고 생각하면 좀 더 간결하게 풀 수 있으나, 이 방법이 순차적으로 사고했을때 더 직관적이어서 상기와 같이 풀었다.

\*Reference:<br/>
[프로그래머스 - 크레인 인형뽑기 게임](https://programmers.co.kr/learn/courses/30/lessons/64061)<br/>
