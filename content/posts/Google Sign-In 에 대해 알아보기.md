---
title: "Google Sign-In 에 대해 알아보기"
date: "2020-01-11T13:40:32.169Z"
template: "post"
draft: false
slug: "/posts/Google-Signin-for-beginner/"
category: "Google Signin"
tags:
  - "Google Cloud"
  - "소셜로그인"
  - "Google Sign-in"
description: "초보자도 직접 구글 API를 이용하여 구글 소셜로그인을 할 수 있다!!!!"
---
__소셜로그인을 구현하고 싶으나 어려우시다구요??__ 저도 매번 해보지만 API를 제공하는 주체마다 권장하는 방식이 달라 어려움을 느낍니다. `분명 OAuth2.0` 기반으로 서비스를 제공하여 기본적인 베이스는 동일하지만, 보안 및 각 제공사들에서 운영하는 서비스 아키텍쳐에 따라 비즈니스를 구현해야하는 나와 같은 일반 개발자들은 전혀 다른 방법으로 구현해야 합니다. 특히나, 제가 과거에 공부를 했던 [__Wecode__](https://wecode.co.kr/) 수강생들 및 졸업생들에게 조금이나마 도움이 되고자 작성을 해보았습니다.

### 이 포스팅은 OAuth2.0에 대한 자세한 내용은 생략하도록 하겠습니다. 만약 궁금하시다면, [여기](https://developers.google.com/identity/protocols/OAuth2)를 참고 부탁드립니다.
</br>

`Google Sign-in`을 사용하는 방법은 다양하나, 본인이 직접 사용해보고 가장 간편하고 효율적이다고 느낀 부분은 각 클라이언트(Web 또는 Mobile)에서 직접 API를 사용하여 Query string 없이 기본 유저 정보를 받아 오는 것이라고 생각합니다. 굳이 여러 과정을 거치지 않아도 안전하게 원하는 정보를 추출할 수 있기 때문입니다!!!</br>

#### 코드를 작성하기 이전, API 호출을 위하여 Google Console에 등록합니다.

1. `https://console.developers.google.com/`에 가셔서 구글 계정을 등록합니다.

2. 아래 화면에서 `사용자 인증 정보`를 클릭합니다.
<figure style="width:360px;">
    <img src="/imgs/Google-Signin/Google-Signin-1.png" alt="Google-Signin-1">
</figure>

3. 아래 화면에서 `OAuth 클라이언트 ID`를 클릭합니다.
<figure style="width:360px;">
    <img src="/imgs/Google-Signin/Google-Signin-2.png" alt="Google-Signin-2">
</figure>

4. 다음 화면에서 각자 원하는 어플리케이션을 선택합니다.</br> 
*저는 웹어플리케이션을 선택했습니다.*

5. 아래 화면의 창에서 보이는 조건의 URL을 삽입합니다.
<figure style="width:360px;">
    <img src="/imgs/Google-Signin/Google-Signin-3.png" alt="Google-Signin-3">
</figure>

### 여기까지가 Google Sign-in을 사용하기 위한 기본적인 조건이었습니다. 이제 코드를 작성해보도록 하겠습니다.

이에 대한 과정을 설명하기 앞서 예제코드를 먼저 보여드리겠습니다.
```Javascript
function googleSignIn () {
    return gapi.load('auth2', () => {
    gapi.auth2.init({
        client_id : 'YOUR_CONSOLE_ID.apps.googleusercontent.com'
        }).then(res => {
        return res.currentUser.get()
        }).then(res => {
        return res.getBasicProfile()
        }).then(res => {
        return res.getEmail()
        })
    })
}
```
위의 코드는 기본적으로 구글 API에서 제공하는 정보 중, 이메일만 추출하는 코드입니다. 구글은 `gapi`라는 Go 로 작성된 백엔드에서 우리가 원하는 정보를 보내주고 있으며, 각 호출되는 결과값에 따른 객체 속성이 상이합니다. 따라서 리턴되는 값의 속성을 정확하게 인지하고 호출하여야 원하는 정보를 얻을 수 있습니다. 이에 대한 좀 더 자세한 내용은 Reference에 남겨두었습니다. 읽으실때 `결과값의 속성` 을 반드시 확인하고 작성하셔야 하는 점 염두에 두시길 바라겠습니다!!

*Reference:
[Google Sign-In JavaScript client reference](https://developers.google.com/identity/sign-in/web/reference)