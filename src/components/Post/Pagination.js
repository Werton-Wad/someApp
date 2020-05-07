import React from 'react';

import { paginationPages } from './utilis';

const Pagination = (props) => {
    const { posts, changePage } = props;
    const paginationPagesArray = paginationPages(posts, 10);

    return (
        <div className="paginations__wrapper">
            {paginationPagesArray.map((el, i) => (
                <div
                    key={i}
                    className={i === 0 ? 'paginations__btns paginations__btn-active' : 'paginations__btns'}
                    onClick={(e) => changePage(e, paginationPagesArray)}
                >
                {i + 1}</div>
            ))}
        </div>
    );
}

export default Pagination;