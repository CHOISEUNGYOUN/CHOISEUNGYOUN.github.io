---
title: "Django admin-2"
date: "2020-02-28T20:40:32.169Z"
template: "post"
draft: false
slug: "/posts/django-admin-2/"
category: "Django"
tags:
  - "Django"
  - "Python"
  - "Django admin"
description: "Django admin 에 대해서 알아보자-2"
---
+ ### 관련 포스팅 [Django admin-1](https://choiseungyoun.github.io/posts/django-admin-1/)

저번 포스팅에서 예고했듯이, 이번에는 데이터 정렬, 다대다 테이블을 보여주는 옵션들을 한번 살펴보자.

### 1. list_filter

[Django](https://docs.djangoproject.com/en/3.0/ref/contrib/admin/) 공식문서에 따르면, `admin class`에 `list_filter` 를 지정해 주면, 해당 값으로 필터링 할 수 있는 사이드바가 생긴다. 해당 필터는 튜플 또는 리스트로 지정해주면 되며, 해당 기능을 사용함으로써, admin에서 원하는 조건대로 정렬해서 볼 수 있다.

```Python
@admin.register(models.Room)
class RoomAdmin(admin.ModelAdmin):

    list_filter = (
        "instant_book",
        "host__superhost",
        "room_type",
        "amenities",
        "facilities",
        "house_rules",
        "country",
        "city",
    )
```

### 2. ordering

ordering은 `admin`에서 어떤 속성들을 기준으로 순차적으로 정렬 할 것인지 조건을 부여 하는것인데, `view class`에서 자주 사용하는 `ordered_by`와 거의 비슷하다고 보면 된다. 역시, 튜플 또는 리스트로 해당 조건을 지정해 주며, 인덱스 순서대로 우선순위 정렬이 된다.

```Python
@admin.register(models.Room)
class RoomAdmin(admin.ModelAdmin):

    ordering = ("name", "price", "bedrooms")

```

### 3. filter_horizontal & filter_vertical

기본적으로 다대다 테이블은 admin panel 에 컬럼, 인덱스 형식으로 lookup이 되지 않는다. 대신에, `filter_horizontal`과 `filter_vertical`이 존재하는데, 해당 기능을 통해 모델간 연결되어있는 다대다 관계 데이터들을 볼 수 있다. 여기서 horizontal과 vertical의 차이는 단지 말 그대로 좌우로 보여줄것인지, 상하로 보여줄것인지에 대한 차이다.

```Python
@admin.register(models.Room)
class RoomAdmin(admin.ModelAdmin):

    filter_horizontal = (
        "amenities",
        "facilities",
        "house_rules",
    )
```

이렇게 테이블을 정렬해 놓는다면, admin 기능을 적극 사용하는 Django 유저라면 얼마든지 편리하게 데이터를 관리할 수 있다!!!

*Reference:
[The Django admin site](https://docs.djangoproject.com/en/3.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.filter_vertical)
