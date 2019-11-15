---
title: "TIL - Day28: Class-based View "
date: "2019-08-26T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL-Day28:-Class-based-View/"
category: "TIL"
tags:
  - "Python"
  - "Django"
  - "Views"
  - "MVT"

description: "Django의 Class-based Views에 대해 한번 알아보자!!"
---
그동안 1차 프로젝트를 진행하느라 개념 정리에 소홀해 졌었다.(~~그래도 주 5개 포스팅은 지킬려고 Code kata로 때웠다~~)</br>
어찌됐든 내가 맡은 부분은 어느정도 완성되었기에, 오늘부터 다시 개념정리를 꼼꼼하게 해보려고 한다. 특히 Django를 학습하는 사람이라면 더더욱 이 부분에 대해서 절실하게 깨달을 건데,
그 이유는 바로 Django의 기능이 3세대 웹 기술과는 조금 동떨어져 있기 때문이다. 이런 관점을 생각하지 않고 Django를 접하게 된다면 아마 머나먼 산으로 떠나게 될 것이다.(~~필자도 멀리 갔다 왔었다~~)</br>
특히 우리가 중요하게 다룰 Class-based Views 속성에 backend를 공부하는 Python 유저에게 필요 없는 것들이 많아, 우리가 직접 사용할 중요한 개념만 짚어보고자 한다.

##Class-based Views 란 무엇인가???
Class-based Views는 말 그대로 Django의 Views class 속성을 의미한다. 즉, Views에서 함수형으로 데이터를 보여 줄 수도 있고, class형으로 보여줄 수 있다는 말이다. 필자는 이번 프로젝트에서 철저히 Class-based Views 속성에서도 django.views.generic.base.View 속성만 사용하였다. __(3세대 웹 개발 패러다임을 고려한다면 base만 사용해도 충분히 모든 기능을 구현할 수 있으니 당장 필요하지 않다면, 학습하지 않는것이 좋다.)__</br> 그럼 Base view에 대한 기능들을 하나씩 살펴보자.

###1. View class의 HTTP method 수신 & 송출을 담당한다.
View를 class로 상속 받은 class는 base view에 있는 HTTP 통신 프로토콜에 대한 기능들 또한 상속받는다. 그리하여 프론트엔드에서 요청하는 HTTP 종류에 따라 그에 맞는 함수를 사용하여야 한다. 해당되는 함수의 종류는 다음과 같다.
```
['get', 'post', 'put', 'patch', 'delete', 'head', 'options', 'trace']
```
이외에 connect 기능이 있으나, Django Views class에서는 지원하지 않는다.
또한, 8가지 기능이 있다고 하더라도, 기본적으로 get, post, delete 세가지 기능 외에는 잘 사용되지 않는다. 이에 대한 간단한 예시를 코드로 첨부하겠다.
```python
class TweetsView(View):
	
  #get으로 tweet data 송출
  def get(self, request, pg_num):
		user_tweets = Tweets.objects.values()
		return JsonResponse(list(user_tweets), safe=False, status=200)

  #post로 tweet 작성
	def post(self, request):
		data = json.loads(request.body)
		tweet = Tweets(user=data['user'],
				      content=data['content'])
		tweet.save()
		return JsonResponse({"message":"SUCCESS"}, status=200)
```
아마 위의 두가지 기능이 가장 많이 사용될 것이기에, Django를 처음 접하시는 분이라면 위의 구조를 하나하나씩 살펴보면 좋을 것 같다.

###2. Class 단위로 url(또는 endpoint)를 생성 및 참조한다.
base view를 상속받은 class가 제대로 작동하기 위해서는 endpoint를 생성할 필요가 있다. 이를 인식하는 방법이 urls.py에서 path() 메서드를 활용하여 해당 endpoint가 view class 참조 할 수 있도록 만들 수 있다.

```python
from django.urls import path 
from .views import TweetsView
 
urlpatterns = [
     path('<int:pg_num>/', TweetsView.as_view()),
]
```
상기 코드는 TweetsView라는 View class에 <int:pg_num>으로 숫자로 end-point를 가리킨다는 의미로 작성되었다. 여기서, View의 as_view라는 메서드를 사용하였는데 이를 통하여 우리가 작성한 View들이 HTTP 통신들을 받을 수 있도록 도와준다. as_view의 Django source code는 다음과 같다.

```python
    def as_view(cls, **initkwargs):
        """
        Main entry point for a request-response process.
        """
        for key in initkwargs:
            if key in cls.http_method_names:
                raise TypeError("You tried to pass in the %s method name as a "
                                "keyword argument to %s(). Don't do that."
                                % (key, cls.__name__))
            if not hasattr(cls, key):
                raise TypeError("%s() received an invalid keyword %r. as_view "
                                "only accepts arguments that are already "
                                "attributes of the class." % (cls.__name__, key))

       def view(request, *args, **kwargs):
            self = cls(**initkwargs)
            if hasattr(self, 'get') and not hasattr(self, 'head'):
                self.head = self.get
            self.request = request
            self.args = args
            self.kwargs = kwargs
            return self.dispatch(request, *args, **kwargs)
        view.view_class = cls
        view.view_initkwargs = initkwargs

        # take name and docstring from class
        update_wrapper(view, cls, updated=())

        # and possible attributes set by decorators
        # like csrf_exempt from dispatch
        update_wrapper(view, cls.dispatch, assigned=())
        return view
```
좀 더 이해 할 수 있도록 view 함수와 함께 가져왔는데,(상기 코드는 Django source code이다.) 위에서 볼 수 있듯이, as_view()라는 메서드가 end-point로 향하는 entry-point 역할을 수행하며, HTTP request & response만을 수신 및 송출 할 수 있도록 도와준다.

이정도 까지만 이해 한다면, 당신도 바로 Django로 backend를 구축할 수 있다!!!

*Reference: [Vitor Freitas - Class-Based Views vs. Function-Based Views](https://simpleisbetterthancomplex.com/article/2017/03/21/class-based-views-vs-function-based-views.html)</br> [Django - Introduction to class-based views](https://docs.djangoproject.com/en/2.2/topics/class-based-views/intro/)</br> [Django - Base views](https://docs.djangoproject.com/en/2.2/ref/class-based-views/base/#django.views.generic.base.View.http_method_names)</br> [Github - Django](https://github.com/django/django/blob/1.10.6/django/views/generic/base.py#L46)*