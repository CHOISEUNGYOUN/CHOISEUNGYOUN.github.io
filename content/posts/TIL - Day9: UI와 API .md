---
title: "TIL - Day9: UI와 API"
date: "2019-08-07T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL-Day9:-UI와-API/"
category: "TIL"
tags:
  - "Programming"
  - "UI"
  - "API"
  - "Foundation"

description: "우리가 말하는 UI와 API는 무엇일까요?"
---

<!-- - [The first transition](#the-first-transition) -->

Foundation Course의 과제는 Django 프레임워크를 사용하여 내가 만든 Tweeter에 사용될 API를 작성하는 것이다. 이를 구축하기 위하여 Python과 Django에 대한 공부를 하던 중, API가 과연 무엇인가에 대한 의문이 들기 시작했다. 솔직히 지금 Django 도 여러 엔지니어들의 소스코드나 설명들을 들으면서 겨우 따라 치는 수준인데 이에 대한 기본 개념 없이 제대로 작성 할 수 있을까 걱정이 되기 시작했다. 그리하여 Django에 대한 학습을 잠시 중단하고 나의 과제의 근간이 되는 UI와 API에 대한 개념들을 정리 해보고자 한다.

### UI(User Interface):
UI에 대한 Wikipedia의 정의는 다음과 같다:
>사용자 인터페이스(영어: user interface, UI)는 사람(사용자)과 사물 또는 시스템, 특히 기계, 컴퓨터 프로그램 등 사이에서 의사소통을 할 수 있도록 일시적 또는 영구적인 접근을 목적으로 만들어진 물리적, 가상적 매개체를 뜻한다. 사용자 인터페이스는 사람들이 컴퓨터와 상호 작용하는 시스템이다. 사용자 인터페이스는 물리적인 하드웨어와 논리적인 소프트웨어 요소를 포함한다. 사용자 인터페이스는 크게 다음과 같은 수단을 사용한다.
입력: 사용자가 시스템을 조작할 수 있게 한다.
출력: 시스템이 사용자가 이용한 것에 대한 결과를 표시한다.

위의 정의를 읽다 보면 무언가 떠오르지 않는가? 우리가 알고 있는 Front-end라는 영역이 떠오를 것이다. 위키백과의 설명대로 이해를 해 본다면, Front-end engineer들은 UI/UX를 책임지는 감성(?)적인 사람들이라고 보면 된다. 자, 그럼 Front-end engineer들이 UI/UX 부분을 담당한다면 필자가 하게 될 Back-end는 무엇을 담당하게 될까?

### API(Application Programming Interface)
API에 대한 위키백과의 정의는 하기와 같다.
>API(Application Programming Interface, 응용 프로그램 프로그래밍 인터페이스)는 응용 프로그램에서 사용할 수 있도록, 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스를 뜻한다. 주로 파일 제어, 창 제어, 화상 처리, 문자 제어 등을 위한 인터페이스를 제공한다.

자, 위의 설명과 UI의 설명을 토대로 API에 대하여 곰곰히 생각해보자. 연결해 보자면, UI를 구현하기 위한 기능들을 제공해주는 장치가 바로 API라고 볼 수 있다. 우리가 지금 사용하고 있는 운영체제, 웹브라우저, 기타 응용소프트웨어가 모두 API가 될 수 있는 것이다.

### 결국 나는 UI/UX를 구현해 줄 수 있는 하나의 장치를 만들어야 한다.

눈 앞에 보이는 모든 것들이 유연하게 작동하기 위한 데이터 수집 및 관리에 대한 기본적인 장치들을 만들어야 하는 것이다. 자, 이제 내가 무엇을 만들어야 하는지 명확 해 졌으니 다시 작업을 하기 위한 Django 탐험을 하도록 하겠다~~

*Reference:
[Wikipedia: API](https://ko.wikipedia.org/wiki/API) 
[Wikipedia: UI](https://ko.wikipedia.org/wiki/%EC%82%AC%EC%9A%A9%EC%9E%90_%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4)*
