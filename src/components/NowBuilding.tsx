import React from "react";
import ScrollReveal from "./ScrollReveal";
import nowBuilding from "../data/now-building.json";
import "../assets/styles/NowBuilding.scss";

type Entry = {
  id: string;
  name: string;
  description: string;
  target: string;
  addedDate: string;
};

const ENTRIES = nowBuilding as Entry[];

function NowBuilding() {
  if (ENTRIES.length === 0) {
    return null;
  }

  return (
    <div id="now-building">
      <div className="items-container">
        <h1>Now Building</h1>
        <div className="now-building-grid">
          {ENTRIES.map((entry, i) => (
            <ScrollReveal key={entry.id} delay={i * 80}>
              <div className="now-building-card">
                <div className="now-building-head">
                  <h3>{entry.name}</h3>
                  <span className="now-building-tag">In Progress</span>
                </div>
                <p>{entry.description}</p>
                <div className="now-building-meta">
                  <span className="now-building-target">For: {entry.target}</span>
                  <span className="now-building-date">Since {entry.addedDate}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NowBuilding;
