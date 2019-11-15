---
title: "TIL - Day2: CSS-Flex"
date: "2019-07-30T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL-Day2:-CSS-Flex/"
category: "TIL"
tags:
  - "HTML"
  - "CSS"
description: "Flex에 대한 정리입니다."
---

<!-- - [The first transition](#the-first-transition) -->

CSS3는 2011년 6월 7일 최초 Color 모듈이 발행된 이후로 꾸준히 업데이트 되고있는 최신 CSS 기능이다. 현재도 꾸준히 업데이트가 되고 있으며, CSS3의 등장으로 인해 기존에 사용되던 Bootstrap과 같은 CSS 라이브러리는 J-Query와 함께 레거시가 되었다.
***레거시- 신규 기술 등장으로 인해 기존 기술이 도태되는 현상.*

그 중에서, layout 을 잡아주는 Flex 라는 기능은 현재까지 배운 CSS 기능 중 가장 강력하다고 생각한다. 그리하여 오늘은 Flex에 대해서 자세하게 이야기를 해보고자 한다.

1. 레이아웃 모듈의 종류
Flex를 언급하기에 앞서, layout을 정의해주는 display 속성은 4가지가 있다.
	+ Block - 한 섹션을 모두 차지한다. <div>태그의 요소에 block이 있다.
	+ Inline - 텍스트와 동일한 속성을 지니게 된다. <span>태그를 생각하자.
	+ Table - 2차원적 테이블 데이터를 보여준다. 엑셀을 연상하자.
	+ Positioned - 속성의 위치를 임의로 지정한다.

  Flex 또한 display 속성이며, flex를 조작하기 위해서는, flex 를 감싸주는 부모 태그가 필요하다. 그러니 flex 속성을 사용하기 이전에, 반드시 <div>태그와 같은 블럭을 생성하여 flex가 적용될 태그들을 담아줘야 한다.
  e.g.)
```HTML
  //HTML
  <div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  </div>
  //CSS
  .flex-container :{
		display: flex;
  }
```
위와 같이 작성을 한다면, 이제 flex 속성을 조작할 준비가 완료되었다.

2. Flex 속성의 종류
  Flex는 크게 6가지 아이템으로 layout을 조정 할 수 있다.
  + flex-direction
  + flex-wrap
  + flex-flow
  + justify-content
  + align-items
  + align-content
 
  상기 6가지 기능을 통해 조정을 할 수 있으니, 하나씩 알아가보도록 하자.
	+ flex-direction:
flex-direction은 flex 블록안에 존재하는 요소들을 가로, 세로 또는 반전으로 정렬 할 것인지 결정하는 요소이다. 종류는 하기 4가지가 존재한다.
  ```CSS
  flex-direction: row; // 가로 왼쪽 기준 정렬
  flex-direction: row-reverse; // 가로 오른쪽 기준 정렬
  flex-direction: column; // 세로 위로 정렬
  flex-direction: column-reverse; // 세로 아래로 정렬
  ```
  
  + flex-wrap:
  flex-wrap은 flex가 부여된 태그들을 부모 태그에 맞추어 정렬 할 것인지, 반전으로 정렬할 것인지에 대한 속성이다.
  ```CSS
  flex-wrap: nowrap; // 부모 태그의 영역에 종속되지 않음
  flex-wrap: wrap; // 부모 태그의 영역에 종속됨
  flex-wrap: wrap-reverse; // 부모 태그의 영역에 종속되며 좌우 반전으로 정렬
  ```
  + flex-flow:
  flex-flow는 flex-direction과 flex-wrap을 결합한 기능이다. 사용 예시는 하기와 같다.
  ```
  flex-flow: row(flex-direction 속성) wrap(flex-wrap 속성);
  ```
  
  + justify-content:
	justify-content는 flex 속성들을 좌우 위치를 결정 해 주는 요소이다. 사용예시는 하기와 같다.
  ```CSS
  justify-content: start; // 좌측 시작점 기준으로 정렬
  justify-content: center; // 좌측 시작점 기준 가운데 정렬
  justify-content: space-between; // 요소들 사이에 동일한 간격을 부여
  justify-content: space-around; // 요소들 주위에 동일한 간격을 부여
  ```
  
  + align-items:
  flex-direction가 가로 기준 정렬이었다면, align-items는 세로 기준 정렬 기능을 제공 해 준다.
  ```CSS
  align-items: flex-start; // 좌측 시작점 기준 상단 정렬
  align-items: flex-end; // 좌측 시작점 기준 하단 정렬
  align-items: center; // 좌측 시작점 기준 중간 정렬
  align-items: baseline; // 요소 시작점 정렬
  align-items: stretch; // 요소들을 부모 태그의 범위에 맞추어 정렬
  ```
  
  + align-content:
  justify-content의 세로 버전 정렬이다.
  ```CSS
  align-content: start; // 좌측 시작점 기준 정렬
  align-content: center; // 좌측 시작점 기준 가운데 정렬
  align-content: space-between; // 요소들 사이에 동일한 간격을 부여
  align-content: space-around; // 요소들 주위에 동일한 간격을 부여
  ```
  
  이외에 order, align-self 기능이 있으니 MDN이나 W3S를 참고하면 좋을 것 같다.
  
  *reference : https://flexboxfroggy.com/#ko - FLEXBOX FROGGY*
  *https://www.w3schools.com/css/css3_flexbox.asp - W3S Flexbox*
  *https://developer.mozilla.org/en-US/docs/Web/CSS/flex - MDN Flex*
  *http://www.beautifulcss.com/archives/2812?source=post_page - BeautifulCSS.com*