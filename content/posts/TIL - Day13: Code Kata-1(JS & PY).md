---
title: "TIL - Day13: Code Kata-1(JS & PY)"
date: "2019-08-11T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL-Day13:-Code-Kata-1(JS-&-PY)/"
category: "TIL"
tags:
  - "Python"
  - "Javascript"
  - "Algorithm"
  - "Code Kata"

description: "Wecode Code Kata day1"
---

평소에 알고리즘을 푸는것을 좋아하는 나를 위한 Code Kata를 드디어 시작한다! Code Kata에 대한 기록을 오늘부터 남기겠다.

_**<u>필자는 현재 Python을 이용한 Backend 공부를 시작했기에, 모든 Code Kata 문제들을 JS와 PY로 풀어 올리도록 하겠다.</u>**_</br>
_Javascript의 풀이와 Python의 풀이는 다를 수 있습니다!_

## 문제

twoSum함수에 숫자배열과 '특정 수'를 인자로 넘기면, </br>더해서 '특정 수'가 나오는 index를 배열에 담아 return해 주세요.

> >

    nums: 숫자 배열
    target: 두 수를 더해서 나올 수 있는 합계
    return: 두 수의 index를 가진 숫자 배열
    예를 들어, nums은 [4, 9, 11, 14]
    target은 13 nums[0] + nums[1] = 4 + 9 = 13 이죠?
    그러면 [0, 1]이 return 되어야 합니다.

### Javascript

```Javascript
const twoSum = (nums, target) => {
  let temp = nums[0];
  let i = 0;
  let result;
  while (result !== target) {
    if(i >= nums.length-1){
      return null;
    }
    for (let j = i + 1; j < nums.length; j++) {
      result = temp + nums[j];
      if (result === target) {
        return [i, j];
      }
    }
    i = i + 1;
    temp = nums[i]
  }
}
```

### Python

```Python
def twoSum(nums, target):
  length = len(nums)
  for x in range(0,length-1):
    for y in range(x+1,length):
      if nums[x] + nums[y] == target:
        print([x,y])
        return [x,y]

```
