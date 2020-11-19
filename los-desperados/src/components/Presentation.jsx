import React from 'react'
import "./Presentation.css"

function Presentation() {
    return (
        <div>
            <div className="img-biff">
                <img  src="https://media.discordapp.net/attachments/778648516066541568/779007005251731526/bif.jpeg" alt="Biff" className="biff"/>
            </div>
          <section>  
            <div className="presentation-div-title">
                <h2 className="presentation-tiltle" id="presentation-title">Presentation</h2>
            </div>
            <div className="presentation-div-text">
                <h2 className="presentation-tiltle" id="presentation-text">If you want to be rich as Biff TANNEN,
                 just choose your sport and the year</h2>
            </div>    
          </section>      
        </div>
    )
}

export default Presentation
