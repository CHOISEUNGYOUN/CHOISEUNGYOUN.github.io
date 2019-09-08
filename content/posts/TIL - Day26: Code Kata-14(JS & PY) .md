---
title: "TIL - Day26: Code Kata-14(JS & PY) "
date: "2019-08-24T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL - Day26: Code Kata-14(JS & PY) /"
category: "TIL"
tags:
  - "Python"
  - "Javascript"
  - "Algorithm"
  - "Code Kata"

description: "Wecode Code Kata day14"
---

_**<u>필자는 현재 Python을 이용한 Backend 공부를 시작했기에, 모든 Code Kata 문제들을 JS와 PY로 풀어 올리도록 하겠다.</u>**_</br>
_Javascript의 풀이와 Python의 풀이는 다를 수 있습니다!_

## 문제
주어진 숫자 배열에서, 0을 배열의 마지막쪽으로 이동시켜주세요.
원래 있던 숫자의 순서는 바꾸지 말아주세요.

* 새로운 배열을 생성해서는 안 됩니다.
```
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
```
### Javascript

```Javascript
const moveZeroes = nums => {
  let end = nums.length-1;
  for(let i = end; i > -1; i--){
    if(nums[i] === 0){
     nums.push(nums[i]);
     nums.splice(i,1)
    }
  }
  return nums
}
```

### Python

```Python
def moveZeroes(nums):
  last_0 = 0
  for x in range(len(nums)):
    if nums[x] != 0:
      temp = nums[x]
      nums[x] = nums[last_0]
      nums[last_0] = temp
      
      last_0 = last_0 + 1
  return nums
```
