import React from 'react';
import './Register.css';

import Button from '../Button/Button';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  };

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  };

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  };

  onSubmitSignIn = (event) => {
    event.preventDefault();
    fetch('https://aqueous-waters-61006.herokuapp.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
    .catch(err => console.log(err))
    .then(response => response.json())
    .then(user => {
      if (user.id) {
        this.props.loadUser(user)
        this.props.onRouteChange('home');
      }
    })
  }
  render() {
    return (
      <div id='register' className='super-container'>
        <article className="article-container">
           <main className="">
              <form className="form-container">
                <fieldset id="sign_up" className="form-container">
                  <h1 className="header">Register</h1>
                   <div className="input-container">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input
                      className=""
                      type="text"
                      name="name"
                      id="name"
                      onChange={this.onNameChange}/>
                  </div>
                  <div className="input-container">
                  <label className="form-label" htmlFor="email-address">Email</label>
                  <input
                    className="email"
                    type="text"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                    />
                </div>
                <div className="input-container">
                  <label className="form-label" htmlFor="password">Password</label>
                  <input
                    className="password"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                    />
                </div>
                </fieldset>
                <div className="buttons">
                  <Button onClick={this.onSubmitSignIn} label='Join'/>
                </div>
              </form>
           </main>
        </article>
      </div>
    );
  }
}
export default Register;
