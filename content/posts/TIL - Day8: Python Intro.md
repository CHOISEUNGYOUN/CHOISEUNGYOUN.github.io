---
title: "TIL - Day8: Python Intro"
date: "2019-08-06T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL - Day8: Python Intro/"
category: "TIL"
tags:
  - "Python"

description: "Python에 대한 주요한 특징 및 철학"
---

<!-- - [The first transition](#the-first-transition) -->

오늘부터 백엔드로 진로를 결정 함에 따라, 백엔드 관련하여 가장 선호되는 파이썬을 공부하기 시작했다. 기존에 공부했던 Javascript와는 또 다른점이 많은 언어이기에, 파이썬 언어에 대한 기본적인 특징들을 한번 서술 해 보려고 한다.

### 1. 파이썬 == Interpreter
파이썬 또한 3세대 언어라고 부를 수 있는 인터프리터이다. 사람이 직관적으로 이해 할 수 있는 명령어 set들로 구성 되어 있으며, 파이썬 언어내 엔진을 통하여 어셈블리어로 변환 해 준다. 보통 인터프리터 계열 언어들은 인터프리터 → 컴파일러 → 어셈블러 과정을 거치는데, 이러한 이유로 인해 인터프리팅 언어들이 컴파일 언어나 어셈블리 언어보다 느리다고 이야기 한다. 하지만, 파이썬을 컴파일 할 수 있는 방법이 있다고 하니 차후에 확인을 해보도록 하겠다. 

*이 방법을 이용하면 기존 컴파일러가 지배하는 분야(FA,Factory Automation 등과 같은 임베디드 솔루션 분야)에서도 충분히 적용 가능하다. 실제 적용사례도 많다.*

*실제 적용 예 :*
*[Universal Robot](https://www.youtube.com/watch?v=v_VopUT9jmM) & [Kuka Robotics](https://www.youtube.com/watch?v=BuQ30X4ust8)*

### 2. 간단명료함을 추구한다.
PEP(Python Enhancement Proposal) 20에 나와있듯이, 간단명료함을 극단적으로 추구하는 언어이다.
> "아름다운게 추한 것보다 낫다." (Beautiful is better than ugly)</br>
> "명시적인 것이 암시적인 것 보다 낫다." (Explicit is better than implicit)</br>
> "단순함이 복잡함보다 낫다." (Simple is better than complex)</br>
> "복잡함이 난해한 것보다 낫다." (Complex is better than complicated)</br>
> "가독성은 중요하다." (Readability counts)</br>

이처럼 다른 언어대비 진입장벽을 확실하게 낮추면서 효율을 극대화 시키려고 하는 철학이 엿보인다. 그러한 특징이 문법에 잘 나타나있어 기존 언어를 이미 능숙하게 다루시는 분들에게는 익숙하지 않을 수도 있다.

본격적인 파이썬을 탐구하기 이전에 이러한 특징들을 이해하고 시작을 해보려고 한다. 이제 출발!
