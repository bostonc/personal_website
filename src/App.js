/* eslint-disable react/prop-types */
import { React, Component } from 'react';
import logo from './logo.svg';
import './App.css';

process.title = 'chrisboston';
class App extends Component {
  componentDidMount() {
    document.title = "chrisboston.info";
  }
  render() {
    return (
      <div className="App">
        <div className="ContentBox">
          <Header/>
          <AboutMeSection/>
          <NavBar/>
          <ContactInfo/>
          <Attribution/>
        </div>  
      </div>
    );
  }
}

const Header = () => {
  return (      
    <header className="NameAndTitle">
      <h1>Chris Boston</h1>
      <h2>Software Engineer</h2>
    </header>
  );
};

class AboutMeSection extends Component {
  render() {
    return (
      <div className="AboutMeSection">
        <img className='ProfilePic' src='./chrisboston.png'/>
        <AboutMeText/>
      </div>
    );
  }
}

class AboutMeText extends Component {
  render() {
    return (
      <div className="AboutMeText">
        <p>
          {`
            Hi, I'm Chris. If you're here, then you've probably found me interesting enough to at least consider working with, so thanks for that. Below you will find links to my various profiles around the web, as well as a résumé available for download. If you're here to collaborate, send me an email at the address provided. Let's build something together!
          `}
        </p>
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
        <NavButton text="Wellfound" link="https://wellfound.com/u/bostonchrisb"/>
        <NavButton text="Arena" link="https://app.arena.run/hub/arena/profile/chrisboston/"/>
        <NavButton text="VCF" link="./ChrisBostonContact.vcf"/>
        <NavButton text="Résumé" link="./Chris_Boston_Full_Stack_Resume.pdf" download="Chris_Boston_Resume.pdf"/>
      </div>
    );
  }
}

class NavButton extends Component {
  render() {
    return (
      <span className="ButtonFrame">
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

/*class DiagonalPlayground extends Component {
  render() {
    return (
      <div className="diagonalBox">
        <div className="diagonalContent">
          <br/>
        </div>
      </div>
    );
  }
}*/

export default App;

