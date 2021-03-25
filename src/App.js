/* eslint-disable react/prop-types */
import { React, Component } from 'react';
import logo from './logo.svg';
import './App.css';

process.title = "myReactApp";

class App extends Component {
  componentDidMount() {
    document.title = "chrisboston.info";
  }
  render() {
    return (
      <div className="App">
        <div className="ContentBox">
          <DiagonalPlayground/>
          <header className="App-header">
            <h1>Chris Boston</h1>
            <h2>Software Engineer</h2>
          </header>
          <NavBar/>
          <ContactInfo/>
          <Attribution/>
          <DiagonalPlayground/>
        </div>  
      </div>
    );
  }
}

class ContactInfo extends Component {
  render() {
    return (
      <div className="ContactInfo">
        <h4 className="LetsConnect">{"Let's connect"}</h4>
        <p className="ContactDetails">
          (240) 630-4185
          <br/>
          bostonc@umich.edu  
        </p>
      </div>
    );
  }
}

class Attribution extends Component {
  render() {
    return (
      <div className="AttributionContainer">
        <span className="AttributionText">Powered by React.js</span>
        <span className="LogoBox">
          <img src={logo} className="App-logo" alt="logo" />
        </span>
      </div>
    );
  }
}

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <NavButton text="Github" link="https://github.com/bostonc"/>
        <NavButton text="LinkedIn" link="https://www.linkedin.com/in/bostonchrisb/"/>
        <NavButton text="AngelList" link="https://angel.co/bostonchrisb"/>
        <NavButton text="Twitter" link="https://twitter.com/bostonc322"/>
        <NavButton text="Résumé" link="./Chris_Boston_Full_Stack_Resume.pdf" download="Chris_Boston_Resume.pdf"/>
      </div>
    );
  }
}

class NavButton extends Component {
  render() {
    return (
      <span>
        <a 
          href={this.props.link}
          rel="noreferrer"
          target="_blank"
          download={this.props.download}
        >
          <button className="NavButton">
            <svg viewBox="0 0 100 60" 
              preserveAspectRatio="none"
              className="border"
            >
              <polyline points="99,1 99,59 1,59 1,1 99,1" 
                vectorEffect="non-scaling-stroke"
                className="hl-line"/>
            </svg>
            <span className="ButtonText">{this.props.text}</span>  
          </button>
        </a>
      </span>
    );
  }
}

class DiagonalPlayground extends Component {
  render() {
    return (
      <div className="diagonalBox">
        <div className="diagonalContent">
          <br/>
        </div>
      </div>
    );
  }
}

export default App;

