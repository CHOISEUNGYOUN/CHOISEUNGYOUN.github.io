---
title: "TIL - Day19: Code Kata-(JS & PY) "
date: "2019-08-17T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL-Day19:-Code-Kata-7(JS-&-PY)/"
category: "TIL"
tags:
  - "Python"
  - "Javascript"
  - "Algorithm"
  - "Code Kata"

description: "Wecode Code Kata day7"
---

_**<u>필자는 현재 Python을 이용한 Backend 공부를 시작했기에, 모든 Code Kata 문제들을 JS와 PY로 풀어 올리도록 하겠다.</u>**_</br>
_Javascript의 풀이와 Python의 풀이는 다를 수 있습니다!_

## 문제

숫자로 이루어진 배열인 nums를 인자로 전달합니다.
숫자중에서 과반수(majority, more than a half)가 넘은 숫자를 반환해주세요.

```
예를 들어,

nums = [3,2,3]
return 3

nums = [2,2,1,1,1,2,2]
return 2
```

### Javascript

```Javascript
function moreThanHalf(nums) {
    const uniqueNums = [nums[0]];
    const uniqueCounter = {};
    const halfDigit = Math.floor(nums.length/2);
    for(let i = 1; i < nums.length; i++){
        let isUnique = true;
        for(let j = 0; j < uniqueNums.length; j++){
            if(uniqueNums[j] === nums[i]){
                isUnique = false;
                break;
            }
        }
        if(isUnique){
            uniqueNums.push(nums[i]);
        }
    }
    for(let i = 0; i < uniqueNums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(uniqueNums[i] === nums[j]){
                if(!uniqueCounter[uniqueNums[i]]){
                    uniqueCounter[uniqueNums[i]] = 1;
                } else {
                    uniqueCounter[uniqueNums[i]]++
                }
            }
        }
    }

    for(let i in uniqueCounter){
        if(halfDigit <= uniqueCounter[i]){
            return Number(i)
        }
    }
}
```

### Python

```Python
import math

def moreThanHalf(nums):
  num_collection = {}
  for x in range(len(nums)):
    if nums[x] not in num_collection:
      num_collection[nums[x]] = 1
    else:
      num_collection[nums[x]] = num_collection[nums[x]]+1
  
  half_digit = math.floor(len(nums)/2)
  for x in num_collection:
    if num_collection[x] > half_digit:
      return num_collection[x] 

```
