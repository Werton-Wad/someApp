import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import config from 'config';

class UserPage extends React.Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    const userId = this.props.match.params.id;

    try {
      const { data } = await axios(`${config.apiUrl}/users/${userId}`);
      this.setState({ user: data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { user } = this.state;

    return (
      <>
        <Link to="/users" className="btn btn-sm btn-outline-primary">Назад</Link>
        <h1>Страница пользователя {user.name}</h1>
        <p>Номер телефона: {user.phone}</p>
      </>
    )
  }
}

export default UserPage;