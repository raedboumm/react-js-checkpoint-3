import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';


const Player = ({name,team,nationality,jerseynumber,age,imageurl}) => {
  return (
    <div >
      <Card  className ="card" style={{ width: "18rem" , height:600}}>
        <Card.Img variant="top" src={imageurl} style={{width:"100%"  , height:350}} /> 
        <Card.Body className="cardbody">
          <Card.Title> {name} </Card.Title>
          <Card.Text style={{textAlign:"center"}}> 
           Team: {team}
            <br />
           nationality: {nationality}
            <br />
           Number {jerseynumber} 
            <br/>
            Age :{age}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );

};
Player.defaultProps = {
 
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseynumber: 0,
  age: 0,
  imageURL: "https://example.com/default.jpg"
} 

export default Player;
