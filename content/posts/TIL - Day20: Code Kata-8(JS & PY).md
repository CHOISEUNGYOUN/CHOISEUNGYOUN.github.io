---
title: "TIL - Day20: Code Kata-8(JS & PY) "
date: "2019-08-18T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL - Day20: Code Kata-8(JS & PY) /"
category: "TIL"
tags:
  - "Python"
  - "Javascript"
  - "Algorithm"
  - "Code Kata"

description: "Wecode Code Kata day8"
---

_**<u>필자는 현재 Python을 이용한 Backend 공부를 시작했기에, 모든 Code Kata 문제들을 JS와 PY로 풀어 올리도록 하겠다.</u>**_</br>
_Javascript의 풀이와 Python의 풀이는 다를 수 있습니다!_

## 문제
s는 여러 괄호들로 이루어진 String 인자입니다.
s가 유효한 표현인지 아닌지 true/false로 반환해주세요.

종류는 '(', ')', '[', ']', '{', '}' 으로 총 6개 있습니다.
아래의 경우 유효합니다.
한 번 괄호를 시작했으면, 같은 괄호로 끝내야 한다.
괄호 순서가 맞아야 한다.

```
예를 들어,
s = "()"
return true

s = "()[]{}"
return true

s = "(]"
return false

s = "([)]"
return false

s = "{[]}"
return true
```

### Javascript

```Javascript
function isValid(s) {
    if(s.length % 2 !== 0){
        return false;
    }
    const brackets = {
        '(':')',
        '{':'}',
        '[':']',
    }
    s = s.split('');
    while(s.length){
        const len = s.length-1;
        for(let i in brackets){
            if(s[0] === i){
                if(s[1] === brackets[i]){
                    s = s.slice(2);
                } else if(s[len] === brackets[i]){
                    s.shift();
                    s.pop();
                }
            } else if(s[len-1] === i){
                if(s[len] === brackets[i]){
                    s = s.slice(0,len-1);
                }
            } else if(s[1] === i){
                return false;
            } else if(s[0] === ')' || s[0] === '}' || s[0] === ']'){
                return false;
            }
        }
    }
    return true;
}

```

### Python

```Python

def isValid(s):
  brackets = {
    '(':')',
    '{':'}',
    '[':']',
  }
  container = [s[x] for x in range(len(s))]
  
  while(len(container) > 0):
    for x in brackets:
      if len(container) == 0:
        return True
      if container[0] is x:
        if container[1] is brackets[x]:
          container.pop(0)
          container.pop(0)
          continue
        elif container[len(container)-1] is brackets[x]:
          container.pop(len(container)-1)
      elif container[len(container)-1] is x:
        if container[len(container)-1] is brackets[x]:
          container = container[:len(container)-1]
      elif container[1] is x:
        return False
      elif container[0] is ')' or container[0] is '}' or container[0] is ']':
        return False
  return True

```
*좀 막무가내로 풀어서 리팩토링 할 필요가 있다...*
