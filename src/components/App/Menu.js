import React from 'react'
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import auth from 'helpers/auth';

const Menu = () => {

  const history = useHistory();

  const handleClick = () => {
    auth.clearAuthInformation();
    history.push('/login');
  }

  return (
    <ul>
      <li><NavLink to="/" exact activeStyle={{color: 'red'}}>Главная страница</NavLink></li>
      <li><NavLink to="/users" activeStyle={{ color: 'red' }}>Пользователи (state прямо в React компоненте, ajax запросы)</NavLink></li>
      <li><NavLink to="/tech" activeStyle={{ color: 'red' }}>Техника (Redux окружение, данные в хранилище редакса, без ajax запросов)</NavLink></li>
      <li><NavLink to="/posts" activeStyle={{ color: 'red' }}>Записи (Redux окружение, с ajax запросами, с redux-thunk  )</NavLink></li>
      <li><NavLink to="/login" activeStyle={{ color: 'red' }}>Вход</NavLink></li>
      <li><NavLink to="/register" activeStyle={{ color: 'red' }}>Регистрация</NavLink></li>
      <li><NavLink to="/memes" activeStyle={{ color: 'red' }}>Memes</NavLink></li>
      <button onClick={handleClick}>Выход</button>
    </ul>
  )
}

export default Menu;
