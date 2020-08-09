---
title: "Crontab이란?"
date: "2020-08-09T16:10:32.169Z"
template: "post"
draft: false
slug: "/posts/what-is-crontab/"
category: "Crontab"
tags:
  - "Crontab"
  - "Linux"
  - "Wecode"
  - "위코드"
description: "Crontab이란?"
---

#### 회사에서 네이버 블로그 및 플레이스 리뷰 크롤링 엔진을 업데이트 하고 `Crontab` 을 사용하여 주기적으로 데이터를 수집해야하는 프로젝트를 맡게되어 크론탭에 대하여 좀 더 자세히 알아보기로 했다.

## Cron이란?

`Cron`은 Unix, solaris, Linux OS에 탑재된 유틸리티로써 백그라운드에서 주기적으로 설정된 명령을 수행할 수 있게 해준다.
크론이란 명칭이 사용되는 정확한 이유는 없으나 유닉스 OS 크론 개발자인 `Ken Thompson` 에 의하면 `Cron`은 그리스 접두사인 `chron`에서 파생되었으며, 뜻은 시간이라고 한다.

## Crontab 명령어

```Shell
crontab -e # 크론탭의 파일을 수정하거나 새로운 크론잡을 등록할 수 있음.
crontab -l # 크론잡의 리스트와 크론잡이 크론탭 파일 컨텐츠를 볼수 있음.
crontab -r # 크론잡을 삭제 하는 커맨드.
crontab -v # 크론탭 파일에서 마지막으로 수정한 내역을 확인하는 커맨드.
```

## Crontab 문법
```Shell
  *   *  *   *   *
# 분  시  일  월   주

# 예 : 매일 오후 6시 30분에 크론잡을 등록하는 경우.
30 18 * * * rm /home/someuser/tmp/*
# 예 : 매시 15분마다 동작하는 크론잡을 등록하는 경우.
15 * * * * rm /home/someuser/tmp/*
# 예 : 5분 간격으로 동작하는 크론잡을 등록하는 경우.
*/5 * * * * rm /home/someuser/tmp/*
# 예 : 매 5시간 간격으로 동작하는 크론잡을 등록하는 경우.
* */5 * * * rm /home/someuser/tmp/*
# 예 : 크론잡 로그파일을 등록하는 경우.
30 18 * * * rm /home/someuser/tmp/* > /home/someuser/cronlogs/clean_tmp_dir.log
```

## Crontab 파일 위치
```Shell
# Mac OS X
/usr/lib/cron/tabs/
# BSD Unix
/var/cron/tabs/
# Solaris, HP-UX, Debian, Ubuntu
/var/spool/cron/crontabs/
# AIX, Red Hat Linux, CentOS, Ferdora
/var/spool/cron/
```
크론 관리가 필요하다면 이정도만 숙지하여도 충분히 이용이 가능하다!

\*Reference:<br/>
[Admin's Choice Crontab – Quick Reference](https://www.adminschoice.com/crontab-quick-reference)<br/>
