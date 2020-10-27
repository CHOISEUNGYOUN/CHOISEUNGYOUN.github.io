---
title: "Data structure-Queue"
date: "2020-10-27T22:55:32.169Z"
template: "post"
draft: false
slug: "/posts/queue/"
category: "Data Structure"
tags:
  - "Data Structure"
  - "Queue"
  - "Wecode"
  - "위코드"
description: "Queue 자료구조를 Ruby로 구현해보자!"
---

#### 최근에 이직한 직장은 Ruby on Rails를 사용한다. 위코드 동기분들 중, 루비로 자료구조를 공부하시는 분이 계시길래 필자도 공부할 겸 자료구조를 조악하게나마 구현해보았다.

## Queue(큐) 란?

`큐(queue)`는 컴퓨터의 기본적인 자료 구조의 한가지로, 먼저 집어 넣은 데이터가 먼저 나오는 `FIFO` `(First In First Out)`구조로 저장하는 형식을 말한다. 
영어 단어 queue는 표를 사러 일렬로 늘어선 사람들로 이루어진 줄을 말하기도 하며, 먼저 줄을 선 사람이 먼저 나갈 수 있는 상황을 연상하면 된다.

주로 어떠한 작업/데이터를 순서대로 실행/사용하기 위해 대기시킬 때 사용되며 운영체제(OS) 작업관리가 대표적인 예이다.
서로 다른 쓰레드 사이 또는 프로세스 사이에서나 네트워크를 통해 자료를 주고받을 때 자료를 일시적으로 저장하는 용도로 많이 사용된다.

```Ruby
  class CustomQueue
    attr_reader :queue
    
    def initialize
      @queue = []
    end
    
    def count
      @queue.length
    end
    
    def empty?
      count ? false : true
    end
    
    def first
      @queue[0] # @queue.first
    end
    
    def last
      @queue[@queue.length - 1] # @queue.last
    end
    
    def push(val)
      @queue += [val]
    end
    
    def pop
      first_value = first
      @queue = @queue.slice(1, count)
      first_value
    end
end
```

#### 사실 구현한다고 이것저것 고민하면서 만들어봤는데 인터프리터 계열 언어는 굳이 큐를 직접 만들어서 쓸거 같진 않다. 그냥 이러한 구조라고 이해만 하자!

\*Reference:<br/>
[Learn Ruby Queue with Examples](https://medium.com/@bing.xie78/learn-ruby-queue-with-examples-3269d1d2a42e)<br/>
[위키백과 - 큐(자료구조)](https://ko.wikipedia.org/wiki/%ED%81%90_(%EC%9E%90%EB%A3%8C_%EA%B5%AC%EC%A1%B0))<br/>
[나무위키 - 큐(자료구조)](https://namu.wiki/w/%ED%81%90(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0))<br/>
