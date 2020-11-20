import React from 'react';

import "./Resultat.css";

function Resultat(props) {

    // const {strEvent} = props;

    return (
        <div>
            <div>{props.dateEvent}</div>
            <div>
                <div>Sport</div>
                <div>{props.strSport}</div>
                <div>Season</div>
                <div>{props.strSeason}</div>
                <div>Hometeam</div>
                <div>{props.strHomeTeam}</div>
                <div>Awayteam</div>
                <div>{props.strAwayTeam}</div>
            </div>
            <div>Score</div>
            <div>
                <div>Hometeam</div>
                <div>{props.intHomeScore}</div>
                <div>Awayteam</div>
                <div>{props.intAwayScore}</div>
            </div>
        </div>
    )
}


export default Resultat;
