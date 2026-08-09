import React from "react";
import cyberready from '../assets/images/proj-cyberready.svg';
import cyberreadyCerts from '../assets/images/proj-cyberready-certs.svg';
import registry from '../assets/images/proj-registry.svg';
import cism from '../assets/images/proj-cism.svg';
import pmToolkit from '../assets/images/proj-pmtoolkit.svg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Built, Not Just Talked About</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://cyberready.vercel.app/" target="_blank" rel="noreferrer"><img src={cyberready} className="zoom" alt="CyberReady thumbnail" width="100%"/></a>
                <a href="https://cyberready.vercel.app/" target="_blank" rel="noreferrer"><h2>CyberReady</h2></a>
                <p>Free, AI-powered 5-minute security self-assessment for SMEs. Scores across 6 domains and returns a prioritised 30/90/365-day action roadmap, built on NIST and ISO 27001 principles.</p>
            </div>
            <div className="project">
                <a href="https://ibocus.github.io/cyberready-certifications/" target="_blank" rel="noreferrer"><img src={cyberreadyCerts} className="zoom" alt="CyberReady Certifications thumbnail" width="100%"/></a>
                <a href="https://ibocus.github.io/cyberready-certifications/" target="_blank" rel="noreferrer"><h2>CyberReady Certifications</h2></a>
                <p>Free practice-exam platform in public beta: GRC &amp; ISO 27001, Security Management, Technical Security Fundamentals, and Cloud Security Essentials, with instant explanations.</p>
            </div>
            <div className="project">
                <a href="https://ibocus.github.io/registry-demo/" target="_blank" rel="noreferrer"><img src={registry} className="zoom" alt="Registry thumbnail" width="100%"/></a>
                <a href="https://ibocus.github.io/registry-demo/" target="_blank" rel="noreferrer"><h2>Registry</h2></a>
                <p>A compliance and ops platform for Mauritius management companies &mdash; statutory calendar, UBO registers, sanctions screening, time tracking, and billing in one place.</p>
            </div>
            <div className="project">
                <a href="https://bocusiqbal.gumroad.com/" target="_blank" rel="noreferrer"><img src={cism} className="zoom" alt="CISM Practice Bank thumbnail" width="100%"/></a>
                <a href="https://bocusiqbal.gumroad.com/" target="_blank" rel="noreferrer"><h2>CISM Practice Bank &amp; Mindset Tracker</h2></a>
                <p>50 original scenario questions weighted like the real CISM exam, plus an 18-week study tracker and mindset guide built from my own exam prep mistakes.</p>
            </div>
            <div className="project">
                <a href="https://www.linkedin.com/in/ibocus/" target="_blank" rel="noreferrer"><img src={pmToolkit} className="zoom" alt="PM Excel Toolkit thumbnail" width="100%"/></a>
                <a href="https://www.linkedin.com/in/ibocus/" target="_blank" rel="noreferrer"><h2>PM Excel Toolkit</h2></a>
                <p>A zero-bloat, PMP-compliant project tracking toolkit in a single file: executive dashboards, dynamic Gantt charts, RACI, risk matrix, and change logs.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
