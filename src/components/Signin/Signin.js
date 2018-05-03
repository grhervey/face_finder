import React from 'react';
import Button from '../Button/Button';
import './Signin.css';

class Signin extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  };

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  };

  onSubmitSignIn = (event) => {
    event.preventDefault();
    fetch('https://aqueous-waters-61006.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    .catch(err => console.log(err))
    .then(response => response.json())
    .then(user => {
      if (user.id) {
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }
    })
  }

  render() {
    return (
      <div className='super-container'>
        <article className="article-container">
          <main className="">
            <form className="form-container">
              <fieldset id="sign_up" className="form-container">
                <h1 className="header">Sign In</h1>
                <div className="input-container">
                  <label className="form-label" htmlFor="email-address">Email</label>
                  <input
                    type="text"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                    />
                </div>
                <div className="input-container">
                  <label className="form-label" htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                    />
                </div>
              </fieldset>
              <div className="buttons">
                <Button onClick={this.onSubmitSignIn} label='Enter'/>
              </div>
            </form>
          </main>
        </article>
      </div>
    );
  }
}
export default Signin;
