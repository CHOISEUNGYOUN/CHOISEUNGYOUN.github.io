---
title: "TIL - Day33: Code Kata-20(JS & PY) "
date: "2019-08-31T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL - Day33: Code Kata-20(JS & PY) /"
category: "TIL"
tags:
  - "Python"
  - "Javascript"
  - "Algorithm"
  - "Code Kata"

description: "Wecode Code Kata day20"
---

_**<u>필자는 현재 Python을 이용한 Backend 공부를 시작했기에, 모든 Code Kata 문제들을 JS와 PY로 풀어 올리도록 하겠다.</u>**_</br>
_Javascript의 풀이와 Python의 풀이는 다를 수 있습니다!_

## 문제

### 이진탐색
이진 탐색은 순서대로 찾는 것이 아니라, 중간부터 찾아 나서는 방법입니다.
만약 아래와 같은 배열에서 7을 찾아야 한다면, 
첫 번째로 중간 위치의 요소를 비교하고(7<14)찾아야할 값보다 크면 왼쪽의 중간에서 다시 비교합니다.
다시 한 번 크기를 비교해서 오른쪽의 중간으로 갈지, 왼쪽의 중간으로 갈지 결정하여 다시 찾아나서는 것을 이진 탐색법이라고 합니다.
```
오름차순인 숫자 nums 배열과 찾아야할 target을 인자로 주면,
target이 몇 번째 index인지 return 해주세요.

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
설명: 찾지 못하면 -1로 return 해주세요.

* nums 배열에 있는 요소는 서로 중복된 값이 없습니다.
```

### Javascript

```Javascript
const search = (nums, target) => {
 let start = 0;
 let end = nums.length-1;
 const binary_search = (nums) =>{
   let mid = Math.floor((start+end)/2);
   if(start > end){
     return -1;
   } else if(target === nums[mid]){
     return mid;
   } else if(target < nums[mid]){
     end = mid-1;
     return binary_search(nums)
   } else if(target > nums[mid]){
     start = mid+1;
     return binary_search(nums)
   }
 }
 return binary_search(nums)
}
```

### Python

```Python
def search(nums, target):

  def binary_search(nums,start = 0, end = len(nums)-1):
    mid_point = math.floor((start+end)/2)
    
    if start > end:
      return -1
    elif target == nums[mid_point]:
      return mid_point
    elif target > nums[mid_point]:
      start = mid_point+1
      return binary_search(nums,start,end)
    elif target < nums[mid_point]:
      end = mid_point-1
      return binary_search(nums,start,end)
  
  return binary_search(nums)
```
