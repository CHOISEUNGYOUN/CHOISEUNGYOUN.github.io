// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();
  console.log(author.contacts.linkedin)

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        {author.bio}
        <a
          className={styles['author__bio-twitter']}
          href={getContactHref('linkedin', author.contacts.linkedin)}
          rel="https://www.linkedin.com/in/seungyoun-choi-98192b108/"
          target="_blank"
        >
          <strong>{author.name}</strong> on linkedIn
        </a>
      </p>
    </div>
  );
};

export default Author;
