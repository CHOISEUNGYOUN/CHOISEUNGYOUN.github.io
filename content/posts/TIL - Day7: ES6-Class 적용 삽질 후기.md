---
title: "TIL - Day7: ES6-Class 적용 삽질 후기"
date: "2019-08-05T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL-Day7:-ES6-Class-적용-삽질-후기/"
category: "TIL"
tags:
  - "HTML"
  - "CSS"
  - "ES6"
  - "DOM"
  - "Class"

description: "어제 정리한 class 기반으로 간단한 게임을 만들자!"
---

<!-- - [The first transition](#the-first-transition) -->

어제까지 ES6를 이용한 클래스를 생성하여 정리를 하였다면, 이제는 배운 클래스를 조잡하지만 적용 해 보는 단계를 가지려고 한다. 그리하여 Enemy Rain이라는 간단한 게임(게임이라고 하기엔 너무 구현이 허접하긴 하다.)을 만들어 보기로 하였다. 조건은 아래와 같다.

>1. 히어로를 가운데에서 시작하도록.
2. 히어로에 좌우로 key event
3. 바탕화면 끝에 도달하면 히어로 못 움직이게 하기.
4. 귀신이 하늘에서 시작하도록.
5. Random한 x 위치에서 나오게 하기.
6. setInterval을 활용해 귀신 시작위치에서 y값을 아래로 떨어뜨리기.

얼핏 보면 간단해 보이지만, 클래스를 처음 사용해볼 필자에겐 엄청난 도전이었다!!!

![ANY_0805222813.gif](https://images.velog.io/post-images/alchemist718/f5ef0840-b784-11e9-ab5a-8d4fbb0471e0/ANY0805222813.gif)
*조잡해 보이는 저 애니메이션을 구현하기 위해 하루종일 삽질을 경험했다......갈길이 멀다*

처음에는 귀신을 화면 하단으로 떨어뜨리는 방법부터 알아야 했기에, 클래스로 바로 작성하지 않고 함수로 먼저 귀신 한마리를 임의의 x값에서 떨어뜨리도록 코드를 작성했다.

```JS
const enemy = (() => {
    //귀신 태그 및 CSS 상속을 위한 ID 부여 
    const creatEnemy = document.createElement('div');
    creatEnemy.id = 'enemy';
    document.body.insertAdjacentElement('afterbegin',creatEnemy);
    document.getElementById('enemy').style.top = '6%';
 
    //임의의 x값에서 시작.
    document.getElementById('enemy').style.left = `${15+(Math.random() * 60)}%`
    //귀신 떨어뜨리기 시작
    const dropEnemy = setInterval(() => {
        const getEnemy = document.getElementById('enemy');
        let temp = getEnemy.style.top;
        let top = temp.slice(0,temp.length-1);
        getEnemy.style.top = `${Number(top) +1.5}%`
        if(Number(getEnemy.style.top.slice(0,2)) >= 76){
            console.log(Number(getEnemy.style.top.slice(0,2)))
            //귀신 죽은 이미지 구현
            getEnemy.style.background = `url('./images/enemy.png') 46px`;
            clearInterval(dropEnemy);
            //귀신이 바닥에 닿고 1초뒤에 제거.
            setTimeout(() => {
                console.log('1',document.getElementById('enemy'))

                document.getElementById('enemy').remove();
            },1000);
        }
    },300);

})();

```

한마리를 떨어뜨리는데 성공하였다!!!!
하지만 상기 함수형으로는 여러마리를 떨어뜨리는데 문제가 있다. 여러마리를 2초마다  떨어뜨리고 싶었던 나는 멘토님의 도움을 받아 마침내 클래스로 완성하였다!!!

```JS
//Enemy class 생성자
class Enemy {
  	//매번 새로운 enemy 생성
    constructor(creatEnemy) {
        this.creatEnemy = document.createElement('div');
        this.className = creatEnemy;
        this.creatEnemy.className = creatEnemy;
        this.creatEnemy.classList.add('enemy');
    }
    placeEnemy = () => {
        document.body.insertAdjacentElement('afterbegin', this.creatEnemy);
    }
    setTopDefault = () => {
        document.getElementsByClassName(this.className)[0].style.top = '6%';
    }
    spawnRandom = () => {
        const enemyClass = document.getElementsByClassName(this.className);
        for (let i = 0; i < enemyClass.length; i++) {
            document.getElementsByClassName(this.className)[i].style.left = `${15 + (Math.random() * 60)}%`
        }
    }
    dropEnemy =
        setInterval(() => {
            for (let i = 0; i < document.getElementsByClassName(this.className).length; i++) {
                let getEnemy = document.getElementsByClassName(this.className)[i];
                let temp = getEnemy.style.top;
                let top = temp.slice(0, temp.length - 1);
                getEnemy.style.top = `${Number(top) + 1.5}%`
                if (Number(getEnemy.style.top.slice(0, 2)) >= 76) {
                    console.log(Number(getEnemy.style.top.slice(0, 2)))
                    getEnemy.style.background = `url('./images/enemy.png') 46px`;
                    clearInterval(this.dropEnemy);

                    setTimeout(() => {
                        console.log('1', getEnemy)

                        getEnemy.remove();
                    }, 1000)
                }
            }
        }, 300);
}

//임의의 i값을 부여하여 enemy 투하!!
let i = 0;
const enemyRain = setInterval(() => {
    const newEnemy = new Enemy(`new${i}`);
    newEnemy.placeEnemy();
    newEnemy.setTopDefault();
    newEnemy.spawnRandom();
    i++;
}, 2000);
```

사실 클래스로 변환하면서 여러가지 버그를 만들어냈는데, 예리 멘토님이 없었으면 해결하지 못했을 것이다....

아직도 갈길이 멀다는 것을 뼈저리게 깨달으며 이렇게 반성문을 끝내도록 하겠다.
