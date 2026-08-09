import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jun 2024 - present"
            iconStyle={{ background: '#B47F25', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Global IT Lead / IT Operations Team Lead</h3>
            <h4 className="vertical-timeline-element-subtitle">Aberdeen Services &middot; Mauritius (supporting Besins Healthcare)</h4>
            <p>
              Leading ISO 27001:2022 adoption end to end, IT security hardening (AD hardening, IAM), and acting as IT Project Manager on key technology initiatives in a regulated healthcare environment.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2023 - May 2024"
            iconStyle={{ background: '#B47F25', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">IT Project Manager &amp; ISO 27001 Lead Implementor</h3>
            <h4 className="vertical-timeline-element-subtitle">JurisTax Holdings &middot; Ebene, Mauritius</h4>
            <p>
              Led modern workplace / M365 rollout, SharePoint Online deployment, Power Automate workflow automation, and built an ISMS from the ground up.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2022 - Jul 2023"
            iconStyle={{ background: '#B47F25', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Head of Emerging Technologies</h3>
            <h4 className="vertical-timeline-element-subtitle">Techgenic Ltd &middot; Quatre Bornes, Mauritius</h4>
            <p>
              Built the Analytics &amp; Data-Driven Decision Making practice, drove AI/automation initiatives, and led client-facing technology advisory engagements.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2018 - Mar 2023"
            iconStyle={{ background: '#B47F25', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Assistant IT Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">Intercontinental Trust Ltd &middot; Mauritius</h4>
            <p>
              Owned IT General Controls (ITGC) for FSC-regulated audit cycles, administered Citrix VDI, and liaised between IT, Compliance, Risk, and Operations.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
