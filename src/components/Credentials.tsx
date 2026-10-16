import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiagramProject, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Credentials.scss';

const CREDENTIALS = [
  {
    id: "pmp",
    icon: faDiagramProject,
    code: "PMP",
    name: "Project Management Professional",
    issuer: "Project Management Institute",
    variant: "gold",
  },
  {
    id: "cism",
    icon: faShieldHalved,
    code: "CISM",
    name: "Certified Information Security Manager",
    issuer: "ISACA",
    variant: "violet",
  },
];

function Credentials() {
  return (
    <div className="credentials-container" id="credentials">
      <h1>Credentials</h1>
      <div className="credentials-grid">
        {CREDENTIALS.map((cred) => (
          <div className={`credential-card credential-card-${cred.variant}`} key={cred.id}>
            <div className="credential-badge">
              <FontAwesomeIcon icon={cred.icon} />
            </div>
            <div className="credential-info">
              <h2>{cred.code}</h2>
              <p className="credential-name">{cred.name}</p>
              <p className="credential-issuer">{cred.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Credentials;
