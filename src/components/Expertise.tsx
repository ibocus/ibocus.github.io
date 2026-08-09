import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faDiagramProject, faRobot } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "ISO/IEC 27001",
    "GRC",
    "NIST CSF",
    "ITGC",
    "Data Governance",
    "Risk Management",
    "Vendor Risk",
];

const labelsSecond = [
    "PMP",
    "IT Strategy",
    "Stakeholder Management",
    "Vendor Management",
    "Digital Transformation",
    "Agile Delivery",
];

const labelsThird = [
    "Azure Security",
    "Microsoft 365 Security",
    "Power Automate",
    "Applied AI",
    "Secure SDLC",
    "Web App Development",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faShieldHalved} size="3x"/>
                    <h3>Security Governance &amp; Compliance</h3>
                    <p>15+ years across financial services, legal, and healthcare. Lead Implementor of ISO 27001:2022 &mdash; built an ISMS from the ground up, from risk assessment to Annex A controls to audit readiness.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Focus areas:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDiagramProject} size="3x"/>
                    <h3>Project &amp; Program Delivery</h3>
                    <p>PMP-certified, MSc in Software Project Management. I run technology initiatives end to end &mdash; planning, stakeholder alignment, vendor oversight, and delivery in regulated environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Focus areas:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>Building the Tools, Not Just the Slides</h3>
                    <p>Frameworks only work when someone turns them into something a team can use on a Tuesday morning. I build the assessments, dashboards, and trackers &mdash; not just the policy documents.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Focus areas:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
