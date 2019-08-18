---
title: "TIL - Day10: MVT"
date: "2019-08-08T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL - Day10: MVC/"
category: "TIL"
tags:
  - "Django"
  - "MVC"
  - "Python"
  - "Foundation"
  - "Design Pattern"

description: "Django의 기본 개념 MVT 에 대해 알아보자"
---

<!-- - [The first transition](#the-first-transition) -->

Django를 직접 다루기 전 기본적인 개념을 습득하는 단계로 Django framework의 MVT architecture 에 대해 파악 해보도록 하겠다.

![MTV](https://d2h0cx97tjks2p.cloudfront.net/blogs/wp-content/uploads/sites/2/2019/03/Django-Architecture-Diagram.jpg)
*MVT schematics / Reference: [Data Flair](https://data-flair.training/blogs/django-architecture/)*
### 1. Model
Model은 Django.db 에 존재하는 하나의 클래스라고 보면 된다. Django 가 지향하는 ORM(Object-relational mapping, 객체 관계형 매핑, 일반적으로 관계형 DB 라고 일컫는다.)에서 데이터 정형화를 담당한다고 볼 수 있다. DB에 존재하는 data를 server에서 요청하는 형태에 맞추어 제공하는 역할을 한다.

### 2. View
기존 MVC(Models-Views-Controller)에서는 사용자에게 페이지를 렌더링하여 보여주는 구간을 일컫는 말이었으나, Django framework에서는 Controller의 기능을 담당한다.*__(정확하게 Controller와 동일한 개념은 아니다.)__*
우리가 만들 API에서 데이터 송출 및 수정*__(POST 의 기능, 다음 포스팅에서 다루겠다.)__*을 담당한다.

### 3. Template
기존 MVC 에서 Views를 담당하는 부분. HTML을 직접 전송하여 사용자 화면에 렌더링 되게 구현한다. 이 부분은 server에서 직접 HTML을 보내는 방식이 되므로, 3세대 Web Application정의에서 위배된다. Django는 2세대 방식, 즉 server에서 full web application을 구현하기 위해 개발된 framework이기에, 이러한 기능들을 구현 할 수 있으나, 현재는 잘 사용되지 않는 방식이다.


이렇게 기본적인 개념들을 정리 해 보았으니, 다음 포스팅에서 부터는 MVT 중에서도 MV를 중점적으로 다루어 실제 API를 작성 해보는 과정을 기술하도록 하겠다.

*Reference : [Wikipedia: Object-relational mapping](https://en.wikipedia.org/wiki/Object-relational_mapping)</br>
[Data Flair: Django Architecture](https://data-flair.training/blogs/django-architecture/)</br>
[Data Flair: Django Models](https://data-flair.training/blogs/django-models/)</br>
[Data Flair: Django Views](https://data-flair.training/blogs/django-views/)</br>
[Data Flair: Django Templates](https://data-flair.training/blogs/create-django-templates/)*</br>
