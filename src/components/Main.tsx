import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import avatar from '../assets/images/avatar.svg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <span className="corner corner-tl">Registry &middot; IB</span>
        <span className="corner corner-tr">Mauritius &middot; 2026</span>
        <i className="crop crop-tl"></i>
        <i className="crop crop-tr"></i>
        <i className="crop crop-bl"></i>
        <i className="crop crop-br"></i>

        <div className="image-wrapper">
          <img src={avatar} alt="Iqbal Bocus" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ibocus" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ibocus/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Iqbal<br/>Bocus<span className="accent">.</span></h1>
          <p>Global IT Lead &amp; Security Governance Builder &middot; On the Path to CISO</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ibocus" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ibocus/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>

        <span className="corner corner-bl">PMP&reg; &middot; CISM Candidate</span>
        <span className="corner corner-br">Ref. IB-2026-01</span>
      </div>
    </div>
  );
}

export default Main;
