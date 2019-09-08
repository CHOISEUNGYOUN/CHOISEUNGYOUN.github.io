---
title: "TIL - Day23: Code Kata-11(JS & PY) "
date: "2019-08-21T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL - Day23: Code Kata-11(JS & PY) /"
category: "TIL"
tags:
  - "Python"
  - "Javascript"
  - "Algorithm"
  - "Code Kata"

description: "Wecode Code Kata day11"
---

_**<u>필자는 현재 Python을 이용한 Backend 공부를 시작했기에, 모든 Code Kata 문제들을 JS와 PY로 풀어 올리도록 하겠다.</u>**_</br>
_Javascript의 풀이와 Python의 풀이는 다를 수 있습니다!_

## 문제
두 개의 input에 복소수(complex number)가 string 으로 주어집니다.
복소수란 a+bi 의 형태로, 실수와 허수로 이루어진 수입니다.

input으로 받은 두 수를 곱해서 반환해주세요.
반환하는 표현도 복소수 형태의 string 이어야 합니다.

복소수 정의에 의하면 (i^2)는 -1 이므로 (i^2) 일때는 -1로 계산해주세요.

* 제곱 표현이 안 되어 i의 2제곱을 (i^2)라고 표현했습니다.

__*가정__</br>

input은 항상 a+bi 형태입니다.
output도 a+bi 형태로 나와야 합니다.
```
예제 1:
Input: "1+1i", "1+1i"
Output: "0+2i"
설명: 
(1 + i) * (1 + i) = 1 + i + i + i^2 = 2i 
2i를 복소수 형태로 바꾸면 0+2i.

예제 2:
Input: "1+-1i", "1+-1i"
Output: "0+-2i"
설명: 
(1 - i) * (1 - i) = 1 - i - i + i^2 = -2i, 
-2i를 복소수 형태로 바꾸면 0+-2i.

예제 3:
Input: "1+3i", "1+-2i"
Output: "7+1i"
설명: 
(1 + 3i) * (1 - 2i) = 1 - 2i + 3i -6(i^2) = 1 + i + 6, 
7+i를 복소수 형태로 바꾸면 7+1i.```

### Javascript

```Javascript
const complexNumberMultiply = (a, b) => {
    let a_container = a.split(/[-,+]/);
    let b_container = b.split(/[-,+]/);
    if(a_container.indexOf('') > -1){
      const empty_a = a_container.indexOf('');
      a_container.splice(empty_a,1)
    } 
    if(b_container.indexOf('') > -1){
      const empty_b = b_container.indexOf('');
      b_container.splice(empty_b,1)
    }
    a_container[1] = a_container[1].slice(0,a_container[1].length-1)
    b_container[1] = b_container[1].slice(0,b_container[1].length-1)
    a_container = a_container.map(Number);
    b_container = b_container.map(Number);
    let a_operator = [];
    let b_operator = [];
    for(let i = 0; i < a.length; i++){
        if(a[i] === '+' || a[i] === '-'){
            a_operator.push(a[i])
        }   
    }
    for(let i = 0; i < b.length; i++){
        if(b[i] === '+' || b[i] === '-'){
            b_operator.push(b[i])
        }   
    }

    if(a_operator.length === 2){
        a_container[1] = -1 * a_container[1]
    }
    if(b_operator.length === 2){
        b_container[1] = -1 * b_container[1]
    }

    let container1 = []; // 첫번쨰: 정수끼리, 두번째: 정수*i, 세번째: i의 제곱 1 + i + i + i^2 = 2i 
    container1[0] = a_container[0] * b_container[0]
    container1[1] = a_container[0] * b_container[1] + b_container[0] * a_container[1]
    container1[2] = a_container[1] * b_container[1]
    
    let result = [];
    result[0] = container1[0] - container1[2]
    result[1] = container1[1]
    
    console.log(result)
    return `${result[0]}+${result[1]}i`
}
```

### Python

```Python
작성중입니다...
```
*프로젝트 마무리 한다고 솔직히 신경을 못썼다... 반성하자*
