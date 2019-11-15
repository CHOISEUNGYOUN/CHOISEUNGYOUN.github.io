---
title: "TIL - Day27: Code Kata-15(JS & PY) "
date: "2019-08-25T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL-Day27:-Code-Kata-15(JS-&-PY)/"
category: "TIL"
tags:
  - "Python"
  - "Javascript"
  - "Algorithm"
  - "Code Kata"

description: "Wecode Code Kata day15"
---

_**<u>필자는 현재 Python을 이용한 Backend 공부를 시작했기에, 모든 Code Kata 문제들을 JS와 PY로 풀어 올리도록 하겠다.</u>**_</br>
_Javascript의 풀이와 Python의 풀이는 다를 수 있습니다!_

## 문제
오늘은 재귀알고리즘에 대한 문제입니다.
재귀(recursion)란, 자신을 정의할 때 자기 자신을 호출하는 방법을 뜻합니다. 프로그래밍의 함수정의에서 많이 사용됩니다.

재귀를 사용하여 팩토리얼(factorial)을 구하는 함수를 구현해주세요.
팩토리얼이란 1에서부터 n까지의 정수를 모두 곱한것을 말합니다.

```
1! = 1
2! = 1 * 2
5! = 1 * 2 * 3 * 4 * 5
```
### Javascript

```Javascript
const factorial = n => {
  return n === 0 ? 1 : n * factorial(n-1)
}
```

### Python

```Python
def factorial(n):
  if n == 0:
    return 1
  else:
    return n * factorial(n-1)
```

