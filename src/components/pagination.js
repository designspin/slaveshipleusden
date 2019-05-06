import React from 'react';
import { Link } from 'gatsby';
import { merge } from 'lodash';

const Pagination = (props) => {
  const defaults = {
    page: 0,
    pages: 0,
    prev: 0,
    next: 0,
    total: 0,
    prevText: '<< Previous',
    nextText: 'Next >>'
  };
  console.log(props);
  const myProps = merge({}, defaults, props);

  if(myProps.pages > 1) {
    return (
      <ul className="pagination">
        <li><Link to={myProps.prev} className={`btn btn--pager ${myProps.page === 1 ? 'btn--disabled' : ''}`}>{myProps.prevText}</Link></li>
        <li><span>Page { myProps.page } of  { myProps.pages }</span></li>
        <li><Link to={myProps.next} className={`btn btn--pager ${myProps.page === myProps.pages && 'btn--disabled'}`}>{myProps.nextText}</Link></li>
      </ul>
    )
  }
  return null;
}

export default Pagination;