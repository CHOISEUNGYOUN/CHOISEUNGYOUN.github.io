---
title: "TIL - Day17: Code Kata-5(JS & PY) "
date: "2019-08-15T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL-Day17:-Code-Kata-5(JS-&-PY)/"
category: "TIL"
tags:
  - "Python"
  - "Javascript"
  - "Algorithm"
  - "Code Kata"

description: "Wecode Code Kata day5"
---

_**<u>필자는 현재 Python을 이용한 Backend 공부를 시작했기에, 모든 Code Kata 문제들을 JS와 PY로 풀어 올리도록 하겠다.</u>**_</br>
_Javascript의 풀이와 Python의 풀이는 다를 수 있습니다!_

## 문제

strs은 단어가 담긴 배열입니다.
공통된 시작 단어(prefix)를 반환해주세요

```
예를 들어
strs = ['start', 'stair', 'step']
return은 'st'

strs = ['start', 'wework', 'today']
return은 ''
```

### Javascript

```Javascript
const getPrefix = strs => {
    let flag = strs[0];
    let temp = '';
    if(!strs.length) return '';
    for(let i = 1; i < strs.length; i++){
        if(temp.length === 0){
            for(let j = 0; j < flag.length; j++){
                if(flag[j] === strs[i][j]){
                    temp = temp + flag[j];
                } else {
                    break;
                }
            }
        }
        return temp
    }
}
```

### Python

```Python
def getPrefix(strs):
  flag = strs[0]
  result = ''
  if strs == '':
    return ''
  
  for x in range(1,len(strs)):
    for y in range(len(flag)):
      if y <= len(strs[x]):
        if flag[y] == strs[x][y]:
          result = result + flag[y]
        else:
          break
    return result
          
```
