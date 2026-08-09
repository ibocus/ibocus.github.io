import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import avatar from '../assets/images/avatar.svg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Iqbal Bocus" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ibocus" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ibocus/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Iqbal Bocus, PMP®</h1>
          <p>Global IT Lead &middot; PM + Security Governance &middot; On the Path to CISO</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ibocus" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ibocus/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
