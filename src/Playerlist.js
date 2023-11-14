import React from "react";
import Players from "./players";
import Player from "./Player";

const Playerlist = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-around",alignItems:"center",marginTop:70}}>
      {Players.map((el) => (
        <Player name={el.name} team={el.team} nationality={el.nationality} jerseynumber={el.jerseynumber} age={el.age} imageurl={el.imageurl} />
      ))}
    </div>
  );
};


export default Playerlist;
