import React from "react";

import axios from "axios";

import Resultat from "./Resultat/Resultat";

class Recherche extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: [],
      loading: true,
      seasons: [],
      selectedSeason: ""
    };
    this.handleChangeSeason = this.handleChangeSeason.bind(this);
    this.getRecherche = this.getRecherche.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1000);
    axios
      .get(
        `https://www.thesportsdb.com/api/v1/json/1/searchevents.php?e`
      )
      .then((res) => res.data)
      .then((data) => {
       console.log(data);
       
        const { seasons } = this.state;
    data.event.forEach(season => {
        if (seasons.length === 0) {
            seasons.push(season.strSeason);
        }
        
        seasons.forEach(year => {
            if ( season.strSeason !== year ) {
                seasons.push(season.strSeason);
            }
        });
    });
        
        this.setState({
          event: data.event,
          seasons: seasons,
        });
      });
    // this.setState({event : [{strSeason: "1950-1951"},{strSeason: "1951-1952"}]});
    
  
  }

  
  getRecherche() {
    
    if (this.state.selectedSeason !== "") {
    axios
      .get(
        `https://www.thesportsdb.com/api/v1/json/1/searchevents.php?e&s=${this.state.selectedSeason}`
      )
      .then((res) => res.data)
      .then((data) => {
        this.setState({
          event: data.event,
        });
      });
    }
  }

  handleChangeSeason(e) {
    this.setState({selectedSeason: e.target.value})
  }

  render() {
    const { seasons } = this.state;
    const { event } = this.state;
    // let bool = false;
    // {
    //   event.map(
    //     (season) => (
    //       (bool = false),
    //       seasons.length == 0 ? (bool = false) : (bool = true),
    //       seasons.map((year) =>
    //         season.strSeason == year ? (bool = true) : (bool = false)
    //       ),
    //       bool ? (bool = true) : seasons.push(season.strSeason)
    //     )
    //   );
    // }


    return (
      <div>
        
          <div>
            <label>
              <select type="select" value ={this.state.selectedSeason} onChange={this.handleChangeSeason}>
              {seasons.map((season) => (
                <option value={season}>{season}</option>
                ))}
              </select>
            </label>
          </div>
        
        <button type="button" onClick={this.getRecherche}>
          Give me the results
        </button>
        {event.map((season) => (
          <div>
            <Resultat
              key={season.idEvent}
              strSeason={season.strSeason}    
              strHomeTeam={season.strHomeTeam}
              strAwayTeam={season.strAwayTeam}
              intHomeScore={season.intHomeScore}
              intAwayScore={season.intAwayScore}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Recherche;
