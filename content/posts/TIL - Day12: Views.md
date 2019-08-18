---
title: "TIL - Day12: Views"
date: "2019-08-10T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL - Day12: Views/"
category: "TIL"
tags:
  - "Django"
  - "Views"
  - "Python"
  - "Foundation"
  - "Design Pattern"

description: "Django의 Views 에 대해 알아보자"
---

이번 포스팅은 장고 기본 개념 MVT의 Views에 대해 이야기 하고자 한다.*(Templates는 아직 사용 하지 않을거라서 정리하지 않겠다.)*

### View ??????
처음에 View를 보았을 때, 단어와 개념이 명확하게 이어지지 않아 정말 혼란스러웠다.
*(~~이럴땐 implicit 하게 해놓았다. 거짓말쟁이...~~)*
그렇게 View를 이해하기 위해 인터넷을 헤메고 헤메다 결국 처음에 보았던 공식문서에서 해답을 찾았다.

>A view function, or view for short, is simply a Python function that takes a Web request and returns a Web response. This response can be the HTML contents of a Web page, or a redirect, or a 404 error, or an XML document, or an image . . . or anything, really. The view itself contains whatever arbitrary logic is necessary to return that response. 

*__원문 출처: [Django - Writing Views](https://docs.djangoproject.com/en/2.2/topics/http/views/)__*

여기서 세가지 특징이 보인다.
1. View는 Python의 function이다.
2. View는 Web request와 response를 담당한다(수신 & 송출의 기능)
3. View는 작성자의 logic에 따라 송출 할 조건들을 설정 할 수 있다.(POST를 사용하면 Data Update도 할 수 있다.)

필자가 이해 한 바로는 쌍방향 통신 채널 기능을 담당하는 것이 바로 Django의 View라고 보여진다. 

이제 조금씩 View에 대한 감이 잡히기 시작했다. 하지만 여기서 또 다른 난관이 등장한다. 그것은 바로 Function-based View(함수형 View)와 Class-based View(Class형 View)이다.

### Function-based Vs. Class-based
솔직히 Backend 분야를 거의 처음 접하다시피 하는 필자에게는 도데체 이 두가지가 무슨 차이를 가져올까 하는 의문을 가졌었다. 그런데 결론은 결국 또 본질에 있었다.(~~__이건 명시적이네???__~~) 공식 문서에 있는 예시 코드를 같이 살펴보자.

```Python
#Function-based
from django.http import HttpResponseRedirect
from django.shortcuts import render

from .forms import MyForm

def myview(request):
    if request.method == "POST":
        form = MyForm(request.POST)
        if form.is_valid():
            # <process form cleaned data>
            return HttpResponseRedirect('/success/')
    else:
        form = MyForm(initial={'key': 'value'})

    return render(request, 'form_template.html', {'form': form})


#Class-based
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.views import View

from .forms import MyForm

class MyFormView(View):
    form_class = MyForm
    initial = {'key': 'value'}
    template_name = 'form_template.html'

    def get(self, request, *args, **kwargs):
        form = self.form_class(initial=self.initial)
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)
        if form.is_valid():
            # <process form cleaned data>
            return HttpResponseRedirect('/success/')

        return render(request, self.template_name, {'form': form})

```
적절한 예시는 아니겠지만, 위에서 볼 수 있듯이, 함수형은 단지 수신시, POST 메서드만 가지고 송신을 하겠다고 정의 되어있다. 만약 GET이나 다른 메서드를 사용해야 한다면, 각 수신에 따른 조건을 걸고 비슷한 논리의 코드를 재 작성해야하는 [boilerplating](https://en.wikipedia.org/wiki/Boilerplate_code)을 해야 할 것이다.

### 그럼 class형이 항상 옳은 것인가?
아니다. 제각각 필요한 때가 있고, 어떻게 사용 할 것인지는 코드 작성자의 재량이다.(~~__나는 그럴 능력 없다__~~)
그럼 각각의 장단점을 살펴보자.

#### 함수형
##### 장점
+ 논리 구현하기 쉽다.
+ 코드가 직관적이다.
+ decorator를 적용하기 쉽다(~~사실 잘 모르겠다.~~)
+ 재사용할 필요없는 기능을 구현할 때 적절하다.

##### 단점
+ 재사용성이나 확장성이 떨어진다.
+ Bolierplating의 위험이 항상 도사리고 있다.

#### Class형
##### 장점
+ 재사용성이 높다(특히, 상속을 이용할 수 있음.)
+ Bolierplating을 방지할 수 있음.
+ 확장성이 좋다.
+ 구조화 하기 쉽다.
+ Django 및 Python 내장 기능을 이용할 수 있다.

##### 단점
+ 가독성이 떨어진다.
+ 추상적이다.
+ decorator 사용이 함수형보다 까다롭다.

*Reference: [Django - Writing Views](https://docs.djangoproject.com/en/2.2/topics/http/views/)</br> [Django - Introduction to class-based views](https://docs.djangoproject.com/en/2.2/topics/class-based-views/intro/)</br> [Django - Class-based views](https://docs.djangoproject.com/en/2.2/topics/class-based-views/)</br> [
Sarthak Kumar - Django : Class Based Views vs Function Based Views](https://medium.com/@ksarthak4ever/django-class-based-views-vs-function-based-view-e74b47b2e41b)</br> [William Vincent - Django Tips #7: Function-Based Views vs Class-Based Views](https://wsvincent.com/class-function-based-views/)*
