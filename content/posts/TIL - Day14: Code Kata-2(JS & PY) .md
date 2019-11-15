---
title: "TIL - Day14: Code Kata-2(JS & PY) "
date: "2019-08-12T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL-Day14:-Code-Kata-2(JS-&-PY)/"
category: "TIL"
tags:
  - "Python"
  - "Javascript"
  - "Algorithm"
  - "Code Kata"

description: "Wecode Code Kata day2"
---

_**<u>필자는 현재 Python을 이용한 Backend 공부를 시작했기에, 모든 Code Kata 문제들을 JS와 PY로 풀어 올리도록 하겠다.</u>**_</br>
_Javascript의 풀이와 Python의 풀이는 다를 수 있습니다!_

## 문제

reverse 함수에 정수인 숫자를 인자로 받습니다.</br> 그 숫자를 뒤집어서 return 해 주세요.
```
 예들 들어,
  x: 1234
  return: 4321
  x: -1234
  return: -4321
  x: 1230
  return: 321
```
### Javascript

```Javascript
const reverse = x => {
  const numToString = String(x);
  const len = numToString.length-1
  let result = '';
    for(let i = len; i >-1; i--){
        if(result.length === 0 && numToString[i] !== "0"){
            result = result + numToString[i];
        } else if(result.length > 0 && numToString[i] !== '-'){
            result = result + numToString[i]
        }
    }
    if(numToString[0] === '-'){
        result = '-' + result;
    }
    return Number(result)
}
```

### Python

```Python
def reverse(x):
  x = str(x)
  result = ''
  length = len(x)
  for y in reversed(range(length)):
    if len(result) == 0 and x[y] != '0':
      result = result + x[y]
    elif len(result) != 0 and x[y] != '-':
      result = result + x[y]
  
  if x[0] == '0':
    return 0
  elif x[0] == '-':
    result = '-' + result

  return int(result)

```
