---
title: "Data structure-Binary Tree"
date: "2020-10-29T00:00:32.169Z"
template: "post"
draft: false
slug: "/posts/binary-tree/"
category: "Data Structure"
tags:
  - "Data Structure"
  - "Binary Tree"
  - "이진트리"
  - "Wecode"
  - "위코드"
description: "Binary Tree(이진트리) 자료구조를 Ruby로 구현해보자!"
---

#### 최근에 이직한 직장은 Ruby on Rails를 사용한다. 위코드 동기분들 중, 루비로 자료구조를 공부하시는 분이 계시길래 필자도 공부할 겸 자료구조를 조악하게나마 구현해보았다.

## Tree(트리) 란?

`트리(Tree)`는 일반적으로 대상 정보의 각 항목들을 계층적으로 연관되도록 구조화시키고자 할 때 사용하는 비선형 자료구조이다.
데이터 요소들의 단순한 나열이 아닌 부모-자식 관계의 계층적 구조로 표현이 된다.
트리는 그래프의 한 종류이며 사이클이 없다.

## Binary Tree(이진트리) 란?

이진트리(Binary Tree)
이진트리는 트리를 구성하는 노드들의 최대 차수(degree)가 2인 노드들로 구성되는 트리이다.

이진트리의 레벨 i에서 가질 수 있는 최대 노드의 수는 2^i이다. (i>=0)
깊이가 k인 이진트리가 가질 수 있는 최대 노드의 수는 2^k-1이다.(k>=1)

해당 개념을 이해하기 위해서는 [`재귀(Recursion)`](https://en.wikipedia.org/wiki/Recursion)와 [`분할 정복(Divide and conquer)`](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm) 에 대한 사전 지식이 필요하니 해당 항목들 부터 찾아보자.

```Ruby
class BinaryTree
  attr_reader :value
  attr_accessor :left, :right

  def initialize(value)
    @value = value
    @left = nil
    @right = nil
  end
end

module Node
  def insert(node, value)
    if(value > node.value)
      if(node.right)
        insert(node.right, value)
      else
        node.right = BinaryTree.new(value)
      end
    else
      if(node.left)
        insert(node.left, value)
      else
        node.left = BinaryTree.new(value)
      end
    end
  end

  def traverse(node)
    if(node == nil)
      return
    end
    if(node.left)
      traverse(node.left)
    end
    # p node.value
    if(node.right)
      traverse(node.right)
    end
  end

  def search(node, value)
    if (node == nil)
      return
    end
    if(node.value == value)
      p "result #{node.value}"
      return node
    end
    if(node.value > value)
      self.search(node.left, value)
    else
      self.search(node.right, value)
    end
  end

  def delete(node, value)
    if (node == nil)
      return
    end
    if(node.value == value)
      p "result #{node.value}"
      node = nil
      return
    end
    if(node.value > value)
      self.delete(node.left, value)
    else
      self.delete(node.right, value)
    end
  end
end
include Node
```

#### 이진트리 구조는 검색 알고리즘의 기초가 되는걸로 알고있다. 기본적인 개념을 숙지한다면 나중에 검색을 다루게 될때 도움이 되지 않을까 생각한다 :)

\*Reference:<br/>
[Data structure: Binary Tree (Ruby)](https://medium.com/derek-gc/data-structure-binary-tree-ruby-9e017dbac8b2)<br/>
[adam2.log(Velog) - [자료구조]Tree](https://velog.io/@adam2/TREE)<br/>
[위키백과 - 이진트리](https://ko.wikipedia.org/wiki/%EC%9D%B4%EC%A7%84_%ED%8A%B8%EB%A6%AC)<br/>
