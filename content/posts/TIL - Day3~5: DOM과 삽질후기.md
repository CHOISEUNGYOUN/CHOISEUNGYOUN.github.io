---
title: "TIL - Day3~5: DOM과 삽질후기"
date: "2019-08-02T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL-Day3~5:-DOM과 삽질후기/"
category: "TIL"
tags:
  - "HTML"
  - "CSS"
  - "class"
  - "Javascript"
  - "DOM"
description: "DOM을 사용하여 Twitter 간단하게 clone하기."
---

<!-- - [The first transition](#the-first-transition) -->

이번주는 이전에 배운적이 있었던 JS에 대한 전반적인 복습을 하는 과정이었다. 여러가지 부분에 대해서 내가 놓치고 있었던 부분들을 세세하게 되짚어보게 되어서 확실히 이전보다 자바스크립트 자체에 대한 이해(?)가 늘었다고 생각한다. 아무튼 그리하여 3일차 부터 DOM 조작 및 트위터 페이지를 클론하기 시작하였다. 

### 1. Template literal 로 HTML 태그 생성하지 않기
사실 이 부분은 개인의 성향이라고 들었기에, 해당 방식으로 작성을 해도 무방하다고 알고있다. 하지만, 이번에 새로 짜보는 페이지에서는, DOM구조에 대한 좀 더 명확한 이해를 하고싶었기에, Template literal을 사용하지 않는 방향으로 정했다. 

 ##### *개인적인 잡상: 배우게 될 React의 요소들이 class와 DOM Tree를 그대로 사용하게 될 것이기 때문에, 구조를 면밀하게 이해하면 디버깅 하는데 좀 더 도움이 되지 않을까 해서 시도해보았다.*
 
 
### 2. 기초 조건 이외에 추가적인 기능 구현하기
여기서 많은 삽질들이 발생하였다. 아래에 구현 하려고 했던 리스트를 참고하자.
```
 textarea 글자수 제한, 글자수 표시
 (글자수를 표시하진 않았다!!! 그냥 alert으로 때워버렸다...)
 
 tweet 버튼 누르면, 아래 트위터에 실제로 추가(최근것이 위로 올라오도록)
 (이건 붙이는 순서가 중요했다)
 
 tweet 개수 왼쪽 프로필에 표시
 (데이터가 하드코딩 되어있었기 때문에, DOM에서 HTML 데이터로 구현했다.)
 내 tweet 일 경우,  우측에 삭제버튼 활성화
 (삽질 많이 한 부분 1: 사실 시간이 별로 없어서, CSS를 다시 건드릴 엄두가 안나서, 이름 태그에다 활성화 시켰다.)
 
 삭제버튼 누르면, 해당 tweet 삭제
 (삽질 많이 한 부분 2: 자꾸 하드코딩 된 데이터를 가지고 구현 할 수 있을 줄 알고 삽질을 했다. 데이터 변환 구조를 알아야 할텐데...)
 
 트윗에 날짜 추가 (2019년 8월 1일)
 (Date class와 친숙해지는 순간!!!)
 
 가입 id에 영문, 숫자, 최대 글자수 12개 제한
 (삽질 많이 한 부분 3: 정규표현식과 조건 부여 하는 방법 때문에 애를 많이 먹었다.)
 
 비밀번호, 비밀번호 확인이 같게 / 8 ~ 16자 / 영문, 숫자, 특수문자 최소 1개 포함
 5칸 다 차야만 가입하기 버튼 ‘가입축하 메시지’
 (삽질 많이 한 부분 4: 이거 왜 했을까... 위에 문제와 똑같은 문제를 겪었음.)
 
 시간이 남는다면 id, 비밀번호 중복문구 4자리 제한 해보기
 (이건 짧은 시간안에 알고리즘이 생각나지 않아서 일단 건너뛰었다. 다음에 도전하겠음!!!)
``` 

이틀 안에 구현 해보려고 하니 참 힘들었다..ㅎㅎㅎㅎㅎ

삽질을 하면서 느꼈던 점은 아래와 같다.

+ 함수는 왠만하면 잘게 쪼개자.
하다보니 동일한 기능이 여러 이벤트에서 사용되어야 할 필요가 많았다. 각 이벤트에 동일한 코드를 넣는 것 보다 상위 범주에서 선언을 한 다음 필요한 구간마다 불러 오는것이 얼마나 효율적인지 이번에 알게 되었다!!

+ 오타를 조심하자.
특히 비슷한 조건들을 나열할 때 복사 붙여넣기 하면서 많이 발생했다. 특히 특정 문자만 들어오게끔 제한을 걸때 미리 형식을 붙여넣는 바람에 여러 문제가 발생했다. 붙여넣고 나면 반드시 자세하게 확인 할 것!!!

+ 데이터 구조를 이해하자.
하드코딩 되어있는 데이터 셋에서 무언가를 주고 받는다는 것은 정말 힘든 일이라는 것을 알게 되었다. 아직은 접해보지 못한 백엔드 부분을 좀 더 접해보고 싶어졌다.


##### **궁금해 하시지 않으실 것 같지만 JS code만 올려놓겠습니다. 엄격한(?) 리뷰를 해주시면 제 발전에 도움이 될 것 같습니다.

```JS
// 하드코딩 된 데이터, 여기로 데이터를 쌓아서 렌더링 해보았음.

let userTweets = [
    {
        id: 0,
        user: '박찬호',
        content: '제가 LA에 있을때 이야기인데요...',
        createdAt: '2019년 7월 28일'
    },
    {
        id: 1,
        user: '장첸',
        content: '혼자왔니?',
        createdAt: '2018년 11월 22일'
    },
    {
        id: 2,
        user: '마석도',
        content: '어, 아직 싱글이야',
        createdAt: '2018년 11월 22일'
    },
    {
        id: 3,
        user: '누구지',
        content: 'ㅎㅇ',
        createdAt: '2019년 8월 1일'
    }
];

const deprecatedData = [
    {   id : 'index',
        deprecatedAt : '시간',
        data : userTweets
    }
]

//회원가입 페이지

const putNewUser = (() => {
    const fetchID = document.getElementsByClassName('id')[0];
    const fetchName = document.getElementsByClassName('name')[0];
    const fetchPassword = document.getElementsByClassName('password')[0];
    const fetchCheckPassword = document.getElementsByClassName('check_password')[0];
    const fetchProfile = document.getElementsByClassName('profile')[0];
    const fetchSubmitBtn = document.getElementsByClassName('submit_button')[0];

    let id_Result = {
        chars: false,
        numbers: false
    }

    let name_Result = {
        chars: false
    }

    let password_Result = {
        symbols: false,
        chars: false,
        numbers: false
    };

    const id_Logic = (e) => {
        if (fetchID.value.length > 5 && fetchID.value.length < 13) {
            if (fetchID.value.match(/[A-z]/g)) {
                id_Result.chars = true;
            }
            if (fetchID.value.match(/[0-9]/g)) {
                id_Result.numbers = true;
            }
        }
    };

    const name_Logic = (e) => {
        if (fetchName.value.length > 1 && fetchName.value.length < 13) {
            if (fetchName.value.match(/[ㄱ-힣]/g)) {
                name_Result.chars = true;
            }
        }
    };

    const password_Logic = (e) => {

        const password_datum = [...fetchPassword.value];
        const _symbols = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/"
            , ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
        if (fetchPassword.value.length > 7 && fetchPassword.value.length < 17) {
            _symbols.map(sym => {
                if (password_datum.includes(sym)) {
                    password_Result.symbols = true;
                    return;
                }
            });
            if (fetchPassword.value.match(/[A-z]/g)) {
                password_Result.chars = true;
            }
            if (fetchPassword.value.match(/[0-9]/g)) {
                password_Result.numbers = true;
            }
        }
    };


    const addUser = (e) => {
        const new_User = {};
        id_Logic(e);
        name_Logic(e);
        password_Logic(e);
        if (!id_Result.chars) {
            alert('ID는 6자 이상, 12자 이하의 영문 및 숫자를 포함하여야 합니다!')
            e.preventDefault();
            return;
        } else if (!id_Result.numbers) {
            alert('ID는 6자 이상, 12자 이하의 영문 및 숫자를 포함하여야 합니다!')
            e.preventDefault();
            return;
        } else if (!name_Result.chars) {
            alert('이름을 입력해 주세요(한글)')
            e.preventDefault();
            return;
        } else if (fetchPassword.value !== fetchCheckPassword.value) {
            alert('비밀번호가 일치하지 않습니다!');
            e.preventDefault();
            return;
        } else if (!password_Result.symbols) {
            alert('비밀번호는 8자 이상, 16자 이하의 숫자, 특수문자 및 영문을 포함하여야 합니다!')
            e.preventDefault();
            return;
        } else if (!password_Result.chars) {
            alert('비밀번호는 8자 이상, 16자 이하의 숫자, 특수문자 및 영문을 포함하여야 합니다!')
            e.preventDefault();
            return;
        } else if (!password_Result.numbers) {
            alert('비밀번호는 8자 이상, 16자 이하의 숫자, 특수문자 및 영문을 포함하여야 합니다!')
            e.preventDefault();
            return;
        } else {
            new_User['id'] = fetchID.value;
            new_User['name'] = fetchName.value;
            new_User['password'] = fetchPassword.value;
            new_User['profile'] = fetchProfile.value;

            newUsers.push(new_User);
            fetchID.value = "";
            fetchName.value = "";
            fetchPassword.value = "";
            fetchCheckPassword.value = "";
            fetchProfile.value = "";

            id_Result = {
                symbols: false,
                chars: false,
                numbers: false
            }

            name_Result = {
                chars: false
            }

            password_Result = {
                symbols: false,
                chars: false,
                numbers: false
            };

            alert('트위터에 가입 하신것을 축하드립니다!!!');
            location.href = './tweets.html';
        }
        
    }
    fetchSubmitBtn.addEventListener('click', addUser, false);
})();



//tweet 로그인 후 메인 페이지

//로그인 페이지로 가기
const goToHome = (() => {
    const fetchBlue = document.getElementsByClassName('blue')[0];
    const homeURL = () => { location.href = './login.html' };
    fetchBlue.addEventListener('click', homeURL);
})();

//날짜, 시간 생성.
const createdWhen = () => {
    const time = new Date();
    const currentYear = time.getFullYear();
    const currentMonth = time.getMonth() + 1;
    const currentDate = time.getDate();
    return `${currentYear}년 ${currentMonth}월 ${currentDate}일`;
}

// 300자 검사.
const tweet_boxCounter = (e) => {
    const getTweetBox = document.getElementById('tweet_box');
    if (!getTweetBox.value.length || getTweetBox.value.length > 301) {
        alert('트윗은 0자 이상 300자 이하로 작성 해주셔야 합니다!!!');
        return false;
    }
    return true;
}

// user_tweet에 붙이기
//데이터에서 기존에 등록된 tweet 불러오기
const generateTweet = (() => {
    let counter = 0;
    userTweets.map(datum => {
        //tweet data 업로드
        const pForTop = document.createElement('p');
        const pForContent = document.createElement('p');
        const spanForName = document.createElement('span');
        const spanForTime = document.createElement('span');
        const divForUser_tweet = document.createElement('div');
        const getTweets = document.getElementById('tweets');
        divForUser_tweet.className = 'user_tweet'
        pForTop.className = 'top';
        spanForName.className = 'name';
        spanForTime.className = 'date';
        pForContent.className = 'your_text';
        spanForName.innerText = `${datum.user}`;
        //자기 이름칸에 mouse 이벤트 활성화
        if (spanForName.innerText === 'Choi,Seung-youn') {
            spanForName.style.cursor = "pointer"
        }
        spanForTime.innerText = `${datum.createdAt}`;
        pForContent.innerText = datum.content;
        divForUser_tweet.appendChild(pForTop);
        divForUser_tweet.appendChild(pForContent);
        pForTop.appendChild(spanForName);
        pForTop.appendChild(spanForTime);
        getTweets.insertAdjacentElement('afterbegin', divForUser_tweet);
        //tweet counter 세기
        const getTweetCounter = document.getElementsByClassName('tweet_counter')[0];
        if (datum.user === 'Choi,Seung-youn') {
            counter = counter + 1;
            getTweetCounter.innerText = counter;
        }
    })
})();

//tweet_box에서 tweet 작성데이터 불러오기.
const addTweet = (e) => {
    //글자 검사. 0개이거나 300자 이상이면 포스팅 거부.
    const isTweetTrue = tweet_boxCounter(e);
    if (!isTweetTrue) {
        return;
    }
    //tweet_box 새 글 추가.
    const pForTop = document.createElement('p');
    const pForContent = document.createElement('p');
    const spanForName = document.createElement('span');
    const spanForTime = document.createElement('span');
    const divForUser_tweet = document.createElement('div');
    const getTweets = document.getElementById('tweets');
    const getTweetBox = document.getElementById('tweet_box');
    divForUser_tweet.className = 'user_tweet'
    pForTop.className = 'top';
    spanForName.className = 'name';
    spanForTime.className = 'date';
    pForContent.className = 'your_text';
    spanForName.innerText = `Choi,Seung-youn`;
    spanForTime.innerText = `${createdWhen()}`;
    pForContent.innerText = getTweetBox.value;
    //자기 이름칸에 mouse 이벤트 활성화
    if (spanForName.innerText === 'Choi,Seung-youn') {
        spanForName.style.cursor = "pointer";
        spanForName.addEventListener('click', do_Delete, false);
    }
    divForUser_tweet.appendChild(pForTop);
    divForUser_tweet.appendChild(pForContent);
    pForTop.appendChild(spanForName);
    pForTop.appendChild(spanForTime);
    getTweets.insertAdjacentElement('afterbegin', divForUser_tweet);
    // userTweets에 데이터 추가하기.
    userTweets.push({
        id: userTweets[userTweets.length - 1].id + 1,
        user: 'Choi,Seung-youn',
        content: `${getTweetBox.value}`,
        createdAt: `${createdWhen()}`
    })

    //tweet counter 조작.
    const getTweetCounter = document.getElementsByClassName('tweet_counter')[0];
    let counter = Number(getTweetCounter.innerText);
    counter = counter + 1;
    getTweetCounter.innerText = counter;

    //tweet_box 데이터 삭제
    getTweetBox.value = "";
    //새로 포스팅된 트윗에도 삭제 기능 부여

}

//addTweet 활성화.
const uploadNewTweet = (() => {
    const getTweetButton = document.getElementById('tweet_button');
    getTweetButton.addEventListener('click', addTweet, false);
})();

//deleteMyTweet 활성화
const findUserName = (() => {
    const nameList = document.getElementsByClassName('name');
    const getUserName = document.getElementsByClassName('user_name')[0];
    for (let i = 0; i < nameList.length; i++) {
        nameList[i].addEventListener('click', (e) => {
            console.log('target',e.target);
            console.log(getUserName)
            // console.log(e.target)
            if (getUserName.innerText === e.target.innerText) {
                do_Delete(e);
            }
        });
    }
})();

//트윗 삭제 기능.

const do_Delete = (e) => {
    // 쓰레기통으로 직행.
    deprecatedData.push({
        id: userTweets[userTweets.length-1].id,
        deprecatedAt: new Date(),
        data: userTweets
    });
    //tweet counter 조작.
    const getTweetCounter = document.getElementsByClassName('tweet_counter')[0];
    let counter = Number(getTweetCounter.innerText);
    counter = counter - 1;
    getTweetCounter.innerText = counter;
    e.target.parentNode.parentNode.remove();
}


```