import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/ibocus" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/ibocus/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Iqbal Bocus &middot; built with the <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">react-portfolio-template</a></p>
    </footer>
  );
}

export default Footer;
