---
title: "Google Cloud-2 구글 클라우드 mysql 생성 & 설정하기"
date: "2019-11-20T16:40:32.169Z"
template: "post"
draft: false
slug: "/posts/Google-Cloud-2/"
category: "Google Cloud"
tags:
  - "Google Cloud"
  - "Cloud Computing"
  - "Cloud sql"
  - "Mysql"
  - "GCP"
  - "구글 클라우드 플랫폼"
  - "Google Cloud Platform in Action"
description: "구글 클라우드 플랫폼 인 액션과 함께하는 GCP 학습"
---
#### *사실 이번 장의 제목은 구글 클라우드에 워드프레스 배포하기 였으나, 워드프레스를 이용한 블로그 배포가 목적이 아니기에, 워드프레스는 건너뛰도록 하겠다.*

### 1. Cloud SQL 인스턴스 켜기
콘솔에서 Cloud SQL로 가자. 만약 처음 생성 한다면, 아래의 화면이 뜰 것이다.</br>
<figure style="width:360px;">
    <img src="/imgs/Google-Cloud-2/Cloud-SQL-1.png" alt="Cloud-SQL-1">
</figure>

여기서 __인스턴스 만들기__를 클릭하고 다음 단계로 넘어가자. </br>

그럼, 다음 화면이 나올 것이다.
<figure style="width:360px;">
    <img src="/imgs/Google-Cloud-2/Cloud-SQL-2.png" alt="Cloud-SQL-2">
</figure>

이 화면에서 적당한 인스턴스 ID와 root 비밀번호를 선택하자(mysql 비밀번호다.)

[이전 포스팅](https://choiseungyoun.github.io/posts/Google-Cloud-1/)에서도 언급 하였듯이, 리전은 물리 서버가 어느 곳에 존재 할 것인지 결정하는 요소이기에, 서비스 배포할 국가를 고려하여 선택 하도록 하자.</br>
선택을 완료 하였다면, 생성 버튼을 누르고 몇분간 기다려 주자(물리 서버에서 이미지를 생성하는 과정이기에 조금 오래 걸린다.)

이렇게 생성한 인스턴스는 터미널에서 `gcloud sql instances list` 에서 확인 할 수 있다.

또한,```gcloud sql users set-password [user_name]
--password=[password] --instance=[your_instance] --host=[your_host]``` 를 입력하면 mysql user 비밀번호 또한 변경 할 수 있으니, 참고 하길 바란다.

### 2. Cloud SQL 인스턴스 연결하기
우선 mysql을 설치하여야 사용 할 수 있다.
필자는 Mac 을 사용하고 있기에, `brew install mysql`로 설치하였다.
Linux 사용자라면, `apt-get install mysql-client=5.7`로 설치하면 된다.

여기서 책이랑 현재랑 다른 점은, GCP에서 보안 설정이 강화되어, Cloud SQL 콘솔에서 지정된 IP host에서만 mysql에 접속 할 수 있다는 점이다.

그래서, 필자는 여러 방법중 하나인 Cloud SQL에 VM 연결하기 까지 해보려고 한다. 우선 콘솔에서 Cloud SQL로 들어 간 다음 아래의 그림을 참고하자,

<figure style="width:480px;">
    <img src="/imgs/Google-Cloud-2/Cloud-SQL-3.png" alt="Cloud-SQL-3">
</figure>

여기서, __Compute Engine VM 인스턴스에서 연결__ 을 클릭하자.
이 다음, 다른 창이 오른쪽에 뜨게 될 것인데, 우리는 이미 1장에서 인스턴스를 생성 해 두었기에, 바로 2단계인 __VPC 네트워크__ 를 클릭하자.
여기서 친절하게 __외부 IP 주소__ 를 선택하라고 알려 줄 것이다.

<figure style="width:480px;">
    <img src="/imgs/Google-Cloud-2/Cloud-SQL-4.png" alt="Cloud-SQL-4">
</figure>

여기서는 유형을 고정으로 변경 한 다음, 외부주소를 복사하자.

<figure style="width:480px;">
    <img src="/imgs/Google-Cloud-2/Cloud-SQL-5.png" alt="Cloud-SQL-5">
</figure>

다시 Cloud SQL로 가서 인스턴스 세부정보 -> 연결로 가서 공개 IP에 새 네트워크를 추가하자. 이때 네트워크는 앞전에 VPC 네트워크의 주소이다.
이렇게 저장하면, 이제 해당 주소를 가진 Compute Engine 에서 mysql에 접속을 할 수 있다.</br>
mysql 접속 커맨드는,
`mysql -h [your_host] -u root -p[your_password]` 이다.
여기 까지 하였다면, 나머지는 기존 mysql 설정과 동일하게 적용 하면 된다.
*__참고로 개방된 네트워크를 의미하는 0.0.0.0/0 설정을 하게 된다면, 어떠한 기기에서도 접속이 가능하다.__*
여기까지가 Cloud SQL 연결법이며, 추가적으로 다른 연결 설정을 하고 싶다면 [여기](https://cloud.google.com/sql/docs/mysql/external-connection-methods?hl=ko&_ga=2.170452259.-2023315922.1572834985)를 참고하자!