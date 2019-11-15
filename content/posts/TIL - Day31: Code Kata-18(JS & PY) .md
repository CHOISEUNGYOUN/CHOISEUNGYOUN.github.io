---
title: "TIL - Day31: Code Kata-18(JS & PY) "
date: "2019-08-29T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL-Day31:-Code-Kata-18(JS-&-PY)/"
category: "TIL"
tags:
  - "Python"
  - "Javascript"
  - "Algorithm"
  - "Code Kata"

description: "Wecode Code Kata day18"
---

_**<u>필자는 현재 Python을 이용한 Backend 공부를 시작했기에, 모든 Code Kata 문제들을 JS와 PY로 풀어 올리도록 하겠다.</u>**_</br>
_Javascript의 풀이와 Python의 풀이는 다를 수 있습니다!_

## 문제

다음과 같이 input이 주어졌을 때,같은 알파벳으로 이루어진 단어끼리 묶어주세요.

```
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

output에서 순서는 상관없습니다.
```

### Javascript

```Javascript
const groupAnagrams = strs => {
  let results = [];
  for(let i = 0; i < strs.length; i++){
    let temp = [strs[i]];
    for(let j = i+1; j < strs.length; j++){
      let isTrue = true;
      for(let k = 0; k < strs[j].length; k++){
        if(!strs[i].includes(strs[j][k])){
          isTrue = false;
          break;
        }
      }
      if(isTrue){
        temp.push(strs[j]);
        strs[j] = ''
      }
    }
    let container = []
    while(temp.length){
      if(temp[0] !== ''){
        container.push(temp.shift());
      } else {
        temp.shift();
      }
    }
    if(container.length){
      results.push(container)
    }
  }
  return results;
}
```

### Python

```Python
def groupAnagrams(strs):
  characters = {}
  
  for x in range(len(strs)):
    key = ''.join(sorted(strs[x]))
    
    if characters.get(key) is None:
      characters[key] = []
    
    characters[key].append(strs[x])
  
  return characters.values()  
```
