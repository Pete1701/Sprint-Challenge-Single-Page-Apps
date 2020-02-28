import React from "react";
import { Link } from "react-router-dom";
import {
  Card,  
  CardBody,
  CardImg,  
  CardText,  
} from "reactstrap";

export default function WelcomePage() {
  return (
    <Card className="welcome-page">
      <CardBody>
        <CardText>Welcome to the ultimate fan site!</CardText>
        <Link to={`/characters`}>
          <CardImg
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </Link>
      </CardBody>
    </Card>
  );
}
