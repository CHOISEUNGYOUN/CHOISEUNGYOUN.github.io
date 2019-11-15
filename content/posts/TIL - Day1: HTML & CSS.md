---
title: "TIL - Day1: HTML & CSS"
date: "2019-07-29T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL-Day1:-HTML-&-CSS/"
category: "TIL"
tags:
  - "HTML"
  - "CSS"
description: "위코드 1일차."
---

<!-- - [The first transition](#the-first-transition) -->

새로운 부트캠프에서 새로운 과정을 시작하였으니, 새롭게 시작한다는 마음으로 velog를 시작하게 되었다. 사족은 이쯤에서 끝내도록 하고, 어제 배운 HTML과 CSS중, 새롭게 알게된 부분에 대해 정리 해 보고자 한다.

+ Indentation & Non-breaking Space(&nbsp or &#160)
 + Non-breaking Space - 줄 바꿈 없는 공백(&nbsp or &#160)
이번에 새롭게 정리하면서 알게 된 기능이다. HTML을 작성하면서 띄어쓰기는 항상 어떻게 작성 할 수 있을까 고민을 많이 하였었는데, 이것이 나의 고민을 어느정도 해결 해 주었다. 우선 HTML에서 바로 공백을 삽입하고 싶다면, 공백을 나타내는 기호인 &nbsp나 공백의 주소값인 &#160을 작성 해 주면, HTML이 해당 기호를 " "(space)로 읽어 우리에게 보여준다.
```HTML
e.g.)
<h1>&nbsp Hello &nbsp</h1> <!--" Hello " -->
<h1>&#160 Hello &#160</h1> <!--" Hello " -->
```
위의 코드예시는 Hello의 앞뒤로 공백이 있다는 것으로 인식하고 HTML 페이지를 출력 시켜 줄 것이다.

 + Indentation(들여쓰기)
들여쓰기를 CSS에서도 구현 할 수 있다! 이를 구현 해주는 속성이 바로 text-indent이다. text-indent의 작성법은 하기와 같다.
```CSS
anyTag {
text-indent : 10px;
}
```
이처럼 작성 해 준다면, font-size 10px기준 공백 2칸을 얻을 수 있을 것이다.

+ Border
Border는 페이지 만들 때 마다 사용 하였는데, border 속성 부여방법을 제대로 몰라 매번 border-style, border-width 등 비효율적인 작업을 했던 것 같다. 그래서 다음 부터는 좀 더 간결하게 작성하기 위해 작성법을 한번 정리 해 보았다.
```CSS
anyTag {
border: 10px(thickness) solid(style) red(color);
}
```
괄호 안에 작성 순서를 적어 놓았으니 참고 하면 좋을 것 같다.

배고파서 여기까지만 작성하고 내일 아침에 다시 정리 하도록 하겠습니다~~~












*필자가 영문으로 기입하는 이유는, 나중에 코드 작성할 시, 결국 영문으로 작성하기에 나중에 좀 더 찾기쉽고 기억하기 쉽게 하기 위해 중요 키워드는 영문으로 작성하려고 한다.*