---
title: "Django admin-1"
date: "2020-02-20T20:40:32.169Z"
template: "post"
draft: false
slug: "/posts/django-admin-1/"
category: "Django"
tags:
  - "Django"
  - "Python"
  - "Django admin"
description: "Django admin 에 대해서 알아보자"
---

오늘부터 Django 를 좀 더 자세히 공부 해보고자 Django의 기능을 하나하나 기록을 해보는 시간을 가져보고자 한다.
우선 Django에서 가장 강력한 기능중에 하나인 Django admin에 대하여 차근차근히 알아보고자 한다.

### 1. ModelAdmin class

ModelAdmin 은 `admin.py` 에서 가장 기본적으로 사용 되어야 하는 클래스이며, `admin.py` 의 모든 클래스는 ModelAdmin 속성을 상속받아 작성되어야 한다.
만약, admin의 기본 형테로만 사용을 하고 싶다면 굳이 사용하지 않아도 된다.

### 2. The register decorator

Register 데코레이터는 `admin.py` 내부의 각 클래스에 지정하여 해당 클래스를 admin 페이지에서 볼 수 있도록 설정하는 기능이다. 불러오는 형태는 다음과 같다.

```Python
from django.contrib import admin
from .              import models

@admin.register(models.Reservation)
class ReservationAdmin(admin.ModelAdmin):
    pass
```

위와 같은 형태로 `models.py`에 등록된 class를 지정하면 된다. 해당 데코레이터를 호출하지 않으면, admin 페이지에 model 데이터가 등록되지 않으니 유의하자.

추가로, register 함수에는 site라는 인자가 있는데, 이 인자를 이용하면, 본인이 커스텀한 admin 페이지에 연결 할 수 있다.

### 3. ModelAdmin.list_display

list_display 는 `models.py` 에서 작성한 모델의 어느 필드값을 보여 줄 것인지 정해주는 속성이다. 튜플 또는 리스트로 작성이 되며, 기본 속성은 지정된 인덱스 순서대로 admin 페이지에 보여준다. 여기서 중요한 특징이 있는데 그 특징은 하기와 같다.

##### a. 해당 필드가 ForeignKey 라면, ForeignKey 부모 필드의 **str** 속성에 지정된 값을 보여준다.

##### b. ManyToManyField는 지원하지 않는다.(MtoM Field에 대한 호출 쿼리가 다르기 때문. MtoM 을 호출 하는 방법은 대부분 inner join으로 이루어진다.)

##### c. BooleanField 는 True, False 를 리턴하지 않고 O, X 로 렌더링 된다.

```Python
@admin.register(models.Reservation)
class ReservationAdmin(admin.ModelAdmin):

    """ Reservation Admin Definition """

    list_display = (
        "room",
        "status",
        "check_in",
        "check_out",
        "guest",
        "in_progress",
        "is_finished",
    )
```

### 4. ModelAdmin.fieldsets

필자가 생각하는 Django admin의 또 다른 장점인데, fieldssets 로 admin 페이지에서 각 섹션별로 보여 줄 데이터를 묶음으로 처리하여 보여준다. 딱딱 구분이 잘 되어있는 페이지를 보여주고 싶다면 반드시 사용해아 될 기능이라고 생각한다. 역시 튜플과 딕셔너리의 조합으로 만들어지며 형태는 하기와 같다.

```Python
@admin.register(models.Room)
class RoomAdmin(admin.ModelAdmin):

    """ Room Admin Definition """

    inlines = (PhotoInline, )

    fieldsets = (
        (
            "Basic Info",
            {"fields": ("name", "description", "country", "city", "address", "price", "room_type")},
        ),
        (
            "Times",
            {"fields": ("check_in", "check_out", "instant_book")},
        ),
        (
            "Spaces",
            {"fields": ("guests","beds","bedrooms","baths")},
        ),
        (
            "More About Spaces",

            {
                "classes" : ("collapse",),
                "fields": ("amenities", "facilities", "house_rules")
            },
        ),
        (
            "Last Details",
            {"fields": ("host",)}
        )
    )
```

여기까지 기본적으로 데이터를 보여 줄 수 있는 형태를 알아보았으며, 다음 포스팅은 데이터 정렬, 필터링 및 MtoM 필드를 보여 줄 수 있는 기능들을 살펴보도록 하겠다.

\*Reference:
[The Django admin site](https://docs.djangoproject.com/en/3.0/ref/contrib/admin/)
