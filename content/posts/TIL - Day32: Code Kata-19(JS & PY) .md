---
title: "TIL - Day32: Code Kata-19(JS & PY) "
date: "2019-08-30T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL-Day32:-Code-Kata-19(JS-&-PY)/"
category: "TIL"
tags:
  - "Python"
  - "Javascript"
  - "Algorithm"
  - "Code Kata"

description: "Wecode Code Kata day19"
---

_**<u>필자는 현재 Python을 이용한 Backend 공부를 시작했기에, 모든 Code Kata 문제들을 JS와 PY로 풀어 올리도록 하겠다.</u>**_</br>
_Javascript의 풀이와 Python의 풀이는 다를 수 있습니다!_

## 문제

숫자로 이루어진 리스트 nums를 인자로 주면,
그 안에서 어떤 연속적인 요소를 더했을 때 가장 큰 값이 나오나요?
가장 큰 값을 찾아 return해주세요.

```
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
설명: [4,-1,2,1] 를 더하면 6이 가장 크기 때문
```

### Javascript

```Javascript
const maxSubArray = nums => {
  let results = []
  for(let i = 0; i < nums.length; i++){
    if(nums[i] > 0){
      nums = nums.slice(i);
      break;
    }
  }
  if(!nums.length){
    return 0;
  } else if(nums.length === 1){
    return nums[0]
  }
  for(let i = 0 ; i < nums.length-1; i++){
    let temp = nums[i];
    for(let j = i+1; j < nums.length; j++){
      temp = temp + nums[j];
      results.push(temp)
    }
  }
  return Math.max(...results)
}
```

### Python

```Python
def maxSubArray(nums):
  for x in range(1,len(nums)):
    nums[x] = max(nums[x], nums[x-1]+nums[x])
  return max(nums)
```
