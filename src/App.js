import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Header from './components/App/Header';
import HomePage from './components/HomePage';
import LoginPage from './components/Auth/Login/Page';
import RegisterPage from './components/Auth/Register/Page';
import UsersPage from './components/User/UsersPage';
import UserPage from './components/User/UserPage';
import TechPage from './components/Tech/Page';

import PostEditPage from './components/Post/PostEditPage';
import PostListPage from './components/Post/ListPage';
import PostSinglePage from './components/Post/SinglePage';
import MemesApp from './components/memesApp/MemesApp';
import ClickCounter from './components/common/ClickCounter';

function App() {
  return (
    <>
    <ClickCounter />
    <div className="container py-5">
      <h2>Header</h2>
      <hr />
        <Header />
      <hr />
      <Switch>
        <PrivateRoute path="/users/add" component={null} />
        <PrivateRoute path="/users/edit" component={null} />
        <PrivateRoute path="/users/:id" component={UserPage} />
        <PrivateRoute path="/users" component={UsersPage} />
        <PrivateRoute path="/posts/:id/edit" component={PostEditPage} />
        <Route path="/posts/:id" render={props => <PostSinglePage {...props} id={unzipIdFrom(props)} />} />
        <PrivateRoute path="/posts" component={PostListPage} />
        <PrivateRoute path="/tech" component={TechPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/memes" component={MemesApp} />
        <PrivateRoute path="/" exact component={HomePage} />
        <Route path="" render={() => <>404я. Страница не найдена!</>} />
      </Switch>
      <hr />
      <h2>Footer</h2>
    </div>
    </>
  );
}

export default App;

function unzipIdFrom(props) {
  return Number(props.match.params.id);
}
