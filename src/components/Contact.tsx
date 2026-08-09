import React from 'react';
import '../assets/styles/Contact.scss';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Get in Touch</h1>
          <p>Open to global remote CISO / security leadership conversations &mdash; or just talk PM and GRC.</p>
          <div className="contact-links">
            <Button variant="contained" startIcon={<EmailIcon />} href="mailto:ibocus@hotmail.com">
              Email
            </Button>
            <Button variant="outlined" startIcon={<LinkedInIcon />} href="https://www.linkedin.com/in/ibocus/" target="_blank" rel="noreferrer">
              LinkedIn
            </Button>
            <Button variant="outlined" startIcon={<GitHubIcon />} href="https://github.com/ibocus" target="_blank" rel="noreferrer">
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
