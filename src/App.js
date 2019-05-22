import React from "react";
import avatar from "./img/avatar_op.png";
import ln from "./img/linkedin-in-brands.svg";
import gh from "./img/github-brands.svg";
import email from "./img/envelope-regular.svg";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={avatar} className="App-logo" alt="logo" />{" "}
        <h1>Tomáš Vahalík</h1>
        <p>Full-Stack Webdeveloper</p>
        <p>
          <a href="https://www.linkedin.com/in/tomas-vahalik" target="_blank" rel="noopener noreferrer">
            <img className="icon" src={ln} alt="LinkedIn" />
          </a>

          <a href="https://github.com/straiki" target="_blank" rel="noopener noreferrer">
            <img className="icon" src={gh} alt="Git Hub" />
          </a>

          <a href="mailto:webcontact@vahalik.cz" target="_blank" rel="noopener noreferrer">
            <img className="icon" src={email} alt="E-mail me!" />
          </a>
        </p>
      </header>
      <footer>
        Made with <span aria-label="Love" role="img">❤️</span> using Font Awesome icons <a href="https://fontawesome.com/license" target="_blank" rel="noopener noreferrer" title="License"><span aria-label="Thanks" role="img">🙏</span></a>
      </footer>
    </div>
  );
}

export default App;
