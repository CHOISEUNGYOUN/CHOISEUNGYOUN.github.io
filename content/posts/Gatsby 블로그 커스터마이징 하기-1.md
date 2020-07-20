---
title: "Gatsby 블로그 커스터마이징 하기-1"
date: "2020-07-20T23:30:32.169Z"
template: "post"
draft: false
slug: "/posts/customizing-gatsby-theme-1/"
category: "Gatsby"
tags:
  - "React"
  - "Gatsby"
  - "Wecode"
  - "위코드"
description: "개츠비 테마 수정하기-1"
---

#### 작년부터 필자는 현재 블로그 테마로 사용하고 있는 `gatsby-starter-lumen`을 수정하려고 계획하고 있었으나, 이러저러한 핑계로 하지 않고 있었다. 이번기회에 적당히 편의성을 주기 위해서 개편하기로 마음먹고 하나 하나씩 수정해보기로 했다.

#### 해당 테마 설치 방법은 [여기](https://yeri-kim.github.io/posts/how-to-install-gatsby/) 를 참조하길 바란다.

## 날짜 포멧 수정하기([Moment.js](https://momentjs.com/))

우선 간단하게 날짜 포멧부터 고쳐보기로 했다. 이건 생각보다 간단하게 해결 할 수 있다. <br/>
`component/feed/feeds.js` 파일을 열어보면 아래와 같은 코드를 발견할 수 있다.

<span style="font-size : 12px;">

```JSX
// @flow strict
import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import type { Edges } from '../../types';
import styles from './Feed.module.scss';

type Props = {
edges: Edges
};

const Feed = ({ edges }: Props) => (

  <div className={styles['feed']}>
    {edges.map((edge) => (
      <div className={styles['feed__item']} key={edge.node.fields.slug}>
        <div className={styles['feed__item-meta']}>
          <time className={styles['feed__item-meta-time']} dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
            {moment(edge.node.frontmatter.date).format('MMMM YYYY')}
          </time>
          <span className={styles['feed__item-meta-divider']} />
          <span className={styles['feed__item-meta-category']}>
            <Link to={edge.node.fields.categorySlug} className={styles['feed__item-meta-category-link']}>{edge.node.frontmatter.category}</Link>
          </span>
        </div>
        <h2 className={styles['feed__item-title']}>
          <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
        </h2>
        <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}</p>
        <Link className={styles['feed__item-readmore']} to={edge.node.fields.slug}>Read</Link>
      </div>
    ))}
  </div>
);

export default Feed;

```

</span>

여기서 우리가 눈여겨 봐야할 것은 `moment`라는 함수이다. 위에 `import`선언에서 볼 수 있듯이, 해당 테마는 `moment`를 사용해서 날짜 포멧을 수정하고 있다. 그렇다는 것은, `moment.js`의 문서를 보고 날짜 포멧 형식만 맞춰준다면 내가 원하는 날짜 포멧으로 출력 할 수 있다는 것이다. <br />
기본적으로 되어있는 날짜 포멧은 동양인들에게 익숙하지 않을 것이기 때문에, 우리에게 친숙한 방향으로 수정을 할거라면 `YYYY MMMM DD` 로 출력을 하면 되나, 필자는 그냥 날짜와 요일만 추가하여 작성글 시점을 좀 더 명확하게 표현하고자 수정을 하였다.

<span style="font-size : 12px;">

```JSX
// @flow strict
import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import type { Edges } from '../../types';
import styles from './Feed.module.scss';

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => {
  return (
    <div className={styles['feed']}>
      {edges.map((edge) => (
        <div className={styles['feed__item']} key={edge.node.fields.slug}>
          <div className={styles['feed__item-meta']}>
            <time className={styles['feed__item-meta-time']} dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
              {moment(edge.node.frontmatter.date).format('MMMM, Do, dddd, YYYY')}
            </time>
            <span className={styles['feed__item-meta-divider']} />
            <span className={styles['feed__item-meta-category']}>
              <Link to={edge.node.fields.categorySlug} className={styles['feed__item-meta-category-link']}>{edge.node.frontmatter.category}</Link>
            </span>
          </div>
          <h2 className={styles['feed__item-title']}>
            <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
          </h2>
          <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}</p>
          <Link className={styles['feed__item-readmore']} to={edge.node.fields.slug}>Read</Link>
        </div>
      ))}
    </div>
  )
};

export default Feed;

```

</span>

위와같이 출력을 하게 된다면, `월, 일자, 요일, 년도` 순의 날짜 포멧형태가 지정되며, 피드의 제일 상단에 적용되어 있는 것을 확인 할 수 있을 것이다.

어렵지 않으니 만약 똑같은 테마를 사용하고 있다면 수정을 해보자!

\*Reference:<br/>
[Gatsby로 블로그 만들기](https://yeri-kim.github.io/posts/how-to-install-gatsby/)<br/>
[Moment.js](https://momentjs.com/docs/)
