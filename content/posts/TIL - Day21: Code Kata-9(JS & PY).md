---
title: "TIL - Day21: Code Kata-9(JS & PY) "
date: "2019-08-19T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL-Day21:-Code-Kata-9(JS-&-PY)/"
category: "TIL"
tags:
  - "Python"
  - "Javascript"
  - "Algorithm"
  - "Code Kata"

description: "Wecode Code Kata day9"
---

_**<u>필자는 현재 Python을 이용한 Backend 공부를 시작했기에, 모든 Code Kata 문제들을 JS와 PY로 풀어 올리도록 하겠다.</u>**_</br>
_Javascript의 풀이와 Python의 풀이는 다를 수 있습니다!_

## 문제
nums는 숫자로 이루어진 배열입니다. 
가장 자주 등장한 숫자를 k 개수만큼 return해주세요.

```
예를 들어,
nums = [1,1,1,2,2,3],
k = 2

return [1,2]

nums = [1]
k = 1

return [1]
```

### Javascript

```Javascript
function topK(nums, k) {
    const numObj = {};
    const results = [];
    for(let i = 0; i < nums.length; i++){
      let temp = nums[i];
      if(numObj[temp] === undefined){
        numObj[temp] = 1;
      } else {
        numObj[temp]++
      }
    }
    let numQty = Object.entries(numObj);
    numQty.sort((a,b) => b[1]-a[1]);
    console.log(numQty)
    for(let i = 0; i < k; i++){
        results.push(Number(numQty[i][0]))
    }
    return results;
  }
```

### Python

```Python
def topK(nums, k):
  container = {}
  for x in range(len(nums)):
    if nums[x] not in container:
      container[nums[x]] = 1
    else:
      container[nums[x]] = container[nums[x]]+1

  results = [(x,container[x]) for x in container]

  def takeSecond(li):
    return li[1]
  
  results.sort(key=takeSecond, reverse=True)
  return [result[x][0] for x in range(k)]

```
*하면 할 수록 신기한 파이썬!!! comprehension 기능과 sort에 대해서 자세히 알아볼 필요가 있음!!*
