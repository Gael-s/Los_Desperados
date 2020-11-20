import React from 'react';

import "./Resultat.css";

function Resultat(props) {

    // const {strEvent} = props;

    return (
        <>
                
            <div className="resultats"> 
                <h2 className="titreResultat">Results</h2>   
                    <div className="leFlex">         
                                <div className="card">
                                        <div className="title-card">
                                            <h3 className="date-event">{props.dateEvent}15/01/2020</h3>
                                            <p className="saisons">{props.strSeason}2019-2020</p>
                                        </div>
                                        <div className="teams">
                                            <div className="team-name">{props.strHomeTeam}Paris</div>
                                            <div className="team-name">{props.strAwayTeam}Sochaux</div>                            
                                        </div>
                                        <div className="Score">
                                            <div className="theScore">{props.intHomeScore}3</div>
                                            <p className="tiret">-</p>
                                            <div className="theScore">{props.intAwayScore}0</div>
                                        </div>                                                        
                                </div> 
                    </div>
            </div>  
            
        </>
    )
}


export default Resultat;
