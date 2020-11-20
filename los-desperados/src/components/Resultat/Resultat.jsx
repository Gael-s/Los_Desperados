import React from "react";

import "./Resultat.css";

function Resultat(props) {
  // const {strEvent} = props;

  return (
    <>
      <div>
        <div className="leFlex">
          <div className="card">
            <div className="title-card">
              <h3 className="date-event">{props.dateEvent}</h3>
              <p className="saisons">{props.strSeason}</p>
            </div>
            <div className="teams">
              <div className="team-name">{props.strHomeTeam}</div>
              <div className="team-name">{props.strAwayTeam}</div>
            </div>
            <div className="Score">
              <div className="theScore">{props.intHomeScore}</div>
              <p className="tiret">-</p>
              <div className="theScore">{props.intAwayScore}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resultat;
