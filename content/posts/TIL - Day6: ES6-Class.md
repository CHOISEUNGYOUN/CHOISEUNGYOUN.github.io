---
title: "TIL - Day6: ES6-Class"
date: "2019-08-04T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL-Day6:-ES6-Class/"
category: "TIL"
tags:
  - "HTML"
  - "CSS"
  - "Class"
  - "Javascript"
  - "OOP"
  
description: "JS의 ES6 class에 대해 간단하게 짚고 넘어가자."
---

<!-- - [The first transition](#the-first-transition) -->

오늘부터 class에 대해서 복습을 하게 되었다. 정확히는 간단한 게임을 구현하기 위해서 class 생성자를 적극 활용해야 한다는 미션을 받았다. 이전에 알고리즘 문제나 간단한 웹 작동을 위한 DOM 조작 정도만 구현 했기 때문에, 클래스에 대해서는 사실 기본적인 개념 외에는 전무 하다고 보아도 무방했다. 그래서 이번 과제는 시작하기 이전에 개념부터 차근차근 짚어나가려고 한다.

1. 자바스크립트에서 class란?
ES6부터 constructor 개념이 생겨 자바스크립트의 class의 기본적인 형태는 Java에서의 class와 동일하다. 하지만 이 클래스가 다른언어에서 존재하는 class 와는 확연히 다른 존재라는 것을 명심하였으면 좋겠다. 왜냐하면 형태만 동일 할 뿐 함수에서 차용한 것이기 때문이다.(한마디로 prototyping을 해주는 함수다.) 이를 확인하기 위해 아래의 예시를 참고 해보자.
 ```JS
 class User {
  constructor(name, age, email){
    this._name = name;
    this._age = age;
    this._email = email;
  	}
}
console.log(User) // [Function: User]
 ```
 콘솔창이 함수라고 가리킬 것이다. 결국 이것 또한 함수이다. 그래서 개발자들이 JS의 class를 syntactic sugar (문법적 설탕? 또는 편의 문법? 정확한 한글 번역 기준이 없다.)이라고 말을 하는 것이다. 그럼에도 불구하고 class 함수를 사용하면 OOP(Object-oriented Programming, 객체지향 프로그래밍)을 구현하기 용이하기에 별 무리없이 사용 해도 괜찮다.
 
2. Class는 도대체 왜 사용하는 것일까?
Raw data를 받아 특정한 작업을 거쳐 동일한 형태의 데이터를 생성한다고 생각 해 보자. 매번 동일한 형태의 자료를 생성해야 하는데, 클래스를 사용하게 될 경우, 동일한 출력값을 지속적으로 만들어 내는데 편리하다. 한마디로 규격화를 해주는 틀이라고 볼 수 있다. 
```
//예시
형태가 불안정한 액체 또는 기체상태의 당분 및 원재료를 
이용해서 아이스크림을 만든다고 생각해 보자. 
형태가 불안정한 재료(raw data)를 금형과 가공 과정(class & constructor)을 
거쳐 포장된 상태로 납품(instance 또는 return data) 되어 우리 손에 들어온다. 
```
위의 예시가 적절한 예시가 될 수 있는지는 개개인의 판단에 맡기겠다.
##### *잡상: 본인이 생산 설비랑 친숙하다 보니 본의 아니게 상기와 같은 예시를 들게 되었다.*

여기까지 클래스에 대한 기본적인 레이아웃을 그려보았다면, 이제 안의 컨텐츠에 대한 이야기를 해보고자 한다.
3. class & constructor
처음 class 를 생성할 때 필요한 keywords 다. 아래의 예시를 보자.
```JS
 class User {
    constructor(name, age, email){
      this._name = name;
      this._age = age;
      this._email = email;
  	}
}
 ```
 위와 같이 변수명 앞에 class를 선언 해 주고, 그 안에 constructor를 선언 한 뒤, this로 바인딩 할 매개변수들을 선언 해 준다.
 ##### ***class 생성자의 첫 문자는 대문자로 하는 것이 규칙. 첫 문자를 소문자로 선언하여도 문법적으로 전혀 문제가 되지 않으나, 개발자들 세계에서의 암묵적인 룰 같은 것이므로 지키는 것이 좋다.*
 
4. Instance
인스턴스는 class 함수를 사용하여 constructor에 바인딩된 값들을 담게 된다. 이 때, 모든 인스턴스는 본인을 생성한 class를 부모로 가지게 된다.
```JS
class User {
  constructor(name, age, email){
    this._name = name;
    this._age = age;
    this._email = email;
  }
}
const weCoder1 = new User('Youn', 30, 'youn@gmail.com');
weCoder1;
// User {_name: "Youn", _age: 30, _email: "alchemist718@gmail.com"}
// _age: 30
// _email: "alchemist718@gmail.com"
// _name: "Youn"
// __proto__:
// constructor: class User
// __proto__: Object
```
위와 같이 인스턴스를 생성하고 prototype을 확인 해보면 object라고 나올 것이며, 트리를 한번 더 펼치면 constructor로 인스턴스를 생성한 class가 나온다. 이 말은 constructor는 class에 종속되어 있으며, weCoder1 이라는 객체 또한 해당 constructor에 종속 되어 있다는 말이다.(열심히 풀어서 적어놨지만, 상속된다는 의미다.)

5. Getters & Setters
이렇게 인스턴스들을 생성했지만, 가공된 데이터가 수정을 거쳐야 할 수도 있고, 내부에서 함수를 호출하여 해당 데이터를 보관하고 싶은 경우가 분명히 생길 것이다. 그러한 상황을 위하여 친절하신 ECMA 개발자 분들께서 getter 와 setter라는 기능을 추가해 주셨다.
 ```JS
 class User {
      constructor(name, age, email){
        this._name = name;
        this._age = age;
        this._email = email;
      }
      get name() {
        return this._name;
      }
      set name(newName) {
        this._name = newName;
      }
}
const weCoder1 = new User('Youn', 30, 'youn@gmail.com');
weCoder1; // User { _name: 'Youn', _age: 30, _email: 'youn@gmail.com' }
weCoder1.name;
weCoder1.name = 'Jun';
weCoder1; // User { _name: 'Jun', _age: 30, _email: 'youn@gmail.com' }
 ```
 위와 같이 get 메서드로 this로 바인딩 된 값을 호출 할 수도 있고, set 메서드로 this로 바인딩 된 값을 변경 할 수도 있다.
 ### *주의!!*
 #### *1.getter는 매개변수를 가질 수 없다*
 #### *2.setter는 매개변수를 하나만 가질 수 있다*
 그런데 그냥 일반적으로 호출 하면 될 것을 왜 getter 써야 할까? 아래 링크를 참고 해주었으면 좋겠다. 
 <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get>
 <https://en.wikipedia.org/wiki/Memoization>
 Memoization에 대한 개념이니 해당 개념을 먼저 숙지하고 이해 하도록 하자. 
6. static
static은 쉽게 생각해서 class안에서 함수를 생성하는 도구이다. static을 사용하면 class 함수에 바인딩이 되나, 우리가 일반적으로 생각하는 리터럴객체 안에 함수 기능을 값으로 선언하는 것과 동일한 기능을 구현 할 수 있다. 그렇기에, static 으로 선언된 함수의 내부는 class의 this로 바인딩 되지 않는다.
```JS
class Animal{
     constructor(name, sound){
     this.name = name;
     this.sound = sound;
     }
     speak(){
      console.log(this.name + this.sound);
     }
  	//static을 사용하여야만 class 내부에서 함수 생성 가능.
     static test1 (a,b){
    	return `this is ${a} and ${b}`
     }
	//잘못된 함수 선언  
    test2 (a,b){
    	return `this is ${a} and ${b}`
     }
  }
const animal1 = new Animal('dog','woof!')
const animal2 = new Animal('cat', 'meow!')
const animal3 = new Animal('cattle','mee!')
Animal.test1(animal1.name, animal2.name)
Animal.test2(animal1.name, animal2.name)//TypeError
```
7. extends & super
class를 다른 class의 자식으로 만들어 줄 수 있다.(상속을 시켜줄 수 있음.)
내장 객체 뿐만 아니라 사용자 정의 객체도 상속이 가능하다.
```JS
//내장 함수 사용 예.
class formatDate extends Date {
    constructor(dateStr) {
      super(dateStr);
    }
    getFormattedDate() {
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

      return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
    }
}
//사용자 정의 함수 예
class User {
    constructor(name, age, email){
      this._name = name;
      this._age = age;
      this._email = email;
    }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
}
class Administrator extends User {
    constructor(name, age, email, role){
      super(name, age, email);// User의 바인딩 값들을 상속 받음.
      this._role = role;
    }
    get role(){
      return this._role;
    }
    set role(newRole){
      this._role = newRole;
    }
}
const sara = new Administrator('Sara', 30, 'sara@gmail.com', 'Admin');
console.log(sara.name);
console.log(sara)
```
 위에서 볼 수 있듯이, User에 바인딩 된 값들을 Administrator 로 상속 시킨 것을 볼 수 있다. 그리고 그 상속 될 바인딩 값들을 super를 통해서 선택 및 상속을 지정 할 수 있다.


이렇게 기본적인 ES6 constructor형 class의 기본적인 문법들을 다뤄 보았다.
이제 실제로 적용하러 가보도록 하겠다!!!
***reference
<https://seolhun.github.io/JS-static/> Seolhun님 블로그
<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes> MDN Class
<https://en.wikipedia.org/wiki/Memoization> Wikipedia Memoization
<https://medium.com/@luke_smaki/javascript-es6-classes-8a34b0a6720a> Luke Ruokaismaki - JavaScript ES6: Classes
<https://medium.com/beginners-guide-to-mobile-web-development/javascript-introduction-to-es6-classes-ecb2db9fe985> 
Abdul Kadir - Javascript: Introduction to ES6 classes*