---
title: "TIL - Day15: Code Kata-3(JS & PY) "
date: "2019-08-13T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL - Day15: Code Kata-3(JS & PY) /"
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

String 형인 str 인자에서 중복되지 않은 알파벳으로 이루어진 제일 긴 단어의 길이를 반환해주세요.
```
  str: 텍스트
  return: 중복되지 않은 알파벳 길이 (숫자 반환)
  예를 들어,
  str = "abcabcabc"
  return은 3
  => 'abc' 가 제일 길기 때문

  str = "aaaaa"
  return은 1
  => 'a' 가 제일 길기 때문

  str = "sttrg"
  return은 3
  => 'trg' 가 제일 길기 때문
```
### Javascript

```Javascript
const getLengthOfStr = str => {
    let results = [];
    let temp = '';
    const strLen = str.length-1
    for(let i = strLen; i > -1; i--){
      if(temp.indexOf(str[i]) === -1){
        temp = temp + str[i];
      } else {
        results.push(temp);
        temp = '';
        temp = temp + str[i]
      }
    }
    results.push(temp);
    temp = '';
    for(let i = 0; i < str.length; i++){
      if(temp.indexOf(str[i]) === -1){
        temp = temp + str[i];
      } else {
        results.push(temp);
        temp = '';
        temp = temp + str[i]
      }
    }
    results.push(temp)
    let solution = results[0].length;
    for(let i = 1; i < results.length; i++){
        if(solution < results[i].length){
            solution = results[i].length            
        }
    }
    return solution
}
```

### Python

*아직 문제 풀이를 완료하지 못하여서 다 풀고 다시 올리도록 하겠습니다...*

