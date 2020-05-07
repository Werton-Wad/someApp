import React from 'react';
import { Link } from 'react-router-dom';

const UserListItem = (props) => {
  const { id, name } = props;

  return (
    <li className="mb-2">
      {name}

      <Link to={`/users/${id}`} className="btn btn-sm btn-outline-secondary ml-2">Открыть</Link>
    </li>
  )
}

export default UserListItem;