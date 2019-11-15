---
title: "TIL - Day22: Code Kata-10(JS & PY) "
date: "2019-08-20T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL-Day22:-Code-Kata-10(JS-&-PY)/"
category: "TIL"
tags:
  - "Python"
  - "Javascript"
  - "Algorithm"
  - "Code Kata"

description: "Wecode Code Kata day10"
---

_**<u>필자는 현재 Python을 이용한 Backend 공부를 시작했기에, 모든 Code Kata 문제들을 JS와 PY로 풀어 올리도록 하겠다.</u>**_</br>
_Javascript의 풀이와 Python의 풀이는 다를 수 있습니다!_

## 문제
인자인 height는 숫자로 이루어진 배열입니다.
그래프로 생각한다면 y축의 값이고, 높이 값을 갖고 있습니다.

아래의 그래프라면 height 배열은 [1, 8, 6, 2, 5, 4, 8, 3, 7] 입니다.
![그래프](https://storage.googleapis.com/replit/images/1555380144403_97221ca23fbb92beaae5b6c800ceb5c8.pn)
저 그래프에 물을 담는다고 생각하고, 
물을 담을 수 있는 가장 넓은 면적의 값을 반환해주세요.

__*가정__</br>
배열의 길이는 2이상입니다.

### Javascript

```Javascript
function getMaxArea(height) {
    const areas = [];
    const findArea = (height) => {
        const nums = [];
        if (height.length < 2) {
            return;
        }
        for (let i = 1; i < height.length; i++) {
            let start = height[0];
            if (start > height[i]) {
                start = height[i];
            }
            nums.push(start*i)
        }
        areas.push(Math.max(...nums))
        return findArea(height.slice(1))
    }
    findArea(height);
    return Math.max(...areas)
}
```

### Python

```Python
def getMaxArea(height):
  areas = []
  for x in range(len(height)-1):
    nums = []
    for y in range(0,len(height)):
      if height[x] > height[y]:
        nums.append(height[y] * y)
      else:
        nums.append(height[x] * y)
    areas.append(max(nums))
  return max(areas)
```
*간단하게 풉시다!!!*
