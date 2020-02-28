import React from "react";
// import SearchForm from './SearchForm';
import {
  Card  
} from "reactstrap";
import styled from 'styled-components';

const Title = styled.h1`
    color: red;
    font-size: 2.5rem;

    @media (min-width: 1200px) {
      font-size: 4rem;
    }

    @media (max-width: 500px) {
      font-size: 1.8rem;
    }
`;

export default function Header() {
  return (
    <Card className="ui centered">
      <Title className="ui center">Rick &amp; Morty Fan Page</Title>
      {/* <SearchForm /> */}
    </Card>
  );
}

// Create a search form that will filter through the data displayed in the character list.
