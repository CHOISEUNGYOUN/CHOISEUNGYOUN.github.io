---
title: "TIL - Day24: Code Kata-12(JS & PY) "
date: "2019-08-22T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL-Day24:Code-Kata-12(JS-&-PY)/"
category: "TIL"
tags:
  - "Python"
  - "Javascript"
  - "Algorithm"
  - "Code Kata"

description: "Wecode Code Kata day12"
---

_**<u>필자는 현재 Python을 이용한 Backend 공부를 시작했기에, 모든 Code Kata 문제들을 JS와 PY로 풀어 올리도록 하겠다.</u>**_</br>
_Javascript의 풀이와 Python의 풀이는 다를 수 있습니다!_

## 문제
문자로 구성된 배열을 input으로 전달하면, 문자를 뒤집어서 return 해주세요.

* 새로운 배열을 선언하면 안 됩니다.
* 인자로 받은 배열을 수정해서 만들어주세요.

__*가정__</br>
배열의 길이는 2이상입니다.
```
예)
Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```
### Javascript

```Javascript
const reverseString = s => {
    let temp;
    let start = 0;
    let end = s.length-1;
    while(end > Math.floor(s.length/2)){
        temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        end--
        start++
    }
    return s;
  };
  
```

### Python

```Python
def reverseString(s):
  last = len(s)-1
  for x in range(math.floor(len(s)/2)):
    temp = s[last]
    s[last] = s[x]
    s[x] = temp
    last = last - 1
  return s
```

