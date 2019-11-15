---
title: "TIL - Day16: Code Kata-4(JS & PY) "
date: "2019-08-14T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL-Day16:-Code-Kata-4(JS-&-PY)/"
category: "TIL"
tags:
  - "Python"
  - "Javascript"
  - "Algorithm"
  - "Code Kata"

description: "Wecode Code Kata day4"
---

_**<u>필자는 현재 Python을 이용한 Backend 공부를 시작했기에, 모든 Code Kata 문제들을 JS와 PY로 풀어 올리도록 하겠다.</u>**_</br>
_Javascript의 풀이와 Python의 풀이는 다를 수 있습니다!_

## 문제

숫자인 num을 인자로 넘겨주면, 뒤집은 모양이 num과 똑같은지 여부를 반환해주세요.</br>
num: 숫자
return: true or false (뒤집은 모양이 num와 똑같은지 여부)

```
예를 들어,
num = 123
return false 
=> 뒤집은 모양이 321 이기 때문

num = 1221
return true 
=> 뒤집은 모양이 1221 이기 때문

num = -121
return false 
=> 뒤집은 모양이 121- 이기 때문

num = 10
return false 
=> 뒤집은 모양이 01 이기 때문
```

### Javascript

```Javascript
const sameReverse = num => {
  num = String(num)
  let result = '';
  const len = num.length-1
  for(let i = len; i > -1; i--){
    result = result + num[i];
  }
  return result === num ? true : false
}
```

### Python

```Python
def sameReverse(num):
  num_copy = str(num)
  result = ''
  for x in reversed(range(len(num_copy))):
    result = result + num_copy[x]
  if result == num_copy:
    return True
  else:
    return False

```
