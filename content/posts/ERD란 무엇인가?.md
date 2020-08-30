---
title: "ERD란 무엇인가?"
date: "2020-08-30T22:30:32.169Z"
template: "post"
draft: false
slug: "/posts/what-is-erd/"
category: "TIL"
tags:
  - "Database"
  - "ERD"
  - "Wecode"
  - "위코드"

description: "ERD에 대해 알아보자!"
---

#### 회사에서 SQL을 다루다가 문득 생각해보니 제대로된 가이드가 없어 데이터 정제를 하는데 어려움을 겪게 되었다.
#### 이왕 하는 김에, 매번 연관된 테이블들을 머릿속으로 도식화 하는것보다 ERD로 시각화 하여 차후에 다른 분들이 개발을 맡게 되더라도 도움이 되도록 구성을 해보려고 한다.


### ERD(Entity Relationship Diagram)
한국말로 직역하자면 개체-관계 모델이다. 쉽게 생각하면, 테이블간의 관계를 설명해주는 다이어그램이라고 볼 수 있으며, 이를 통해 프로젝트에서 사용되는 DB 의 구조를 한눈에 파악할 수 있다.
즉, API를 효율적으로 뽑아내기 위한 모델 구조도라고 생각하면 된다.


### ERD Notation

ERD에는 여러 기호들로 관계를 표현할 수 있으나, 기호들만 숙지하여도 충분히 표현 가능하다.

<figure style="width:480px;">
    <img src="/imgs/ERD/erd-1.jpg" alt="ERD-1">
</figure>

상기에 나와있는 기호들을 하나하나씩 살펴보자.

#### 1. One
일대일 혹은 일대다 관계이다. 주로 하나의 외래키가 걸린 관계라고 보면 된다.

#### 2. Many
다대다 관계이다. 중계 테이블을 통하여 여러개의 데이터를 바라보고 있을때 사용한다.

#### 3. One (and only one)
위의 조건과 동일하게 일대일 관계이나, 하나의 row끼리만 연결된 데이터이다.

#### 4. Zero or one
일대일 혹은 일대 다 관계를 가지고 있으나, 필수 조건이 아님을 의미한다. 비유를 하자면 개인정보 동의시, 필수값 구분과 선택값 구분이라고 보면 될 것 같다.

#### 5. One or Many
일대일 혹은 다대다 관계를 가지고 있음을 의미한다. 관계를 가지고 있으나, 참조되는 row값들이 불명확함을 의미한다.

#### 6. Zero or Many
참조하는 테이블과의 관계가 불명확한 경우이다. 장바구니처럼 row 생성값이 없을수도, 하나일수도, 여러개일 수도 있는 경우이다.




#### 상기 기호들만 참고하여 사용해본다면, 그럭저럭 쓸만한 ERD를 구성할 수 있다.



\*Reference:<br/>
[Lucidchart - What is an Entity Relationship Diagram (ERD)?](https://www.lucidchart.com/pages/er-diagrams)<br/>
[Lucidchart - Entity-Relationship Diagram Symbols and Notation](https://www.lucidchart.com/pages/ER-diagram-symbols-and-meaning#:~:text=ERD%20attribute%20symbols,in%20a%20conceptual%20ER%20diagram.)<br/>
