---
title: "TIL - Day30: Code Kata-17(JS & PY) "
date: "2019-08-28T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL - Day30: Code Kata-17(JS & PY) /"
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

prices는 배열이며, 각 요소는 매일의 주식 가격입니다.
만약 한 번만 거래할 수 있다면 = 사고 팔 수 있다면,
제일 큰 이익은 얼마일까요?

```
Input: [7,1,5,3,6,4]
Output: 5
설명: 
2일(가격=1)에 샀다가 5일(가격=6)에 사는 것이 6-1이라 제일 큰 수익
7-1=6 은 안 되는거 아시죠? 먼저 사야 팔 수 있습니다.


Input: [7,6,4,3,1]
Output: 0
설명: 
여기서는 매일 가격이 낮아지기 때문에 거래가 없습니다. 그래서 0
```

### Javascript

```Javascript
const maxProfit = prices => {
  let results = [];
  for(let i = 0; i < prices.length-1; i++){
    for(let j = i+1; j < prices.length; j++){
      if(prices[i] < prices[j]){
        results.push(prices[j]-prices[i])
      }
    }
  }
  return !results.length ? 0 : Math.max(...results)
};
```

### Python

```Python
def maxProfit(prices): 
  results = []
  
  for x in range(len(prices)):
    for y in range(x+1,len(prices)):
      if prices[x] < prices[y]:
        results.append(prices[y]-prices[x])
  
  return max(results) if len(results) > 0 else 0
  
```
