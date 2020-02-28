import React from "react";
import {
  Card,  
  CardBody,  
  CardText
} from "reactstrap";
import styled from 'styled-components';

const MainTitle = styled.h1`
    color: aqua;
    font-size: 2rem;

    @media (min-width: 1200px) {
      font-size: 3rem;
    }

    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
`;

const Image = styled.img`
    width: 70%;
`;    

export default function CharacterCard(props) {
  return (
  // <span>todo: character</span>    
      <Card>
        <CardBody>
          <MainTitle>{props.name}</MainTitle>
          <Image src={props.image} alt='Character' />          
        </CardBody>
        <CardBody>
          <CardText>{props.status}</CardText>
          <CardText>{props.location}</CardText>
        </CardBody>      
      </Card>    
  );
};
