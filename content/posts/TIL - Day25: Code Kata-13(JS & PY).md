---
title: "TIL - Day25: Code Kata-13(JS & PY) "
date: "2019-08-23T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL - Day25: Code Kata-13(JS & PY) /"
category: "TIL"
tags:
  - "Python"
  - "Javascript"
  - "Algorithm"
  - "Code Kata"

description: "Wecode Code Kata day13"
---

_**<u>필자는 현재 Python을 이용한 Backend 공부를 시작했기에, 모든 Code Kata 문제들을 JS와 PY로 풀어 올리도록 하겠다.</u>**_</br>
_Javascript의 풀이와 Python의 풀이는 다를 수 있습니다!_

## 문제
양수로 이루어진 m x n 그리드를 인자로 드립니다.
상단 왼쪽에서 시작하여, 하단 오른쪽까지 가는 길의 요소를 다 더했을 때,
가장 작은 합을 찾아서 return 해주세요.

한 지점에서 우측이나 아래로만 이동할 수 있습니다.

```
Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]

Output: 7

설명: 1→3→1→1→1 의 합이 제일 작음
```

### Javascript

```Javascript
const minPathSum = grid => {
  let result = [];
  let mLen = grid[0].length-1;
  let nLen = grid.length-1;
  let path = (m, n, s) => {
    s += grid[n][m];
    if (m < mLen && n < nLen) {
      path(m+1, n, s);
      path(m, n+1, s);
    }
    if (m === mLen && n < nLen) {
      path(m, n+1, s);
    }
    if (n === nLen && m < mLen) {
      path(m+1, n, s);
    }
    if (n === nLen && m === mLen) {
      result.push(s);
    }
  }
  path(0, 0, 0);
  return Math.min(...result);
};
```

### Python

```Python
작성 중입니다.
```
*이 문제 정말 어렵다... 아직도 이해 못했다...*
