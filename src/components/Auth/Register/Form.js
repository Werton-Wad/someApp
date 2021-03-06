import React from 'react';
import withAuthMethods from '../WithAuthMethods';

class RegisterForm extends React.Component {
  state = {
    name: '',
    lname: '',
    email: '',
    password: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    console.log(this.props);

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row align-items-center">
          <div className="col-auto">
            <input name="name" type="text" className="form-control" placeholder="Имя" onChange={this.handleChange} />
          </div>
          <div className="col-auto">
            <input name="lname" type="text" className="form-control" placeholder="Фамилия" onChange={this.handleChange} />
          </div>
          <div className="col-auto">
            <input name="email" type="email" className="form-control" placeholder="Email" onChange={this.handleChange} />
          </div>
          <div className="col-auto">
            <input name="password" type="password" className="form-control" placeholder="Пароль" onChange={this.handleChange} />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">Регистрация</button>
          </div>
        </div>
      </form>
    )
  }
}

export default withAuthMethods(RegisterForm);
