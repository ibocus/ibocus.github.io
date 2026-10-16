import React from "react";
import cyberready from '../assets/images/proj-cyberready.svg';
import cyberreadyCerts from '../assets/images/proj-cyberready-certs.svg';
import registry from '../assets/images/proj-registry.svg';
import cism from '../assets/images/proj-cism.svg';
import pmToolkit from '../assets/images/proj-pmtoolkit.svg';
import pmiCalendar from '../assets/images/proj-pmi-calendar.svg';
import hiddenRealities from '../assets/images/proj-hidden-realities.svg';
import carServiceBooking from '../assets/images/proj-car-service-booking.svg';
import careRecruitment from '../assets/images/proj-care-recruitment.svg';
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
                <p>A compliance and ops platform for Mauritius management companies: statutory calendar, UBO registers, sanctions screening, time tracking, and billing in one place.</p>
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
            <div className="project">
                <a href="https://pmi-mauritius-calendar.vercel.app" target="_blank" rel="noreferrer"><img src={pmiCalendar} className="zoom" alt="PMI Mauritius Calendar thumbnail" width="100%"/></a>
                <a href="https://pmi-mauritius-calendar.vercel.app" target="_blank" rel="noreferrer"><h2>PMI Mauritius Calendar</h2></a>
                <p>A yearly workshop calendar proposal for the PMI Mauritius Chapter, with PDU values on each event so members can plan certification renewal ahead of time.</p>
            </div>
            <div className="project">
                <a href="https://github.com/ibocus/hidden-realities-playbook" target="_blank" rel="noreferrer"><img src={hiddenRealities} className="zoom" alt="Hidden Realities Playbook thumbnail" width="100%"/></a>
                <a href="https://github.com/ibocus/hidden-realities-playbook" target="_blank" rel="noreferrer"><h2>Hidden Realities Playbook</h2></a>
                <p>Real, anonymised stories captured live during an ISO 27001:2022 ISMS implementation &mdash; the organisational 80% the frameworks don&apos;t tell you about.</p>
            </div>
            <div className="project">
                <a href="https://car-service-booking-brown.vercel.app" target="_blank" rel="noreferrer"><img src={carServiceBooking} className="zoom" alt="Car Service Booking thumbnail" width="100%"/></a>
                <a href="https://car-service-booking-brown.vercel.app" target="_blank" rel="noreferrer"><h2>Car Service Booking</h2></a>
                <p>A structured booking page pitched to an independent mechanic as a WhatsApp-only-booking replacement: a 4-step wizard for customers and a job-sheet admin view for the garage.</p>
            </div>
            <div className="project">
                <a href="https://care-recruitment-app.vercel.app" target="_blank" rel="noreferrer"><img src={careRecruitment} className="zoom" alt="Care Recruitment Platform thumbnail" width="100%"/></a>
                <a href="https://care-recruitment-app.vercel.app" target="_blank" rel="noreferrer"><h2>Care Recruitment Platform</h2></a>
                <p>A de-branded, demo-mode recruitment pipeline for care agencies: Supabase-backed applications, document handling, and WhatsApp-driven candidate updates.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
