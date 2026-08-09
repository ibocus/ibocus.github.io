import React from "react";
import ScrollReveal from "./ScrollReveal";
import '../assets/styles/Timeline.scss'

const HISTORY = [
  {
    date: "Jun 2024 - Present",
    title: "Global IT Lead / IT Operations Team Lead",
    org: "Aberdeen Services · Mauritius (supporting Besins Healthcare)",
    desc: "Leading ISO 27001:2022 adoption end to end, IT security hardening (AD hardening, IAM), and acting as IT Project Manager on key technology initiatives in a regulated healthcare environment.",
    current: true,
  },
  {
    date: "Jul 2023 - May 2024",
    title: "IT Project Manager & ISO 27001 Lead Implementor",
    org: "JurisTax Holdings · Ebene, Mauritius",
    desc: "Led modern workplace / M365 rollout, SharePoint Online deployment, Power Automate workflow automation, and built an ISMS from the ground up.",
    current: false,
  },
  {
    date: "Jan 2022 - Jul 2023",
    title: "Head of Emerging Technologies",
    org: "Techgenic Ltd · Quatre Bornes, Mauritius",
    desc: "Built the Analytics & Data-Driven Decision Making practice, drove AI/automation initiatives, and led client-facing technology advisory engagements.",
    current: false,
  },
  {
    date: "Jan 2018 - Mar 2023",
    title: "Assistant IT Manager",
    org: "Intercontinental Trust Ltd · Mauritius",
    desc: "Owned IT General Controls (ITGC) for FSC-regulated audit cycles, administered Citrix VDI, and liaised between IT, Compliance, Risk, and Operations.",
    current: false,
  },
];

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <div className="ledger-history">
          {HISTORY.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 80}>
              <div className={`ledger-entry${item.current ? " current" : ""}`}>
                <span className="ledger-index">{String(i + 1).padStart(2, "0")}</span>
                <div className="ledger-body">
                  <div className="ledger-head">
                    <h3>{item.title}</h3>
                    {item.current && <span className="ledger-tag">Current</span>}
                  </div>
                  <div className="ledger-meta">
                    <span className="ledger-org">{item.org}</span>
                    <span className="ledger-date">{item.date}</span>
                  </div>
                  <p>{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
