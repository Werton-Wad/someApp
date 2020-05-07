import React from 'react';
import { Link } from 'react-router-dom';

import { transformString } from './utilis';
import './post.css';


const PostList = (props) => {
  const { toggledPage, onDelete } = props;
  return (
    <div>
      {toggledPage.map(post => (
        <div key={post.id} className="mb-3">
          <h3>{post.title}</h3>
          <p>{transformString(post.body)}</p>
          <button onClick={() => onDelete(post.id)} className="btn btn-danger mr-2">Удалить</button>
          <Link to={`/posts/${post.id}`} className="btn btn-primary">Подробнее</Link>
        </div>
      ))}
    </div>
  );
}

export default PostList;
