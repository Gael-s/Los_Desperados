import React from 'react';

import axios from 'axios';

import Resultat from './Resultat/Resultat';



class Recherche extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            event: [],
            loading: true,
            seasons: ["goldorak"]

        }
        this.getRecherche = this.getRecherche.bind(this);
    }

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1000);
    }

    getRecherche() {
        axios
            .get("https://www.thesportsdb.com/api/v1/json/1/searchevents.php?e&s=1950-1951")
            .then(res => res.data)
            .then(data => {
                this.setState({
                    event: data.event,
                });
            })
    }

    render() {
        const { seasons } = this.state;
        const { event } = this.state;

        let bool = false;
        {
            event.map(season => (
                bool = false,
                seasons.map(year => (
                    season.strSeason == year ? bool = true : bool = false,
                    console.log("HeyHoooooooo")
                )
                ),
                bool ? bool=true : seasons.push({season})
                    // this.setState({seasons : season})
            ))
            // console.log(seasons);
        };









        return (
            <div>
                {event.map(season => (
                    <div>
                        <label>
                            <select type="select" >
                                <option value={season.strSeason}>{season.strSeason}</option>
                            </select>
                        </label>
                    </div>
                ))}
                <button type="button" onClick={this.getRecherche}>Give me the results</button>
                {event.map(season => (
                    <div>
                        <Resultat key={season.idEvent} strSeason={season.strSeason} />
                    </div>)
                )}
            </div>
        );
    };
}

export default Recherche;