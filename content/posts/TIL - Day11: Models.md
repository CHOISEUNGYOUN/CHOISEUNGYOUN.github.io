---
title: "TIL - Day11: Models"
date: "2019-08-09T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL-Day11:-Models/"
category: "TIL"
tags:
  - "Django"
  - "Models"
  - "Python"
  - "Foundation"
  - "Design Pattern"

description: "Django의 Models 에 대해 알아보자"
---

이전 포스팅에서 MVT에 대한 간략한 개요를 살펴보았다면, 이번 포스팅에서는 MVT의 한 축인 Models에 대해 이야기 하고자 한다.*__(참고로 Templates 는 다루지 않을 예정.)__*

### Models는 무엇인가???
Models 는 Data를 server에서 요청하는 형태로 parsing 해주는 Django의 class이다. 일반적으로 각 모델은 하나의 DB 테이블을 매핑 해준다. 기본적인 특징은 다음과 같다.

+ 각 모델은 파이썬 내의 django.db.models.Model의 하위클래스이다.(그래서 model.py 파일을 열어보면 django.db에서 models라는 class를 import 하는것을 default로 지정되어 있는 것을 확인 할 수 있다.)

+ 모델의 각 속성들은 DB field 를 반영한다.
(field 지정으로 틀을 잡아준다는 이야기.)

e.g.)
```Python
from django.db import models

# Create your models here.
class Tweets(models.Model):
    tweet_id = models.CharField(max_length=20)
    user = models.CharField(max_length=20)
    content = models.TextField(max_length=300)
```
Django의 내장 메서드를 사용하면 위와 같이 server에서 요청하는 data들을 원하는 형식에 맞게 DB에서 뽑아 낼 수 있다.</br> *__(어찌 JS의 Class 포스팅 할때랑 똑같아 보이는건 느낌적인 느낌???)__*

그렇기에, 원하는 Data set을 뽑아낼 때, Django의 datafield 를 찾아서 조건에 알맞게 작성하면 된다.
조건들은 [공식문서 참조](https://docs.djangoproject.com/en/2.2/ref/models/fields/#django.db.models.CharField).</br>
*(원하는 data field를 가늠할 수 없다면 [여기](https://www.webforefront.com/django/modeldatatypesandvalidation.html) 를 참조. __더 빠르게 screening 할 수있다!!__)*

자, 여기까지가 Models에 대한 소개였다면, 추가적으로 Coding Convention에 대해서도 살펴보자. </br>*__(Bootcamp에 참여하게 되면서, 다른 분들에게 코드 공유하고 피드백 받는 경우가 점점 많아지면서, Coding Convention에 대한 중요성을 깨닫고 있어서 작성해본다.)__*

1. Model의 첫 글자는 Capital로 작성할 것.
이 부분은 JS에서 class 언급 할 때랑 동일하다. 보통 변수를 camelCase로 작성하는것과는 다르게 해당 값이 class라는 것을 명시적으로 표현하기 위한 일종의 규약이라고 보면 된다.</br>*(솔직히 이정도면, 문법이라고 해야하지 않나?????)*

2. Field name의 단어 spacing을 camelCase가 아닌 _(underscore)로 구분 한다.
이 부분은 처음 알게되었다. class 에 종속된 부분들을 표현 해주기 위해서 Capital letter 와 동일한 맥락으로 이해된다.

3. 변수명은 한번에 이해하기 쉽게 작성할 것.
이 부분은 언제나 강조되는 부분이다. 특히 파이썬에서는 더욱 더 중요하다고 볼 수 있다.(잊지 말자. [Explicit is better than implicit!](https://www.python.org/dev/peps/pep-0020/))

이외에도 더 많은 Coding Convention이 존재하나, 현재 여기까지만 이해 할 수 있었기에(힘들다...) 추가적으로 알게 되는 부분이 있다면 다시 포스팅 하도록 하겠다.

*Reference:
[William Vincent : Django Models Best Practices
](https://wsvincent.com/django-models-best-practices/)</br>
[Web Forefront:Django model data types](https://www.webforefront.com/django/modeldatatypesandvalidation.html)</br>
[Django : Models](https://docs.djangoproject.com/en/2.2/topics/db/models/)</br>


