import React from 'react';

import UserListItem from './UserListItem';

const UserList = (props) => {
  const { users } = props;

  const $items = users.map(user => (
    <UserListItem key={user.id} {...user} />
  ))

  return (
    <ul>
      {$items}
    </ul>
  )
}

export default UserList;