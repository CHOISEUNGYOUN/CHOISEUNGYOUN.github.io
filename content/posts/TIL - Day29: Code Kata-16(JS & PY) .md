---
title: "TIL - Day29: Code Kata-16(JS & PY) "
date: "2019-08-27T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL - Day29: Code Kata-16(JS & PY) /"
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

양수 N을 이진법으로 바꿨을 때, 연속으로 이어지는 0 중에서 가장 큰 값을 return해 주세요.

- 이어지는 0은 1과 1사이에 있는 것을 의미합니다.
- 1과 1사이에 있는 0을 binary gap 이라고 하겠습니다.

```
input: 9
output: 2
설명: 9의 이진수는 1001 입니다.
1과 1사이에 있는 0은 2 이므로, 2를 return

input: 529
output: 4
설명: 529의 이진수는 1000010001 입니다.
binary gap은 4와 3 두개가 있습니다.
이 중 큰 값은 4이므로 4를 return

input: 20
output: 1
설명: 20의 이진수는 10100 입니다.
1과 1사이에 있는 연속된 0의 수는 1 뿐입니다.
(뒤에 있는 0은 1사이에 있는 것이 아니므로)

input: 15
output: 0
설명: 15의 이진수는 1111 입니다.
binary gap이 없으므로 0을 return

input: 32
output: 0
설명: 32의 이진수는 100000 입니다.
binary gap이 없으므로 0을 return
```

### Javascript

```Javascript
const solution = N => {
  let results = '';
  function recur(n){
    if(n < 2){
      results = n+results
      return;
    } else {
      results = String(n%2) + results
      return recur(Math.floor(n/2))
    }
  }
  recur(N)
  answer = results.split('1').map(val => val.length);
  console.log(answer)
  if(results[results.length-1] === '0'){
    answer.pop();
  }
  return Math.max(...answer)
}
```

### Python

```Python
import math

def solution(N):
  binary_num = []
  
  def convert_binary(n):
    if n < 2:
      binary_num.insert(0,f'{n}')
      return;
    else:
      binary_num.insert(0,f'{(n % 2)}')
      return convert_binary(math.floor(n / 2))
  
  convert_binary(N)

  results = list(map(lambda x : len(x),''.join(binary_num).split('1')))

  if binary_num[len(binary_num)-1] == '0':
    results.pop(len(results)-1)
  
  return max(results)
```
