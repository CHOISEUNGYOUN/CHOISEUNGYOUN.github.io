---
title: "Google Cloud-1 인스턴스 생성하기"
date: "2019-11-11T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/Google-Cloud-1-인스턴스-생성하기/"
category: "Google Cloud"
tags:
  - "Google Cloud"
  - "Cloud Computing"
  - "GCP"
  - "구글 클라우드 플랫폼"
  - "Google Cloud Platform in Action"
description: "구글 클라우드 플랫폼 인 액션과 함께하는 GCP 학습"
---
__GCP 자격증 도전을 위한 첫걸음!__
이번 포스팅 부터 필자가 새롭게 도전하는 GCP(Google Cloud Platform)에 대하여 `구글 클라우드 플랫폼 인 액션` 이라는 책으로 포스팅을 하겠다.__~~(절대 회사일 때문에 하는거 아니다.)~~__</br>

#### *포스팅은 직접 사용하는 기능에 대한 실습 위주로 할 것이기에, 클라우드 장 단점에 대해서는 구글링을 통하여 알아보도록 하자!*

### 1. GCP 회원가입
GCP 서비스의 경우, Google 계정이 있다면 누구든지 사용가능하다. 스마트폰을 안드로이드 플랫폼을 사용하시는 분들이라면, 구글 아이디 하나쯤은 있을테니, 그것을 활용하고, 만약 없다면 이번기회에 새로 계정을 만들자.</br>

계정을 생성하였다면, https://cloud.google.com 으로 이동하여 콘솔을 시작하도록 하자. 가입을 완료하면 12개월 간 무료로 사용 할 수 있도록 $300 가량의 크레딧을 제공 해 주니, 연습하는 동안 마음껏 써보도록 하자.(그렇다고 막 쓰면 금방 소진되니 그때 그때 인스턴스를 생성하고 삭제 또는 정지 시키는것은 까먹지 말자.)

### 2. 프로젝트 관리
이렇게 계정을 생성하고 나면 자동으로 My First Project 라는 프로젝트가 생성되어 있을 것이다. 이것을 통하여 실습을 할 수도 있고, 만약 새로운 프로젝트를 생성하고 싶다면, 신규 프로젝트를 생성하여도 좋다.

### 3. Cloud SDK 섪치하기
GCP의 기능을 terminal에서 사용 할 수 있도록 도와주는 도구가 있는데 이것이 바로 `Cloud SDK`이다. 모든 운영체제에서 사용 할 수 있도록 지원을 하니, https://cloud.google.com/sdk/ 로 접속하여 각자 맞는 운영체제에 맞추어 설치하도록 하자.

### 4. SDK 설정하기
  - 처음 사용한다면 먼저 `gcloud auth login`으로 계정을 등록하자.
  - 그 다음, `gcloud config set project [your_project_id]`로 프로젝트를 등록하자. 프로젝트는 콘솔에서 확인 할 수 있다.
  - 그리고 항상 지금 설정되어 있는 계정으로 인증 할 수 있도록 `gcloud auth application-default login`을 입력하자.

### 5. Compute Engine 인스턴스 생성하기.
AWS에 EC2 가 있다면, GCP 에는 동일한 기능을 지원해주는 Compute Engine이 있다. 이미 AWS를 사용 해 보았다면, 손쉽게 인스턴스를 생성할 수 있고 만일 경험이 없더라도, 비교적 사용하기 쉬운 UI구성이니, 이번기회에 한번 사용해보자.
- 먼저 콘솔에서 __Compute Engine/VM 인스턴스__ 로 이동한다.
- 화면 중앙에 있는 __인스턴스 만들기__ 를 클릭하자.
- 이름을 설정해주고, 리전과 영억을 확인하자.(특히 리전의 경우, 물리적인 서버의 위치를 결정 하는 것이기에, 서비스 할 위치를 감안하여 생성하는 것이 좋다.)
- 기타 설정들은 서비스 용도 및 규모에 따라 달라지기에, 각 속성들의 스펙을 고려하여 생성한다.__(실습을 위한 용도라면, n1-standard-1 가 가장 적절하다.)__
- 설정을 다 하였다면, __만들기__ 를 클릭하자.
- 만드는데는 최대 몇분정도 걸리기에 느긋하게 기다리자.
- Terminal로 가서 `gcloud compute instances list` 를 입력하면 현재 default 프로젝트에 생성된 인스턴스 리스트들을 확인 할 수 있다.

### Node를 이용하여 인스턴스 조작하기
GCP는 현재 두가지 언어를 지원해 주는데(Node.js, Python) 현재 파이썬의 경우, 베타버전이기 때문에 Node.js를 사용하는 것이 좀 더 안정적이다. 책에 나와있는 코드는 클로저 형식으로 추정되나, 현재 클래스형으로 바뀌었기에, 해당 부분을 추가한 코드를 아래에 첨부하도록 하겠다.

#### 인스턴스 확인하기
```Javascript
const GCE = require('@google-cloud/compute')
const my_instance = new GCE({projectId: 'your_project'})
const zone = my_instance.zone('asia-east1-a')
console.log('Getting your VMs...');

zone.getVMs().then((data) =>{
    data[0].forEach((vm) => {
        console.log('Found a VM called', vm.name);
    });
    console.log('Done.');
})
```

#### 인스턴스 중지하기
```Javascript
const GCE = require('@google-cloud/compute')
const my_instance = new GCE({projectId: 'your_project'})
const zone = my_instance.zone('asia-east1-a')
console.log('Getting your VMs...');

zone.getVMs().then((data) =>{
    data[0].forEach((vm) => {
        console.log('Found a VM called', vm.name);
        console.log('Stopping', vm.name, '...');
        vm.stop((err, operation) => {
            operation.on('complete', (err) =>{
                console.log('Stopped', vm.name);
            })
        })
    });
})
```