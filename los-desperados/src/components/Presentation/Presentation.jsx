import React from "react";
import "./Presentation.css";

function Presentation() {
  return (
    <div className="container__presentation">
      <div className="presentation__title">
        <h2 id="presentation__title">Presentation</h2>
      </div>
      <img
        src="https://media.discordapp.net/attachments/778648516066541568/779007005251731526/bif.jpeg"
        alt="Biff"
        className="biff"
      />
      <div className="presentation__text">
        <h2 id="presentation__text">
        If you want to be rich as Biff TANNEN,
        just choose your sport and the
        year
        </h2>
      </div>
    </div>
  );
}

export default Presentation;
