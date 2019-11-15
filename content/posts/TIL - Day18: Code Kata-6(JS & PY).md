---
title: "TIL - Day18: Code Kata-6(JS & PY) "
date: "2019-08-16T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL-Day18:-Code-Kata-6(JS-&-PY)/"
category: "TIL"
tags:
  - "Python"
  - "Javascript"
  - "Algorithm"
  - "Code Kata"

description: "Wecode Code Kata day6"
---

_**<u>필자는 현재 Python을 이용한 Backend 공부를 시작했기에, 모든 Code Kata 문제들을 JS와 PY로 풀어 올리도록 하겠다.</u>**_</br>
_Javascript의 풀이와 Python의 풀이는 다를 수 있습니다!_

## 문제

로마자에서 숫자로 바꾸기

1~3999 사이의 로마자 s를 인자로 주면 그에 해당하는 숫자를 반환해주세요.
로마 숫자를 숫자로 표기하면 다음과 같습니다.

```
예를 들어
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

로마자를 숫자로 읽는 방법은 로마자를 왼쪽부터 차례대로 더하면 됩니다.
III = 3
XII = 12
XXVII = 27
입니다.
```

그런데 4를 표현할 때는 IIII가 아니라 IV 입니다.
뒤의 숫자에서 앞의 숫자를 빼주면 됩니다. 
9는 IX입니다.
```
I는 V와 X앞에 와서 4, 9
X는 L, C앞에 와서 40, 90
C는 D, M앞에 와서 400, 900 
```

### Javascript

```Javascript
function romanToNum(s) {
    let results = [];
    const decimalDigit = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000,
    };
    const romanNums = Object.keys(decimalDigit);
    s = s.split('').map(val => {
        for(let i = 0; i < romanNums.length; i++){
            if(val === romanNums[i]){
                return decimalDigit[romanNums[i]];
            }
        }
    })
    while(s.length){
        if(s[1] <= s[0]){
            results.push(s.shift());
        } else if(s.length === 1){
            results.push(s.shift());
        } else {
            results.push(-1 *(s.shift() - s.shift()))
        }
    }
    return results.reduce((acc,curr) => acc+curr);
}
```

### Python

```Python
def romanToNum(s):
  results = []
  decimal_digit = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000,
  }
  roman_number = list(decimal_digit.keys())
  new_s = []
  
  for x in range(0, len(s)):
    new_s.append(s[x])
  
  container = []

  for x in range(0, len(new_s)):
    for y in range(0, len(roman_number)):
      if new_s[x] == roman_number[y]:
        container.append(decimal_digit[roman_number[y]])
  
  while(len(container) > 0):
    if len(container) == 1:
      results.append(container.pop(0))
    elif container[1] <= container[0]:
      results.append(container.pop(0))
    else:
      results.append(-1 * (container.pop(0) - container.pop(0)))
  
  sum = 0
  for x in range(len(results)):
    sum = sum + results[x]

  return sum
          
```
*reduce 를 인식하지 못해서 결국 직접 작성했다... 왜그런거지???*
