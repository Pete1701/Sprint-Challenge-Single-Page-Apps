import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState([])
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
      .then((response) => {
        console.log(response);
        setCharacters(response.results)
      })
      .catch((error) => {
        console.log('No data', error)
      })
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      {characters.map((character) => (
        <CharacterCard image={character.image}
                       name={character.name} />
      ))}      
    </section>
  );
}
