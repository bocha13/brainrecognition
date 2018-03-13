import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Rank from './components/rank/Rank';
import './App.css';

const ParticlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={ ParticlesOptions }
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
{/*         <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
