// @flow strict
import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'gatsby';
import { PAGINATION } from '../../constants';
import styles from './Pagination.module.scss';

type Props = {
  prevPagePath: string,
  nextPagePath: string,
  hasNextPage: boolean,
  hasPrevPage: boolean,
  numPages: Number,
};

const cx = classNames.bind(styles);

const paginationLinks = (numPages) => {
  const pageNums = [];
  for (let i = 0; i <= numPages; i++) {
    pageNums.push(i);
  }
  return pageNums;
}

const Pagination = ({
  prevPagePath,
  nextPagePath,
  hasNextPage,
  hasPrevPage,
  numPages,
}: Props) => {
  const prevClassName = cx({
    'pagination__prev-link': true,
    'pagination__prev-link--disable': !hasPrevPage
  });

  const nextClassName = cx({
    'pagination__next-link': true,
    'pagination__next-link--disable': !hasNextPage
  });

  const results = paginationLinks(numPages);

  return (
    <div className={styles['pagination']} style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Link rel="prev" to={hasPrevPage ? prevPagePath : '/'} className={prevClassName}>{PAGINATION.PREV_PAGE}</Link>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '50%' }}>
        {
          results.map((page, i) =>
            <div key={i}>
              <Link style={{ display: 'block' }} key={`page_${i}`} to={!page ? '/' : `/page/${page}`}>{page + 1}</Link>
            </div>
          )
        }
      </div>
      <div>
        <Link rel="next" to={hasNextPage ? nextPagePath : '/'} className={nextClassName}>{PAGINATION.NEXT_PAGE}</Link>
      </div>
    </div>
  );
};

export default Pagination;
