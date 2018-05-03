import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import './App.css';
import Particles from 'react-particles-js';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';



const particlesOptions = {
                particles: {
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: "#000000",
                      blur: 5
                    }
                  }
                }
              }

const initialState = {
  input: '',
  imageUrl: '',
  validUrl: false,
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    }


  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined

    }})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  validateInput = (input) => {
    if (input.endsWith(".jpg")) {
      return true;
    }
  }

  onButtonSubmit = () => {
    if (this.validateInput(this.state.input)) {
      this.setState({imageUrl: this.state.input});
        fetch('https://aqueous-waters-61006.herokuapp.com/imageurl', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            input: this.state.input
          })
        })
        .then(response => response.json())
        .then(response =>
        {
          if(response) {
            fetch('https://aqueous-waters-61006.herokuapp.com/image', {
              method: 'put',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                id: this.state.user.id
              })
            })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, {entries: count}))
            })
          }
          this.displayFaceBox(this.calculateFaceLocation(response))
        })
        .catch(err => console.log(err));
    }
  }

  onRouteChange=(route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    return (
      <div className="App">
        <div className="header2">
          <Logo className='logo'/>
          <h1 className='title'>Face Finder</h1>
        </div>
        {this.state.route === 'home'
          ? <div>
              <Navigation  isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
                <Logo />
                <Rank name={this.state.user.name} entries={this.state.user.entries}/>
                <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}/>
                {this.state.validUrl
                  ? <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/> :
                  <p>Please enter a Valid link to a JPG image.</p>
                }
            </div>
          : (this.state.route === 'signin' || this.state.route === 'signout'
              ?  <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              :  <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )

            }
      </div>
    );
  }
}

export default App;
