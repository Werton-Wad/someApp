import React from 'react';
import axios from 'axios';

import config from 'config';
import UserList from './UserList';

class UsersPage extends React.Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    try {
      const { data } = await axios(`${config.apiUrl}/users`);
      this.setState({ users: data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <h1>Список пользователей</h1>
        <UserList users={this.state.users} />
      </>
    )
  }
}

export default UsersPage;